import { Metadata } from "next";

export default function Media() {
  return (
    <div className="flex flex-col justify-center md:gap-10 md:m-7">
        <h1 className="text-4xl font-bold text-center mt-10">Media Page Coming Soon!</h1>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Aggie Robotics - Media",
  description: "The media presence of Aggie Robotics at Texas A&M University.",
};
