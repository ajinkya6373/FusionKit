import Badge from "..";
import "./style.css"
export default function BadgeOnIcon() {
  return (
    <div className="icons-container">
      <span className="icon-wrapper">
        <i className="far fa-envelope badge-icon" />
        <span className="icon-badge">
          <Badge text="5" variant="success" />
        </span>
      </span>
      <span className="icon-wrapper">
        <i className="far fa-bell badge-icon" />
        <span className="icon-badge">
          <Badge text="5" variant="warning" />
        </span>
      </span>
      <span className="icon-wrapper">
        <i className="far fa-heart badge-icon" />
        <span className="icon-badge">
          <Badge text="5" variant="error" />
        </span>
      </span>
      <span className="icon-wrapper">
        <i className="fas fa-shopping-cart badge-icon" />
        <span className="icon-badge">
          <Badge text="5" variant="primary" />
        </span>
      </span>

    </div>
  );
}
