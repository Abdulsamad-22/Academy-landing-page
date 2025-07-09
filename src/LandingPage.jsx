import Header from "./componets/heroSection/Header";
import LastMatch from "./componets/heroSection/LastMatch";
import NextMatches from "./componets/heroSection/NextMatches";

export default function LandingPage() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center w-full md:flex-row justify-center -mt-[60px] mx-4 md:mx-0 mb-8">
        <LastMatch />
        <NextMatches />
      </section>
    </>
  );
}
