import SectionLabel from "../utils/SectionLabel";

export default function AboutClubText({ label }) {
  return (
    <div className="w-full md:w-[50%]">
      <div className="mb-8 space-y-4 w-full md:w-[450px]">
        <div className="w-[140px]">
          <SectionLabel label={"About The Club"} />
        </div>

        <h3 className="text-[2rem] font-semibold">
          WELCOME TO THE HOME OF THE BLFA
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas morbi
          erat enim faucibus. Nisl aliquet pellentesque in dolor, fringilla
          faucibus. Nisl aliquet pellentesque in dolor, fringilla
        </p>
      </div>
      <button className="py-2 px-6 border-2 border-[#c72020] text-[#c72020]">
        Read More
      </button>
    </div>
  );
}
