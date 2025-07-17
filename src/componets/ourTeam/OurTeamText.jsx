import SectionLabel from "../utils/SectionLabel";

export default function OurTeamText({ label }) {
  return (
    <div className="w-full text-left md:w-[40%] py-12 md:py-0 px-8 md:px-12 z-10">
      <SectionLabel label={label} />

      <div className="w-full space-y-4 my-8">
        <h4 className="text-3xl font-semibold">
          Talk With Your Feet. Play With Your Heart.
        </h4>
        <p className="text-[1rem]">
          Join us as a player to unlock your potential through our elite
          development pathway, or as a coach to shape future stars.
        </p>
      </div>
      <div className="h-[44px]">
        <button className="py-2 px-8 border-2 border-[#c72020] text-[#c72020] font-semibold hover:border-0 hover:bg-[#c72020] hover:text-white transition duration-300 ">
          Join Now
        </button>
      </div>
    </div>
  );
}
