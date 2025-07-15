import { useState } from "react";
import AboutContainer from "./componets/aboutTheClub/AboutContainer";
import Header from "./componets/heroSection/Header";
import LastMatch from "./componets/heroSection/LastMatch";
import NextMatches from "./componets/heroSection/NextMatches";
import Tasks from "./componets/ourTask/Tasks";
import SectionLabel from "./componets/utils/SectionLabel";
import CoursesContainer from "./componets/courses/CoursesContainer";
import News from "./componets/articlesNews/News";
import JoinOurTeam from "./componets/ourTeam/JoinOurTeam";
import TrophiesContainer from "./componets/trophiesSection/TrophiesContainer";
import Footer from "./componets/footer/Footer";

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
      <div className="px-20 flex flex-col items-center mt-[82px] mb-20">
        <SectionLabel label={"Our Tasks"} />
        <Tasks />
      </div>
      <CoursesContainer />
      <News label={label} />
      <JoinOurTeam label={label} />
      <TrophiesContainer label={label} />
      <Footer />
    </>
  );
}
