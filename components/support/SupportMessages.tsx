'use client';

import { MessageCircleMore } from 'lucide-react';
import { type ChatStatus, type UIMessage } from 'ai';
import { SupportSuggestions } from '@/components/support/SupportSuggestions';

type SupportMessagesProps = {
  messages: UIMessage[];
  status: ChatStatus;
  onSuggestionSelect: (value: string) => void;
};

function getMessageText(message: UIMessage) {
  return message.parts
    .filter((part) => part.type === 'text')
    .map((part) => ('text' in part ? part.text : ''))
    .join('\n')
    .trim();
}

export function SupportMessages({
  messages,
  status,
  onSuggestionSelect,
}: SupportMessagesProps) {
  const isBusy = status === 'submitted' || status === 'streaming';

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-3xl">
          <div className="surface-card p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
              <MessageCircleMore className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl">Support for setup, compatibility, and arrival-day questions.</h2>
            <p className="body-copy mt-4 max-w-2xl">
              Ask about installation timing, whether your phone supports eSIM, how to keep your
              main number active, or what to expect for coverage during your trip.
            </p>
            <div className="mt-8">
              <SupportSuggestions onSelect={onSuggestionSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 py-2">
        {messages.map((message) => {
          const text = getMessageText(message);

          if (!text) {
            return null;
          }

          const isUser = message.role === 'user';

          return (
            <div
              key={message.id}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={
                  isUser
                    ? 'max-w-[85%] rounded-[1.4rem] bg-[color:var(--accent)] px-5 py-4 text-white sm:max-w-[70%]'
                    : 'surface-card max-w-[92%] px-5 py-4 sm:max-w-[78%]'
                }
              >
                <p
                  className={`whitespace-pre-wrap text-[0.98rem] leading-7 ${
                    isUser ? 'text-white' : 'text-[color:var(--foreground)]'
                  }`}
                >
                  {text}
                </p>
              </div>
            </div>
          );
        })}

        {isBusy ? (
          <div className="flex justify-start">
            <div className="surface-card max-w-[78%] px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--foreground-muted)]">
                Support is typing
              </p>
              <p className="body-copy mt-3">Preparing a practical answer for your trip.</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
