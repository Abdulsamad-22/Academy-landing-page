export default function HeaderTexts() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:justify-between absolute top-1/3 md:top-1/2 -translate-y-1/2 left-[47%]  -translate-x-1/2 md:right-10 text-[#fff] pl-[2rem] z-10">
      <div className="w-full md:w-[53%] px-4 md:px-16 md:pt-[60px] text-center md:text-left">
        <div className="space-y-4 mb-8">
          <h1 className="text-[2rem] md:text-[4rem] font-semibold">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1px white",
              }}
            >
              TRADITION
            </span>
            , PRIDE & FUTURE
          </h1>
          <p className="text-[0.875rem] text-[#EDEAEA] md:text-[1.125rem] leading-[1.75]">
            Our task is to ensure that the leading football and mini-football
            academies of the country take our kids to their place. To make our
            school a springboard for them into serious professional football.
          </p>
        </div>
        <button className="py-3 px-8 bg-[#c72020] hover:bg-[#db3a3a] transition text-[1.125rem] text-[#fff]">
          Enroll Now
        </button>
      </div>

      {/* <img
        className="w-[432px] md:w-[520px] h-[549px] md:h-[720px] z-0"
        src="/images/hero-image.png"
        alt=""
      /> */}
    </div>
  );
}
