import SectionLabel from "../utils/SectionLabel";

export default function TrophiesHeader({ label }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-33 mb-8">
        <SectionLabel label={label} />
      </div>

      <div className="flex flex-col justify-center items-center text-[#fff] mb-12">
        <h5 className="text-4xl font-semibold">Victory is in Our DNA</h5>
        <p className="w-[70%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas morbi
          erat enim faucibus. Nisl aliquet pellentesque in
        </p>
      </div>
    </div>
  );
}
