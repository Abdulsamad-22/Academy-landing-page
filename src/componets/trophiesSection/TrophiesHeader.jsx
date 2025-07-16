import SectionLabel from "../utils/SectionLabel";

export default function TrophiesHeader({ label }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <SectionLabel
        bgColor="bg-[rgba(199,32,32,0.2)] text-[#fff]"
        label={label}
      />

      <div className="flex flex-col justify-center items-center text-[#fff] space-y-4 mt-4 mb-12">
        <h5 className="text-[2rem] md:text-4xl font-semibold">
          Victory is in Our DNA
        </h5>
        <p className="w-[70%] text-[0.875rem] md:text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas morbi
          erat enim faucibus. Nisl aliquet pellentesque in
        </p>
      </div>
    </div>
  );
}
