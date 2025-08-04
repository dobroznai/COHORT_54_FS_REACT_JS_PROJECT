import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  return (
    <div className="login_form_wrapper">
      <form className="login_form">
        <p className="form_name">Login form</p>
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
      </form>
    </div>
  );
}

export default LoginForm;
