import "./styles.css";

function Button({ name = "Send", onClick = () => {}, children, type }) {
  return (
    <button className="button_component" onClick={onClick} type={type}>
      {/* {children ? "" : buttonName} */}
      {!children && name}
      {children}
    </button>
  );
}

export default Button;
