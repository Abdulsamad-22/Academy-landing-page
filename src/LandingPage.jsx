import { useState } from "react";
import AboutContainer from "./componets/aboutTheClub/AboutContainer";
import Header from "./componets/heroSection/Header";
import LastMatch from "./componets/heroSection/LastMatch";
import NextMatches from "./componets/heroSection/NextMatches";
import Tasks from "./componets/ourTask/Tasks";
import SectionLabel from "./componets/utils/SectionLabel";

export default function LandingPage() {
  const [label, setLabel] = useState("");
  return (
    <>
      <Header />
      <section className="flex flex-col items-center w-full md:flex-row justify-center -mt-[60px] mx-0 md:mx-0 mb-8">
        <LastMatch />
        <NextMatches />
      </section>

      <AboutContainer label={label} />
      <div className="px-20 flex flex-col items-center mt-[32px]">
        <SectionLabel label={"Our Tasks"} />
        <Tasks />
      </div>
    </>
  );
}
