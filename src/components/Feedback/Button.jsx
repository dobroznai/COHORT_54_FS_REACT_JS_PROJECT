// Импортировать функцию хук useState() из библиотеки React
import { useState } from "react";

import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [like, setLike] = useState(0);
  console.log(like);
  console.log(setLike);

  const onPlusLike = () => {
    setLike((preValue) => {
      console.log(preValue);
      return preValue + 1;
    });
  };

  const [dislike, setDislike] = useState(0);
  console.log(dislike);
  console.log(setDislike);

  const onPlusDislike = () => {
    setDislike((preValue) => {
      console.log(preValue);
      return preValue + 1;
    });
  };

  const onReset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button buttonName="Like" onClick={onPlusLike} />
      </div>
      <p className="count">{like}</p>

      <div className="button_control">
        <Button buttonName="Dislike" onClick={onPlusDislike} />
      </div>
      <p className="count">{dislike}</p>

      <div className="button_control">
        <Button buttonName="Reset" onClick={onReset} />
      </div>
    </div>
  );
}

export default Feedback;
