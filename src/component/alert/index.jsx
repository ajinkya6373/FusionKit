import "./alert.css"; 
function Alert({ type, message }) {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
}

export default Alert;
