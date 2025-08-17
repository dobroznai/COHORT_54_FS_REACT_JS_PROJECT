import { useState } from "react";
import "./styles.css";
import Button from "../../components/Button/Button";
import { v4 } from "uuid";

function Lesson_05() {
  let [orders, setOrders] = useState([]);
  const buttonNames = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-Cream",
  ];

  //   ["Burder", "Salad"]
  const orderList = orders.map((orderItem) => {
    return (
      <li key={v4()} className="order_item">
        {orderItem}
      </li>
    );
  });

  const buttons = buttonNames.map((orderButton) => {
    return (
      <div key={v4()} className="button_control">
        <Button
          name={orderButton}
          onClick={() => {
            setOrders((prevValue) => {
              return [...prevValue, orderButton];
            });
          }}
        />
      </div>
    );
  });

  console.log(orderList);

  return (
    <div className="lesson_05_page_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          {buttons}
          {/* <div className="button_control">
            <Button
              buttonName="Burger"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Burger"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Fries"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Fries"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Cola"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Cola"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Salad"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Salad"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Ketchup"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Ketchup"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              buttonName="Ice-cream"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Ice-Cream"];
                });
              }}
            />
          </div> */}
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{orderList}</ol>
      </div>
    </div>
  );
}
export default Lesson_05;
