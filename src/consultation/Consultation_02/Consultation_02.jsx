import React from "react";
import { users } from "./data";
import User from "../../components/Card/Consultation_02_UserCard/UserCard";
import "./styles.css";

function Consultation_02() {
  return (
    <div className="app">
      {users.map((user, index) => (
        /* .map() — це стандартний і зручний спосіб перетворити масив даних у масив JSX-елементів, 
        що дозволяє React рендерити інтерфейс динамічно. */
        // console.log("Users: ", user);
        <User key={index} {...user} />
      ))}
    </div>
  );
}

export default Consultation_02;
