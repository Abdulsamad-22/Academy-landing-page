import OurTeamImage from "./OurTeamImage";
import OurTeamText from "./OurTeamText";

export default function JoinOurTeam({ label }) {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-[#c4c4c4]">
      <OurTeamText label={"Join Our Team"} />
      <OurTeamImage />
    </section>
  );
}
