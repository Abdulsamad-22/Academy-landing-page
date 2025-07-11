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
    <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-[320px] gap-y-[5rem] items-center mt-10 relative">
      {programs.map((program, index) => (
        <div key={index} className="w-[280px] relative">
          <div className="w-[150px] py-2 px-3 border-2 border-[#c72020] mb-4">
            {program.ageGrade}
          </div>
          <p className="w-60">{program.subText}</p>
        </div>
      ))}
      <img
        className=" w-[60%] absolute -top-[90%] left-[25%]"
        src="/images/player-image.png"
        alt=""
      />
    </div>
  );
}
