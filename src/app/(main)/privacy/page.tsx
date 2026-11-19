import type { Metadata } from "next";
import LegalDocument, { LegalSection } from "@/src/app/components/legal/LegalDocument";
import { CONTACT_EMAIL, pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Aggie Robotics collects, uses, and protects information on its websites.",
  path: "/privacy",
});

const EFFECTIVE_DATE = "November 18, 2026";

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      title="PRIVACY POLICY"
      description="What we collect when you use Aggie Robotics websites, and how we use it."
      effectiveDate={EFFECTIVE_DATE}
    >
      <LegalSection title="Who we are">
        <p>
          Aggie Robotics is a student organization at Texas A&amp;M University. This policy covers{" "}
          <strong>aggierobotics.com</strong> and the club&apos;s sites on its subdomains, including the
          member points site (points.aggierobotics.com), our sign-in service (auth.aggierobotics.com), and
          club tools such as the wiki and recruitment platform. These sites are run by student officers and are
          not official Texas A&amp;M University services.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>
          <strong>Public pages.</strong> You can browse aggierobotics.com without signing in. We don&apos;t
          use advertising or third-party analytics trackers. Our hosting provider, Cloudflare, processes
          standard request information (such as IP address and browser type) to deliver the site and protect
          it from abuse.
        </p>
        <p>
          <strong>Google sign-in.</strong> Some club sites ask you to sign in with your Texas A&amp;M
          (@tamu.edu) or Blinn (@buc.blinn.edu) Google account. When you do, Google shares the following with
          us:
        </p>
        <ul>
          <li>Your name and email address</li>
          <li>Your Google profile picture</li>
          <li>Your Google account ID and your school&apos;s Google Workspace domain</li>
        </ul>
        <p>
          We request only the basic <em>openid</em>, <em>email</em>, and <em>profile</em> permissions. We
          never receive your password and cannot access your email, Drive files, or any other Google data.
        </p>
        <p>
          <strong>Club records.</strong> Officers keep membership records, such as names, school emails,
          member type, and participation points, in club-managed Google Sheets. Some tools may ask you for
          additional information for a specific purpose (for example, responses to a recruitment
          application). Those tools tell you what they collect when you submit it.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <ul>
          <li>To confirm you are a current Texas A&amp;M or Blinn student before granting access</li>
          <li>To show you your own information, such as your membership points</li>
          <li>To let officers manage membership, events, and recruitment</li>
          <li>To keep our sites secure and working properly</li>
        </ul>
        <p>
          We do not sell your information, use it for advertising, or share it with anyone outside the club
          except the service providers listed below.
        </p>
      </LegalSection>

      <LegalSection title="Google user data">
        <p>
          Aggie Robotics&apos; use and transfer of information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="text-primary underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Information from Google sign-in is used only to identify
          you on club sites as described in this policy.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>We use only the cookies needed to sign you in:</p>
        <ul>
          <li>
            <strong>ar_session</strong> keeps you signed in across Aggie Robotics sites. It holds a signed token
            with your name, email, and profile picture, and expires after 7 days or when you sign out.
          </li>
          <li>
            <strong>__Host-ar_oauth</strong> is a temporary cookie used only while signing in, and expires
            within 10 minutes.
          </li>
        </ul>
        <p>We don&apos;t use advertising or tracking cookies.</p>
      </LegalSection>

      <LegalSection title="Service providers">
        <ul>
          <li>
            <strong>Google</strong> provides sign-in and hosts the Google Sheets where officers keep club
            records.
          </li>
          <li>
            <strong>Cloudflare</strong> hosts our websites.
          </li>
        </ul>
        <p>These providers process information on our behalf under their own privacy and security terms.</p>
      </LegalSection>

      <LegalSection title="Who can see your information">
        <p>
          When you sign in, you see only your own records. Club officers can see members&apos; records to run
          the organization. Access to club records is limited to current officers.
        </p>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          Our sign-in service does not keep a database of sign-ins; your session lives only in your browser
          cookie. Club records are kept as long as officers need them to run the organization (for example,
          for the current semester and for officer and membership history).
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <ul>
          <li>You can sign out at any time, which removes the session cookie.</li>
          <li>
            You can remove the club&apos;s access to your Google account at{" "}
            <a
              href="https://myaccount.google.com/connections"
              className="text-primary underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              myaccount.google.com/connections
            </a>
            .
          </li>
          <li>
            To see, correct, or delete information we hold about you, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Sign-in features are for college students. Our public pages are not directed at children under 13,
          and we do not knowingly collect information from them.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy as our sites change. We&apos;ll post the new version here with a new
          effective date, and let members know about significant changes.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
