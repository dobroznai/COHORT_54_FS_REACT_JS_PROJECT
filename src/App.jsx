// Lessons
import Lesson_02 from "./lessons/Lesson_02/Lesson_02";
import Lesson_03 from "./lessons/Lesson_03/Lesson_03";

// Homeworks
import Homework_02 from "./homework/Homework_02/Homework_02";
import "./App.css";

// Consultation
import User from "./consultation/Consultation_02/User";

function App() {
  const nameOne = "Jhon";

  return (
    <div className="app">
      {/* Lessons */}
      {/* <Lesson_02 /> */}
      {/* <Lesson_03 /> */}

      {/* Homeworks */}
      {/* <Homework_02 /> */}

      {/* Consultation */}
      <User
        firstname={name1}
        lastname="Petrov"
        age="29"
        username="sososo"
        email="mail1@gmail.com"
      />
      <User
        firstname="Valeriy"
        lastname="Vetrov"
        age="92"
        username="ososos"
        email="test@gmail.com"
      />
      <User
        firstname="Kiril"
        lastname="Pev"
        age="243"
        username="ertw"
        email="j@gmail.com"
      />
    </div>
  );
}

export default App;
