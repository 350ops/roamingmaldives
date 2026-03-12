import { z } from 'zod';

export const messagePartSchema = z.object({
  type: z.string(),
}).passthrough();

export const messageSchema = z.object({
  id: z.string(),
  role: z.enum(['user', 'assistant', 'system']),
  parts: z.array(messagePartSchema),
}).passthrough();

export const chatRequestSchema = z.object({
  messages: z.array(messageSchema).min(1),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;
