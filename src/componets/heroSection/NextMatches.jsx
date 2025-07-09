export default function NextMatches() {
  return (
    <div className="flex items-center justify-center gap-32 w-full bg-[#c72020]  text-[#fff] py-12 ml-0 md:-ml-8 mt-4 md:mt-14 z-10">
      <div className="text-center">
        <div className="space-y-2 mb-4">
          <h2 className="text-[1.25rem]">Next Match</h2>
          <hr className=" border-1 border-[#fff]" />
        </div>

        <div className="space-y-2">
          <p className="text-[1.125rem] mb-3">Friendly</p>
          <p className="text-[1.25rem]">Green Hose Fc - BLFA</p>
          <p className="text-sm">02/08/2025 4:00 PM</p>
        </div>
      </div>

      <div className="text-center">
        <div className="space-y-2 mb-4">
          <h2 className="text-[1.25rem]">Next Match</h2>
          <hr className="border-1 border-[#fff]" />
        </div>

        <div className="space-y-2">
          <p className="text-[1.125rem]">Chairman’s Cup</p>
          <p className="text-[1.25rem] mb-3">Green Hose Fc - BLFA</p>
          <p className="text-sm">11/07/2023 11:00 AM</p>
        </div>
      </div>
    </div>
  );
}
