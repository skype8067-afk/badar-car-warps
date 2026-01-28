
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  try {
    // Standard approach for browser environments that might not have process.env shimmed
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("API Key environment variable not accessible.");
  }
  return '';
};

const getAI = () => new GoogleGenAI({ apiKey: getApiKey() });

export const generateDesignBrief = async (userVision: string) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "The AI consultant is currently unavailable. Please contact Badar directly at info@badarai.site.";
  }

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
