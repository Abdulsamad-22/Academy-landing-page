export default function LastMatch() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#12114E] w-full text-[#fff] py-6 px-4 md:px-0 z-20 -mt-8">
      <div className="space-y-2">
        <h2 className="text-[1.25rem]">Last Match</h2>
        <hr className="border-1 border-[#fff]" />
      </div>

      <div className="flex items-center justify-center gap-14 p-0 mt-6 mb-8">
        <div className="flex items-center space-x-2 text-[1.25rem] md:text-2xl">
          <div className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] rounded-full bg-[#fff] relative">
            <img
              className="w-[29px] md:w-[39px] h-[23px] md:h-[33px] absolute top-3 left-[7px]"
              src="/images/logo.png"
              alt=""
            />
          </div>
          <p className="text-[1rem] md:text-[1.125rem]">BLFA</p>
        </div>
        <div className="border-2 border-[#fff] py-1 px-4 text-[1.125rem] md:text-2xl text-[#fff]">
          5 - 2
        </div>
        <div className="flex items-center space-x-2 text-2xl">
          <p className="text-[1rem] md:text-[1.125rem]">BLFA</p>
          <div className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] rounded-full bg-[#fff] relative">
            <img
              className="w-[29px] md:w-[39px] h-[23px] md:h-[33px] absolute top-3 left-[7px]"
              src="/images/logo.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="relative w-[190px] p-2 bg-[#484141] mb-4">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.2)] pointer-events-none"></div>
          <p className="text-[0.875rem] md:text-[1rem]">States Championship</p>
        </div>

        <p className="text-[0.875rem] md:text-[1rem] font-light">
          TUE 06 2023, Ushafa Township Stadium
        </p>
      </div>
    </div>
  );
}
