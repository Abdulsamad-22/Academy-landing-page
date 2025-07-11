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
    <div className="w-[90%] grid  grid-cols-1 md:grid-cols-2 mt-20  gap-8">
      {tasks.map((task) => (
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <img className="w-10 h-10" src={task.icon} alt="" />
            <div className="space-y-3">
              <h4 className="text-[1.5rem]">{task.title}</h4>
              <hr className="w-full border-[0.5px] border-black" />
            </div>
          </div>

          <div className="flex items-center  w-[85%] h-[120px] bg-[#c72020] text-[#fff] py-4 px-12">
            {task.sub}
          </div>
        </div>
      ))}
    </div>
  );
}
