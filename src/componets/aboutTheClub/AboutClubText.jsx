import SectionLabel from "../utils/SectionLabel";

export default function AboutClubText({ label }) {
  return (
    <div className="w-full md:w-[50%]">
      <div className="mb-8 space-y-4 w-full md:w-[450px]">
        <SectionLabel label={"About The Club"} />

        <h3 className="text-[1.5rem] md:text-[2rem] font-semibold">
          WELCOME TO THE HOME OF THE BLFA
        </h3>
        <p className="text-[0.875rem] md:text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas morbi
          erat enim faucibus. Nisl aliquet pellentesque in dolor, fringilla
          faucibus. Nisl aliquet pellentesque in dolor, fringilla
        </p>
      </div>
      <div className="h-[44px]">
        <button className="py-2 px-6 border-2 border-[#c72020] text-[#c72020] hover:border-0 hover:bg-[#c72020] hover:text-white transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}
