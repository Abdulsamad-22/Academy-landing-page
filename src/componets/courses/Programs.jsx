import Connector from "./Connector";

const programs = [
  {
    ageGrade: "3 - 6 Years Old",
    subText: `Development of dexterity ,coordination, speed, flexibility + basic
        exercises for technique, game exercises.`,
  },
  {
    ageGrade: "11 - 13 Years Old",
    subText: `Exercises to improve techniques and tactical elements of the football, which are traced in each exercise and then transformed to the game.`,
  },
  {
    ageGrade: "7 - 10 Years Old",
    subText: `Gradual and regular increase in physical activity, technical and tactical compilation of exercises.`,
  },
  {
    ageGrade: "14 - 17 Years Old",
    subText: `2 hours of training sessions and 4x a week plus matches , fitness assessments conducted 3 times throughout the season.`,
  },
];

export default function Programs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[30%_30%] gap-x-[2rem] md:gap-x-[630px] gap-y-[5rem] md:gap-y-[8rem] items-center mt-[5rem] relative z-20">
      <Connector />

      {programs.map((program, index) => (
        <div key={index} className="w-full md:w-[280px] relative">
          <div className="inline-block py-2 px-3 border-2 border-[#c72020] mb-4">
            {program.ageGrade}
          </div>
          <p className="w-[95%] md:w-[205px]">{program.subText}</p>
        </div>
      ))}
      <img
        className=" w-[50%] z-10 absolute -top-[80%] left-[24%] hidden md:block"
        src="/images/player-image.png"
        alt=""
      />
    </div>
  );
}
