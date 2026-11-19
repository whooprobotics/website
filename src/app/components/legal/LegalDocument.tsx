import Link from "next/link";
import PageHeader from "@/src/app/components/PageHeader";
import { CONTACT_EMAIL } from "@/src/lib/seo";

interface LegalDocumentProps {
  title: string;
  description: string;
  effectiveDate: string;
  children: React.ReactNode;
}

/** Shared layout for the privacy policy and terms of service. */
export default function LegalDocument({ title, description, effectiveDate, children }: LegalDocumentProps) {
  return (
    <div className="flex flex-col">
      <PageHeader title={title} description={description} />
      <section className="w-full pb-20">
        <article className="mx-auto w-full max-w-3xl px-6 md:px-10">
          <div className="surface rounded-3xl p-6 sm:p-10 flex flex-col gap-10 font-secondary text-body leading-relaxed">
            <p className="text-sm text-muted">
              Effective {effectiveDate}. Questions? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
              . See also our{" "}
              <Link href="/privacy" className="text-primary underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-primary underline underline-offset-2">
                Terms of Service
              </Link>
              .
            </p>
            {children}
          </div>
        </article>
      </section>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_strong]:text-text">
      <h2 className="font-primary text-2xl md:text-3xl text-text tracking-wide">{title}</h2>
      {children}
    </section>
  );
}
