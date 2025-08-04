import "./App.css";

// Lessons
import Lesson_02 from "./lessons/Lesson_02/Lesson_02";
import Lesson_03 from "./lessons/Lesson_03/Lesson_03";

// Homeworks
import Homework_02 from "./homework/Homework_02/Homework_02";

// Consultation
import Consultation_02 from "./consultation/Consultation_02/Consultation_02";

function App() {
  return (
    <div className="app">
      {/* Lessons */}
      {/* <Lesson_02 /> */}
      <Lesson_03 />

      {/* Homeworks */}
      {/* <Homework_02 /> */}

      {/* Consultation */}
      {/* <Consultation_02 /> */}
    </div>
  );
}

export default App;
