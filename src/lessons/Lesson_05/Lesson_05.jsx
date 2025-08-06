import { useState } from "react";
import "./styles.css";
import Button from "../../components/Button/Button";

function Lesson_05() {
  const (orders, setOrders) = useState ([]);
  return (
    <div className="lesson_05_page_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu: </h1>{" "}
        <div className="button_wrapper">
          <div className="button_control">
            <Button name="Burger" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Fries" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Cola" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Salad" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Ketchup" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Ice-cream" onClick={() => {}} />
          </div>
        </div>
        <div className="order_wrapper">
          <p className="order_title">Your Order:</p>
          <ol className="order_list">
            <li className="order_item">Burger</li>
            <li className="order_item">Ice-creem</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Lesson_05;
