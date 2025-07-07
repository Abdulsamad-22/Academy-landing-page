export default function HeaderTexts() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between absolute -bottom-[0px] md:top-[80px] md:right-10 text-[#fff] w-full z-10">
      <div className="w-full md:w-[40%] px-4 md:px-20 md:pt-[60px] space-y-4 text-center md:text-left">
        <h1 className="text-[2rem] md:text-[4rem] font-semibold">
          <span className="border-3 border-[#c72020]">TRADITION</span>, PRIDE &
          FUTURE
        </h1>
        <p className="text-[0.75rem] md:text-[1.5rem]">
          Our task is to ensure that the leading football and mini-football
          academies of the country take our kids to their place. To make our
          school a springboard for them into serious professional football.
        </p>
        <button className="py-3 px-8 bg-[#c72020] text-[#fff]">
          Enrol Now
        </button>
      </div>

      <img
        className="w-[432px] md:w-[720px] h-[549px] md:h-[920px]"
        src="/images/hero-image.png"
        alt=""
      />
    </div>
  );
}
