export default function Connector() {
  return (
    <div className="absolute top-16 left-[10%] w-[75%] grid grid-cols-[50%_50%] gap-y-[60px] gap-x-[50px] bg-transparent -mt-[30px] z-0 hidden md:grid">
      <div className="relative bg-transparent w-full h-[200px] bg-white flex items-start justify-center">
        <div className="absolute top-10 left-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-[83px] left-[36%] w-[150px] h-[3px] bg-black transform origin-left rotate-45"></div>

        <div className="absolute top-[188.4px] left-[59.5%] w-[120px] h-[3px] bg-black"></div>
      </div>

      <div className="relative bg-transparent w-full h-[200px] bg-white flex items-start justify-center">
        <div className="absolute top-10 right-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-[7px] right-[25.8%] w-[150px] h-[3px] bg-black transform origin-left rotate-[315deg]"></div>

        <div className="absolute top-[190px] right-[59.2%] w-[120px] h-[3px] bg-black"></div>
      </div>

      <div className="relative bg-transparent w-full h-[200px] bg-white flex items-start justify-center">
        <div className="absolute bottom-10 left-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-[80px] left-[36.7%] w-[150px] h-[3px] bg-black transform origin-left rotate-[315deg]"></div>

        <div className="absolute top-[11.2px] left-[60.1%] w-[120px] h-[3px] bg-black"></div>
      </div>

      <div className="relative bg-transparent w-full h-[200px] bg-white flex items-start justify-center">
        <div className="absolute bottom-10 right-1/4 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-300">
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-[12px] right-[26.6%] w-[150px] h-[3px] bg-black transform origin-left rotate-45"></div>

        <div className="absolute top-[13.3px] right-[60%] w-[120px] h-[3px] bg-black"></div>
      </div>
    </div>
  );
}
