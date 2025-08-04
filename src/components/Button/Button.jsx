import "./styles.css";

function Button({ buttonName = "Send", onClick = () => {}, children }) {
  return (
    <button className="button_component" onClick={onClick}>
      {/* {children ? "" : buttonName} */}
      {!children && buttonName}
      {children}
    </button>
  );
}

export default Button;
