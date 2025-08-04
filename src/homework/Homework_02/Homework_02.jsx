import SimpsonsCard from "../../components/Card/SimpsonsCard/SimpsonsCard";
import { simpson } from "./data";
import "./styles.css";

function Homework_02() {
  return (
    <div className="app">
      <SimpsonsCard
        avatarURL={simpson.avatarURL}
        firstName={simpson.firstName}
        lastName={simpson.lastName}
        job={simpson.job}
        hobby={simpson.hobby}
      />
    </div>
  );
}

export default Homework_02;
