export default function Connector() {
  return (
    <div className="grid grid-cols-[50%_50%] z-0">
      <div className="relative w-full h-[300px] bg-white flex items-start justify-center">
        <div className="absolute top-10 left-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-[82px] left-[32%] w-[150px] h-[4px] bg-black transform origin-left rotate-45"></div>

        <div className="absolute top-[188px] left-[47.5%] w-[200px] h-[4px] bg-black"></div>
      </div>

      <div className="relative w-full h-[300px] bg-white flex items-start justify-center">
        <div className="absolute top-10 right-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-[107px] right-[25.8%] w-[150px] h-[4px] bg-black transform origin-left rotate-[315deg]"></div>

        <div className="absolute top-[189px] right-[47.8%] w-[200px] h-[4px] bg-black"></div>
      </div>

      <div className="relative w-full h-[300px] bg-white flex items-start justify-center">
        <div className="absolute bottom-10 left-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-[87px] left-[31.9%] w-[150px] h-[4px] bg-black transform origin-left rotate-[315deg]"></div>

        <div className="absolute top-[104.19px] left-[47.5%] w-[200px] h-[4px] bg-black"></div>
      </div>

      <div className="relative w-full h-[300px] bg-white flex items-start justify-center">
        <div className="absolute bottom-10 right-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-[108px] right-[26.2%] w-[150px] h-[4px] bg-black transform origin-left rotate-45"></div>

        <div className="absolute top-[108px] right-[48.3%] w-[200px] h-[4px] bg-black"></div>
      </div>
    </div>
  );
}
