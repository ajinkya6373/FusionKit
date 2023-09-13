import './button.css';

function FloatingActionButton({ icon, onClick,className }) {
  return (
    <button className={`btn floating-action-button icon-button ${className}`} onClick={onClick}>
      <i className={icon}></i>
    </button>
  );
}

export default FloatingActionButton;
