const footerLinks = [
  {
    header: "About Clubs",
    links: ["Homepage", "About Us", "Academy Programs", "Latest News"],
  },
  {
    header: "Team Info",
    links: ["Players & Coaches", "Player Profile", "Fixtures", "Tournament"],
  },
  {
    header: "Contact Us",
    links: [
      { link: "+234 (0) 8111642890", icon: "/images/Phone.svg" },
      {
        link: "Brilliantladsfootballacademy@yahoo mail.com",
        icon: "/images/mail.svg",
      },
      {
        link: "Ushafa Township Stadium, Ushafa, Bwari, Abuja",
        icon: "/images/Location.svg",
      },
    ],
  },
];

export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-12 px-12 bg-[#151128] text-[#fff]">
      <div className="flex flex-col items-start gap-2">
        <div className="w-[46px] h-[49px] rounded-full bg-[#fff] relative mb-4">
          <img
            className="w-[39px] h-[33px] absolute top-3 left-[0.2rem]"
            src="/images/logo.png"
            alt=""
          />
        </div>

        <div>
          <ul className="flex gap-4">
            <a href="https://www.linkedin.com/in/abdulsamad-hussaini-481657283/">
              <img src="/images/Phone.svg" alt="" />
            </a>

            <a href="https://x.com/_Hoossayn">
              <img src="/images/mail.svg" alt="" />
            </a>

            <a href="">
              <img src="/images/Location.svg" alt="" />
            </a>
          </ul>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row items-start  justify-around w-[80%]">
        {footerLinks.map((section, index) => (
          <div key={index} className="mb-4 space-y-4">
            <h6 className="text-[1.25rem] font-semibold mb-2">
              {section.header}
            </h6>
            <ul className="space-y-8 md:space-y-4">
              {Array.isArray(section.links) &&
                section.links.map((item, i) => (
                  <li key={i} className="text-[1rem]">
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <div className="flex gap-2">
                        <img src={item.icon} /> {item.link}
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
