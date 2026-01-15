"use server";


import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY is missing in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function generateAIInsights(industry) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
Analyze the current state of the ${industry} industry and return ONLY valid JSON
in the following format:

{
  "salaryRanges": [
    { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
  ],
  "growthRate": number,
  "demandLevel": "High" | "Medium" | "Low",
  "topSkills": ["skill1", "skill2"],
  "marketOutlook": "Positive" | "Neutral" | "Negative",
  "keyTrends": ["trend1", "trend2"],
  "recommendedSkills": ["skill1", "skill2"]
}

Rules:
- Return ONLY JSON
- No markdown
- At least 5 roles, skills, and trends
- Growth rate must be a percentage number
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const cleanedText = text.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(cleanedText);
  } catch (err) {
    console.error("Invalid JSON from Gemini:", cleanedText);
    throw new Error("Failed to parse AI insights");
  }
}

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: { industryInsight: true },
  });

  if (!user) throw new Error("User not found");

  if (user.industryInsight) {
    return user.industryInsight;
  }

  const insights = await generateAIInsights(user.industry);

  return await db.industryInsight.create({
    data: {
      industry: user.industry,
      ...insights,
      nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });
}
