import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  // Trigger onClick
  // 1 пример функция прописана заранее
  // const testFunction = () => {
  //   console.log("Click on button Test works");
  // };

  const login = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Login started");
  };
  return (
    <form onSubmit={login} className="login_form_wrapper">
      <p className="form_name">Login form</p>
      <div className="login_form">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button type="submit" buttonName="Login" />
      {/* 1 пример функция прописана заранее */}
      {/* <button type="button" onClick={testFunction}>
          {" "}
          TEST{" "}
        </button> */}
      {/* 2 пример, когда функция прописана непсредственно в фигурных скобах  onClick */}
      {/* <button
        type="button"
        onClick={() => {
          console.log("Click on button Test works / 2 method");
        }}
      >
        TEST
      </button> */}
    </form>
  );
}

export default LoginForm;
