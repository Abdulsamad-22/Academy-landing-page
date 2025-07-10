export default function AboutImage() {
  return (
    <div className="w-full md:w-[50%]">
      <img
        className="w-full h-full md:object-cover md:[clip-path:polygon(25%_0%,100%_0%,80%_100%,0%_100%)]"
        src="/images/about-image-mobile.png"
        alt="about image"
      />
    </div>
  );
}
