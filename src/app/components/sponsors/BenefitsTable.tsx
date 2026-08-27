import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { BenefitLevel, benefits, tiers } from "@/src/content/sponsors";

/** Smallest tier first, the way the sponsorship packet reads. */
const columns = [...tiers].reverse();

function Cell({ level }: { level: BenefitLevel }) {
  if (level === true) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
        <RiCheckLine className="h-4 w-4" aria-hidden />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (level === false) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center text-muted/50">
        <RiCloseLine className="h-4 w-4" aria-hidden />
        <span className="sr-only">Not included</span>
      </span>
    );
  }

  return <span className="font-primary tracking-wide text-primary">{level}</span>;
}

export default function BenefitsTable() {
  return (
    <div className="surface overflow-x-auto rounded-3xl">
      <table className="w-full min-w-[42rem] border-collapse text-center">
        <caption className="sr-only">Sponsorship benefits by annual giving tier</caption>
        <thead>
          <tr>
            <th scope="col" className="px-5 py-5 text-left align-bottom">
              <span className="font-primary text-lg text-primary">SPONSORSHIP BENEFITS</span>
              <span className="mt-1 block font-secondary text-sm text-muted">Given annually</span>
            </th>
            {columns.map((tier) => (
              <th key={tier.id} scope="col" className="px-4 py-5 align-bottom">
                <span className="flex flex-col items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rotate-45 rounded-[2px] ${tier.accent}`} />
                  <span className="font-primary tracking-wide text-primary">
                    {tier.label}
                    {tier.meeting ? <sup className="ml-0.5">**</sup> : null}
                  </span>
                  <span className="font-secondary text-sm whitespace-nowrap text-muted">{tier.range}</span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit) => (
            <tr key={benefit.label} className="border-t border-hairline">
              <th scope="row" className="px-5 py-3.5 text-left font-secondary font-bold">
                {benefit.label}
              </th>
              {columns.map((tier) => (
                <td key={tier.id} className="px-4 py-3.5">
                  <Cell level={benefit.levels[tier.id]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
