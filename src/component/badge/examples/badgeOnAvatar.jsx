import Badge from "..";
import Avatar from "../../avatar";
import "./style.css"
export default function BadgeOnAvatar() {
  return (
    <div className="badge-Avatar-Container">
      <span className="avatar-wrapper">
        <Avatar imageUrl="/Image/avatar.jpg" alt="User Avatar" size="large" />
        <span className="avatar-badge">
          <Badge text="5" variant="success"/>
        </span>
      </span>

      <span className="avatar-wrapper">
        <Avatar imageUrl="/Image/avatar.jpg" alt="User Avatar" size="large" />
        <span className="avatar-badge">
          <Badge text="5" variant="error"/>
        </span>
      </span>
    </div>
  );
}
