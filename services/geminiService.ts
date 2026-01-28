
import { GoogleGenAI } from "@google/genai";

// Refactored to adhere to @google/genai coding guidelines.
export const generateDesignBrief = async (userVision: string) => {
  // Always use a named parameter and process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
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
        // maxOutputTokens is omitted to avoid blocking output without a specified thinking budget.
      }
    });

    // Access the .text property directly as it returns the string output.
    return response.text || "No brief generated. Please try again.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "The AI consultant is currently unavailable. Please contact Badar directly at info@badarai.site.";
  }
};
