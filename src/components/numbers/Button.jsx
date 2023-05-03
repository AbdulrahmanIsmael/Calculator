function Button({ value, handleEvent }) {
  return <button onClick={handleEvent}>{value}</button>;
}

export default Button;
