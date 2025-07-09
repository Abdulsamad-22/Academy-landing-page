export default function LastMatch() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#12114E] w-full text-[#fff] py-6 z-20 -mt-8">
      <div className="space-y-2">
        <h2 className="text-[1.25rem]">Last Match</h2>
        <hr className="border-1 border-[#fff]" />
      </div>

      <div className="flex items-center justify-center gap-14 p-0 mt-6 mb-8">
        <div className="flex items-center space-x-2 text-2xl">
          <div className="w-[55px] h-[55px] rounded-full bg-[#fff] relative">
            <img
              className="w-[39px] h-[33px] absolute top-3 left-[7px]"
              src="/images/logo.png"
              alt=""
            />
          </div>
          <p>BLFA</p>
        </div>
        <div className="border-2 border-[#fff] py-1 px-4 text-2xl text-[#fff]">
          5 - 2
        </div>
        <div className="flex items-center space-x-2 text-2xl">
          <p>BLFA</p>
          <div className="w-[55px] h-[55px] rounded-full bg-[#fff] relative">
            <img
              className="w-[39px] h-[33px] absolute top-3 left-[7px]"
              src="/images/logo.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-[190px] p-2 bg-[#484141] mb-4">
          <p>States Championship</p>
        </div>

        <p className="font-light">TUE 06 2023, Ushafa Township Stadium</p>
      </div>
    </div>
  );
}
