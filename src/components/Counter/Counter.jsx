// Импортировать функцию хук useState() из библиотеки React
import { useState } from "react";

import Button from "../Button/Button";

import "./styles.css";

function Counter() {
  // Не отрисовывает при рендере актуальное значение переменной count.
  //   let count = 0;
  //   console.log("Count in counter component", count);

  //   const onMinus = () => {
  //     // логика по уменьшению счетчика на единицу
  //     count = count - 1;
  //     console.log("Count in counter MINUS", count);
  //   };

  //   const onPlus = () => {
  //     // логика по увеличению счетчика на единицу
  //     count = count + 1;
  //     console.log("Count in counter PLUS", count);
  //   };

  // Синаксис без деструктуризации //
  //   const state = useState(0);
  //   console.log(state);
  //   console.log(state[0]);
  //   console.log(state[1]);

  // Синаксис с деструктуризацией //
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  const onMinus = () => {
    // логика по уменьшению счетчика на единицу
    setCount((preValue) => {
      // так не работает
      // setCount (count -1);
      // так верно
      console.log(preValue);
      return preValue - 1;
    });
  };

  const onPlus = () => {
    // логика по увеличению счетчика на единицу
    setCount((preValue) => {
      console.log(preValue);
      return preValue + 1;
    });
  };
  // Пример #1
  //   const [personName, setPersonName] = useState("Johny Depp");

  //   const changeName = () => {
  //     setPersonName("John Johnson");
  //   };

  // Пример #2
  const [animal, setAnimals] = useState(["Pig", "Cat", "Dog"]);

  const addRatt = () => {
    setAnimals((preValue) => {
      return [...preValue, "Ratt"];
    });
  };
  //

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button buttonName="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button buttonName="+" onClick={onPlus} />
      </div>

      {/* Пример #1 */}
      {/* <div className="button_control">
        <Button name="Add last name" onClick={changeName} />
      </div>*/}

      {/* Пример #2 */}

      <div className="button_control">
        <Button buttonName="Change Name" onClick={addRatt} />
      </div>
      <div className="animal_name">{animal}</div>
    </div>
  );
}

export default Counter;
