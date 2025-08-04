import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  return (
    <form className="login_form_wrapper">
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
        <Button type="submit" buttonName="Login" />
      </div>
    </form>
  );
}

export default LoginForm;
