
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateDesignBrief = async (userVision: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Acting as a senior design consultant for 'Badar', a premium design agency, provide a professional design brief based on this user vision: "${userVision}". 
    The brief should include: 
    1. Creative Direction 
    2. Suggested Color Palette 
    3. Typography Recommendations 
    4. Suggested Mediums (e.g., Wraps, Digital, Print). 
    Keep it concise and professional. Respond in Markdown format.`,
    config: {
      temperature: 0.7,
      topP: 0.95,
      maxOutputTokens: 1000,
    }
  });
  return response.text;
};
