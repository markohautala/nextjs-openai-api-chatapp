import OpenAI from 'openai';
import { openAIStream, openAIStreamResponse } from 'ai';


//Create the API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});
export const runtime = "edge";


//Set the runtime to "edge" to use the edge runtime
export async function POST(req: Request, res: Response) {
  // Get the message from the request body
  const { message } = await req.body;
  console.log("message", message);
  // Ask the openai for a streaming chat response given to the propmt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { // We tell the AI how to respond to the user - its added to the users message every time
        role: "system",
        content: "You are a helpful coding assistant. Respond with code snippets and brief explanations. Keep text under 500 characters but keep the code as long as you need.",
      },
      ...messages;
    ],
    stream: true, // Makes the response smoother
    temperature: 1,
  });

  const stream = openAIStream(response);
  // Send the response to the client
  return new StreamingTextResponse(stream);
}