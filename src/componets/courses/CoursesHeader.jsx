export default function CoursesHeader() {
  return (
    <div className="text-center relative">
      <img
        className="w-full h-[90px] md:h-[120px]"
        src="/images/courses-image.png"
        alt=""
      />
      <h5 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl text-[#fff] font-semibold">
        Courses
      </h5>
    </div>
  );
}
