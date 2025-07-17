import SectionLabel from "../utils/SectionLabel";

export default function AboutClubText({ label }) {
  return (
    <div className="w-full md:w-[50%]">
      <div className="mb-8 space-y-4 w-full md:w-[450px]">
        <SectionLabel label={"About The Club"} />

        <h3 className="text-[1.5rem] md:text-[2rem] text-[#000] font-semibold">
          WELCOME TO THE HOME OF THE BLFA
        </h3>
        <p className="text-[0.875rem] md:text-[1rem] text-[#161616]">
          At our Academy, we transform beginners into skilled footballers
          through our proven <strong>developmental pathway</strong>. Whether
          your child is kicking a ball for the first time or ready for advanced
          tactical training, our <strong>FA-certified coaches</strong> deliver
          age-appropriate training that builds both skills and confidence.
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
