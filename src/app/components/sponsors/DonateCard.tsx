"use client";

import { useState } from "react";
import {
  RiArrowRightLine,
  RiBankCard2Line,
  RiBankLine,
  RiCheckLine,
  RiFileCopyLine,
} from "react-icons/ri";
import classNames from "classnames";
import {
  CHECK_ADDRESS,
  CHECK_PAYABLE,
  DONATE_URL,
  GIFT_DESIGNATION,
  GIFT_NOTES,
} from "@/src/content/sponsors";

type Method = "card" | "check";

const methods = [
  { id: "card", label: "Credit/Debit Card", icon: RiBankCard2Line },
  { id: "check", label: "Check", icon: RiBankLine },
] as const;

function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-2 flex items-center gap-2 rounded-xl bg-bg px-4 py-3 ring-1 ring-hairline">
      <p className="min-w-0 flex-1 font-secondary font-bold break-words">{value}</p>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${value}`}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 font-primary tracking-wide text-primary transition-colors hover:bg-primary/8 cursor-pointer"
      >
        {copied ? <RiCheckLine className="h-4 w-4" /> : <RiFileCopyLine className="h-4 w-4" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full brand-band font-primary text-sm text-white">
        {n}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">{children}</div>
    </li>
  );
}

export default function DonateCard() {
  const [method, setMethod] = useState<Method>("card");

  return (
    <article className="surface flex h-full flex-col rounded-3xl p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <RiBankLine className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-primary text-2xl md:text-3xl">Aggie Robotics Fund</h3>
          <p className="font-secondary text-sm text-muted">Two ways to fund the season</p>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Donation method"
        className="mt-6 grid grid-cols-2 gap-1 rounded-xl bg-bg p-1 ring-1 ring-hairline"
      >
        {methods.map((tab) => {
          const selected = method === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setMethod(tab.id)}
              className={classNames(
                "inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 font-primary tracking-wide transition-colors cursor-pointer",
                selected ? "bg-surface text-primary shadow-soft" : "text-muted hover:text-text"
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {method === "card" ? (
        <div className="mt-7 flex grow flex-col">
          <h4 className="font-primary text-xl">How to donate online</h4>
          <ol className="mt-5 space-y-5 font-secondary">
            <Step n={1}>
              Click the <span className="font-bold">Donate Online</span> button below.
            </Step>
            <Step n={2}>
              Select <span className="font-bold">&ldquo;{GIFT_DESIGNATION}.&rdquo;</span>
            </Step>
            <Step n={3}>
              In the gift notes field, enter:
              <CopyField value={GIFT_NOTES} />
            </Step>
            <Step n={4}>Complete your payment details.</Step>
          </ol>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-band lift mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-primary text-xl tracking-wide text-white"
          >
            Donate Online
            <RiArrowRightLine className="h-5 w-5" />
          </a>
          <p className="mt-4 font-secondary text-sm text-muted">
            Online gifts run through the Texas A&amp;M Foundation and are tax deductible.
          </p>
        </div>
      ) : (
        <div className="mt-7 flex grow flex-col">
          <h4 className="font-primary text-xl">Instructions for check donations</h4>
          <ol className="mt-5 space-y-5 font-secondary">
            <Step n={1}>
              Make the check payable to:
              <CopyField value={CHECK_PAYABLE} />
            </Step>
            <Step n={2}>
              Mail the check to:
              <address className="mt-2 rounded-xl bg-bg px-4 py-3 font-secondary font-bold not-italic ring-1 ring-hairline">
                {CHECK_ADDRESS.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </Step>
          </ol>
          <p className="mt-8 rounded-xl bg-primary/5 px-4 py-3 font-secondary text-sm text-muted ring-1 ring-primary/10">
            Checks come straight to our student mailbox and go to work on the robots right away. If you need a
            tax-deductible receipt, give online through the Texas A&amp;M Foundation instead.
          </p>
        </div>
      )}
    </article>
  );
}
