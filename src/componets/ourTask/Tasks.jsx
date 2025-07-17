const tasks = [
  {
    icon: "/images/Trophy-icon.svg",
    title: "Competitive Spirit",
    sub: "Training, matches with other football schools and inside our school",
  },
  {
    icon: "/images/SoccerBall-icon.svg",
    title: "New Opportunities",
    sub: "Promotion amd development of football and mini-football",
  },
  {
    icon: "/images/Gym-icon.svg",
    title: "Strength",
    sub: "Strength and conditioning gym programme developed for each individual player",
  },
  {
    icon: "/images/Development-icon.svg",
    title: "Self-Development",
    sub: "Correct upbringing of children in accordance with the values of world culture",
  },
  {
    icon: "/images/Heartbeat-icon.svg",
    title: "Healthy Lifestyle",
    sub: "Development of a nutrition plan and guidiance by qualified coaches",
  },
  {
    icon: "/images/Teamwork-icon.png",
    title: "Team Work",
    sub: "Creation of an amateur championship, a Corporate Mini-Football Amateur League in Moscow",
  },
];
export default function Tasks() {
  return (
    <div className="w-full md:w-[90%] grid  grid-cols-1 md:grid-cols-2 mt-12 gap-12 md:gap-y-8 md:gap-x-[12rem]">
      {tasks.map((task, title) => (
        <div className="flex flex-col items-center md:items-start" key={title}>
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-4">
            <img
              className={`w-8 md:w-10 h-8 md:h-10 ${
                task.title === "Strength" ? "rotate-[-45deg]" : ""
              }`}
              src={task.icon}
              alt=""
            />
            <div className="space-y-3">
              <h4 className="text-[1.25rem] md:text-[1.5rem]">{task.title}</h4>
              <hr className="w-full border-[0.5px] border-black hidden md:block" />
            </div>
          </div>

          <div className="flex items-center w-full  md:w-full h-[100px] md:h-[120px] rounded-lg bg-[#c72020] text-[0.875rem] md:text-[1rem] text-[#fff] py-4 px-12">
            {task.sub}
          </div>
        </div>
      ))}
    </div>
  );
}
