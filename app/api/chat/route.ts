import { convertToModelMessages, streamText, type UIMessage } from 'ai';
import { DEFAULT_SUPPORT_MODEL } from '@/lib/ai/models';
import { supportSystemPrompt } from '@/lib/ai/prompts';
import { googleProvider } from '@/lib/ai/providers';
import { chatRequestSchema } from './schema';

export const maxDuration = 30;

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return Response.json(
      { error: 'Missing GEMINI_API_KEY for support chat.' },
      { status: 500 }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = chatRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json({ error: 'Invalid chat payload.' }, { status: 400 });
  }

  try {
    const modelMessages = await convertToModelMessages(
      parsed.data.messages.map(({ id: _id, ...message }) => message) as Array<
        Omit<UIMessage, 'id'>
      >
    );

    const result = streamText({
      model: googleProvider(DEFAULT_SUPPORT_MODEL),
      system: supportSystemPrompt,
      messages: modelMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Support chat API error:', error);
    return Response.json(
      { error: 'Support chat is temporarily unavailable.' },
      { status: 500 }
    );
  }
}
