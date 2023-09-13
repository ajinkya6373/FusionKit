import "./button.css";

function LinkButton({ label, href }) {
  return (
      <a href={href} className=" link-button" target="_blank" rel="noreferrer">
        {label}
      </a>
  );
}

export default LinkButton;
