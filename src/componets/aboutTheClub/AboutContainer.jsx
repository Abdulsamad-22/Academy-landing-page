import AboutClubText from "./AboutClubText";
import AboutImage from "./AboutImage";

export default function AboutContainer({ label }) {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-16 md:gap-40 bg-[#ECEFF2] py-12 px-6 md:p-12 mt-[72px]">
      <AboutImage />
      <AboutClubText label={label} />
    </section>
  );
}
