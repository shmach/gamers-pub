'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { useChatStore } from '@/store/chatStore';

type IInput = {
  userPrompt: string;
};

export async function sendBotMessage({ userPrompt }: IInput) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const chatHistory = useChatStore.getState().chatHistory;

  const chat = model.startChat({
    history: chatHistory,
    generationConfig: {
      temperature: 1,
    },
  });

  const prompt = userPrompt;
  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
