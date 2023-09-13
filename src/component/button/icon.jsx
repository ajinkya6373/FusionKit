
import './button.css';

function IconButton({ icon,label, onClick, className}) {
  return (
    <button className={`btn icon-button ${className}`} onClick={onClick}>
      <i className={icon}></i> {label}
    </button>
  );
}

export default IconButton;
