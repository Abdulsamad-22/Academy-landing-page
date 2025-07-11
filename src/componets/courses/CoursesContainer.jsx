import Connector from "./Connector";
import CoursesHeader from "./CoursesHeader";
import Programs from "./Programs";

export default function CoursesContainer() {
  return (
    <>
      <CoursesHeader />
      <div className="flex flex-col items-center justify-center">
        <Programs />
      </div>
      <Connector />
    </>
  );
}
