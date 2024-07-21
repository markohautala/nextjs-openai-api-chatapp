import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful coding assistant. Respond with code snippets and brief explanations. Keep text under 500 characters but keep the code as long as you need.",
      },
      ...message,
    ],
    stream: true,
    temperature: 1,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
