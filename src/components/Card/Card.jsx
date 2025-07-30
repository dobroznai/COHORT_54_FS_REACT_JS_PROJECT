import "./styles.css";
import { simpson } from "../../homework/Homework_02/data";

function Card() {
  return (
    <div className="card_component">
      <div className="simpson_card">
        <img src={simpson.avatarURL} alt="Simpson image" />
        <p className="card_info">Name: {simpson.fullName}</p>
        <p className="card_info">Ocupation: {simpson.ocupation}</p>
        <p className="card_info">Hobby: {simpson.hobby}</p>
      </div>
    </div>
  );
}

export default Card;
