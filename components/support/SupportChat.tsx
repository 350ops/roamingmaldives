'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { BrandWordmark } from '@/components/BrandWordmark';
import { SupportComposer } from '@/components/support/SupportComposer';
import { SupportMessages } from '@/components/support/SupportMessages';

function createUserMessage(text: string): UIMessage {
  return {
    id: crypto.randomUUID(),
    role: 'user',
    parts: [{ type: 'text', text }],
  };
}

export function SupportChat() {
  const [chatId] = useState(() => crypto.randomUUID());
  const [input, setInput] = useState('');

  const { messages, sendMessage, status, stop, error } = useChat({
    id: chatId,
    messages: [],
    transport: new DefaultChatTransport({
      api: '/api/chat',
      prepareSendMessagesRequest: (request) => ({
        body: {
          messages: request.messages,
        },
      }),
    }),
  });

  const submitMessage = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    sendMessage(createUserMessage(trimmed));
    setInput('');
  };

  return (
    <div className="surface-panel flex min-h-[70vh] flex-col overflow-hidden">
      <div className="border-b border-[color:var(--line)] px-5 py-5 sm:px-7">
        <p className="muted-label">Support chat</p>
        <div className="mt-3 flex items-center gap-3">
          <BrandWordmark
            className="font-[family:var(--font-display)] text-[1.7rem] tracking-[-0.05em] text-[color:var(--foreground)]"
            leadClassName="font-normal"
            trailClassName="font-semibold"
          />
          <span className="hidden text-sm text-[color:var(--foreground-muted)] sm:inline">
            Maldives eSIM help before you travel
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-5 px-4 py-4 sm:px-6">
        <SupportMessages
          messages={messages}
          status={status}
          onSuggestionSelect={submitMessage}
        />

        {error ? (
          <div className="rounded-[1rem] border border-[rgba(133,61,42,0.18)] bg-[rgba(195,125,94,0.08)] px-4 py-3 text-sm text-[color:#7f4b34]">
            Support chat is temporarily unavailable. Please try again in a moment.
          </div>
        ) : null}

        <SupportComposer
          input={input}
          status={status}
          onInputChange={setInput}
          onSubmit={() => submitMessage(input)}
          onStop={stop}
        />
      </div>
    </div>
  );
}
