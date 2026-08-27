import { Metadata } from "next";
import PageHeader from "@/src/app/components/PageHeader";

export default function Media() {
  return (
    <main className="flex flex-col justify-center">
      <PageHeader title="MEDIA" description="Page coming soon!" />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Media",
  description: "The media presence of Aggie Robotics at Texas A&M University.",
  alternates: { canonical: "/media" },
  // Placeholder page — keep it out of the index until there is content here.
  robots: { index: false, follow: true },
};
