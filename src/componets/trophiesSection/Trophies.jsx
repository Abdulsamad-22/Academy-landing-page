const trophies = [
  { image: "/images/trophy1.png", trophyNo: "8", trophyName: `Chairman's Cup` },
  { image: "/images/trophy2.png", trophyNo: "10", trophyName: "States League" },
  {
    image: "/images/trophy1.png",
    trophyNo: "4",
    trophyName: "Abuja Academy Championship",
  },
  {
    image: "/images/trophy2.png",
    trophyNo: "2",
    trophyName: "President’s Cup",
  },
];

export default function Trophies() {
  return (
    // <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[6rem] md: gap-y-0 ">
    <div className="flex flex-wrap md:flex-nowrap lg:flex-row lg:flex-nowrap items-center justify-center gap-12">
      {trophies.map((trophy, trophyName) => (
        <div
          className="flex flex-col justify-center items-center"
          key={trophyName}
        >
          <div className="h-80">
            <img className="h-full" src={trophy.image} alt="" />
          </div>

          <div className="w-[150px] text-[#fff] -mt-6">
            <p className="text-[2.75rem] font-semibold">{trophy.trophyNo}</p>
            <p className="text-[1.125rem]">{trophy.trophyName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
