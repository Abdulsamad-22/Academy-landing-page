import SectionLabel from "../utils/SectionLabel";

const newsContents = [
  {
    image: "/images/news-image1.png",
    alt: "news-image",
    header: "Training Center Day After Between Unloading and Match",
    subText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            morbi erat enim faucibus. Nisl alique`,
    date: "July 23, 2025",
  },

  {
    image: "/images/news-image2.png",
    alt: "news-image",
    header: "Young Lads Debrief   The Stats After First Home Game",
    subText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            morbi erat enim faucibus. Nisl alique`,
    date: "July 23, 2025",
  },

  {
    image: "/images/news-image3.png",
    alt: "news-image",
    header: "Chrisanctus and Pascal; “We Only Have One Result Victory”",
    subText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            morbi erat enim faucibus. Nisl alique`,
    date: "July 23, 2025",
  },

  {
    image: "/images/news-image4.png",
    alt: "news-image",
    header: "BLFA Announces Partnership With Detyms Supermarket!",
    subText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            morbi erat enim faucibus. Nisl alique`,
    date: "July 23, 2025",
  },

  {
    image: "/images/news-image5.png",
    alt: "news-image",
    header: "Training Center   Energizing for Green Hose",
    subText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            morbi erat enim faucibus. Nisl alique`,
    date: "July 23, 2025",
  },

  {
    image: "/images/news-image6.png",
    alt: "news-image",
    header: "Training Center   BLFA’s Week Begins",
    subText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            morbi erat enim faucibus. Nisl alique`,
    date: "July 23, 2025",
  },
];

export default function News({ label }) {
  return (
    <section className="flex flex-col items-center my-[10rem]">
      <SectionLabel label={"Articles & News"} />

      <h4 className="text-[1.5rem] mt-4 md:text-[2rem] font-semibold mb-8 md:mb-12">
        Key News At a Glance
      </h4>

      <div className="w-full grid grid-col-1 md:grid-cols-3 gap-y-12 gap-x-4 px-9 -items-center">
        {newsContents.map((news, header) => (
          <div
            className="border-[1px] border-[#c4c4c4] rounded-t-2xl"
            key={header}
          >
            <div className="w-full cursor-pointer rounded-2xl">
              <img
                className="w-full rounded-2xl transition-transform duration-300 hover:-translate-y-2"
                src={news.image}
                alt=""
              />
            </div>

            <div className="w-full break-word h-40 space-y-3 px-3 mt-4 mb-0">
              <h4 className=" text-[1.25rem] font-semibold">{news.header}</h4>
              <p className="text-[1rem] text-[#666]">{news.subText}</p>
            </div>

            <div className="py-4 px-3 text-[#666] border-t-[1px] border-[#c4c4c4]">
              {news.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
