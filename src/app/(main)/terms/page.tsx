import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument, { LegalSection } from "@/src/app/components/legal/LegalDocument";
import { CONTACT_EMAIL, pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms for using Aggie Robotics websites and member tools.",
  path: "/terms",
});

const EFFECTIVE_DATE = "November 18, 2026";

export default function TermsOfService() {
  return (
    <LegalDocument
      title="TERMS OF SERVICE"
      description="The rules for using Aggie Robotics websites and member tools."
      effectiveDate={EFFECTIVE_DATE}
    >
      <LegalSection title="About these terms">
        <p>
          These terms apply to <strong>aggierobotics.com</strong> and the Aggie Robotics sites on its
          subdomains, including the member points site, the sign-in service, the wiki, and the recruitment
          platform. By using these sites, you agree to these terms and to our{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          Aggie Robotics is a student organization at Texas A&amp;M University. These sites are run by student
          officers and are not official Texas A&amp;M University or Blinn College services.
        </p>
      </LegalSection>

      <LegalSection title="Who can sign in">
        <ul>
          <li>
            Signing in requires a current Texas A&amp;M (@tamu.edu) or Blinn (@buc.blinn.edu) Google account.
          </li>
          <li>
            Some sites are for Aggie Robotics members only. Others, like the recruitment platform, are open to
            any signed-in student.
          </li>
          <li>Officers decide who has member or officer access.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Using the sites responsibly">
        <p>When you use Aggie Robotics sites, you agree not to:</p>
        <ul>
          <li>Share your access or sign in as someone else</li>
          <li>Try to view, change, or collect other members&apos; information without permission</li>
          <li>Interfere with the sites, get around access controls, or probe them for weaknesses</li>
          <li>Post or submit anything unlawful, harassing, or that infringes someone else&apos;s rights</li>
        </ul>
        <p>
          Officers with access to member records agree to use them only for club business and to keep them
          private.
        </p>
      </LegalSection>

      <LegalSection title="Points and club records">
        <p>
          Points and other membership records shown on our sites come from records kept by club officers.
          They may take a short time to update. If you think something is wrong, contact an officer; the
          officers&apos; records decide membership requirements and disputes.
        </p>
      </LegalSection>

      <LegalSection title="Content you submit">
        <p>
          You keep ownership of anything you submit, such as recruitment applications or wiki contributions.
          You allow Aggie Robotics to use it to run the club (for example, to review applications or publish
          wiki pages to members).
        </p>
      </LegalSection>

      <LegalSection title="Losing access">
        <p>
          We may suspend or remove access for anyone who breaks these terms or club rules, or when someone is
          no longer a member or student. You can stop using the sites and sign out at any time.
        </p>
      </LegalSection>

      <LegalSection title="No warranty">
        <p>
          The sites are provided by student volunteers &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We
          work to keep them accurate and running, but we don&apos;t guarantee they will always be available
          or error-free. To the extent allowed by law, Aggie Robotics and its officers are not liable for any
          loss that results from using the sites.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these terms. We&apos;ll post the new version here with a new effective date.
          Continuing to use the sites after a change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law and contact">
        <p>
          These terms are governed by the laws of the State of Texas. Questions about these terms can be sent
          to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
