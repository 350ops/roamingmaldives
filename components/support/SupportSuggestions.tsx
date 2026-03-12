'use client';

import { supportStarterQuestions } from '@/lib/ai/prompts';

type SupportSuggestionsProps = {
  onSelect: (value: string) => void;
};

export function SupportSuggestions({ onSelect }: SupportSuggestionsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {supportStarterQuestions.map((question) => (
        <button
          key={question}
          type="button"
          onClick={() => onSelect(question)}
          className="rounded-[1.1rem] border border-[color:var(--line)] bg-[rgba(255,253,249,0.78)] px-4 py-4 text-left text-sm leading-6 text-[color:var(--foreground-soft)] transition-colors hover:bg-[rgba(255,253,249,0.96)] hover:text-[color:var(--foreground)]"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
