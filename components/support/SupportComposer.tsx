'use client';

import { FormEvent } from 'react';
import { ArrowUpRight, Square } from 'lucide-react';
import { type ChatStatus } from 'ai';

type SupportComposerProps = {
  input: string;
  status: ChatStatus;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onStop: () => void;
};

export function SupportComposer({
  input,
  status,
  onInputChange,
  onSubmit,
  onStop,
}: SupportComposerProps) {
  const isBusy = status === 'submitted' || status === 'streaming';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.trim() || isBusy) {
      return;
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="surface-panel p-4 sm:p-5">
      <label htmlFor="support-message" className="field-label">
        Ask support
      </label>
      <textarea
        id="support-message"
        value={input}
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Ask about compatibility, installation, coverage, or keeping your main number active."
        rows={3}
        className="field-textarea min-h-28 resize-none"
      />
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm leading-6 text-[color:var(--foreground-muted)]">
          Best for pre-arrival setup questions and practical Maldives connectivity advice.
        </p>
        {isBusy ? (
          <button type="button" onClick={onStop} className="btn-secondary whitespace-nowrap">
            <Square className="h-4 w-4 fill-current" />
            Stop
          </button>
        ) : (
          <button type="submit" className="btn-primary whitespace-nowrap">
            Send
            <ArrowUpRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}
