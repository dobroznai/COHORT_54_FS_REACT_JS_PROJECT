import React from "react";
import "./styles.css";

export default function User({ firstName, lastName, age, userName, email }) {
  return (
    <div className="container">
      <div className="user_card">
        <p className="user_name">
          Name: {firstName} {lastName} //properties
          {age >= 30 ? (
            <p className="user_age">Age: {age}</p>
          ) : (
            <p className="user_age warning">Age is below 30</p>
          )}
          <p className="user_user_name">Nickname: {userName}</p>
          <p className="user_email">
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          */
        </p>
      </div>
    </div>
  );
}
