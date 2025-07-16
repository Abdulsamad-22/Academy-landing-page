import OurTeamImage from "./OurTeamImage";
import OurTeamText from "./OurTeamText";

export default function JoinOurTeam({ label }) {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-[#D7D7D7] relative">
      <OurTeamText label={"Join Our Team"} />
      <OurTeamImage />

      <img
        className="absolute -bottom-[3rem] md:-top-[19rem] right-[25%] md:right-[270px] z-10 w-[321px] md:w-[471px] h-[592px] md:h-[792px]"
        src="/images/our-team-image.png"
        alt=""
      />
    </section>
  );
}
