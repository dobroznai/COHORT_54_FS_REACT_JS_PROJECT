import React from "react";
import "./styles.css";

function User({ userURL, firstName, lastName, age, userName, email }) {
  return (
    <div className="user_card">
      <img src={userURL} alt="User Card" className="user_image" />
      <p className="user_name">
        <span className="user_tag">Name: </span>
        {firstName} {lastName}
      </p>
      {age >= 30 ? (
        <p className="user_age">
          <span className="user_tag">Age: </span>
          {age}
        </p>
      ) : (
        <p>
          <span className="user_tag warning">Age is below 30</span>
        </p>
      )}
      <p className="user_user_name">
        {" "}
        <span className="user_tag">User Name: </span>
        {userName}
      </p>
      <p className="user_email">
        <span className="user_tag">Email: </span>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
}

export default User;
