import './button.css';

function PrimaryButton({ label, onClick ,className}) {
  return (
    <button className={`btn primary-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;
