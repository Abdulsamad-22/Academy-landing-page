import TrophiesHeader from "./TrophiesHeader";
import Trophies from "./Trophies";

export default function TrophiesContainer({ label }) {
  return (
    <section className="bg-[#AD0606] text-center py-20 ">
      <TrophiesHeader label={"Our Honours"} />
      <Trophies />
    </section>
  );
}
