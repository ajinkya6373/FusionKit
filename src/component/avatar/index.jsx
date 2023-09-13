
import "./avatar.css"
function Avatar({ imageUrl, altText, size }) {
  return (
    <img
      src={imageUrl}
      alt={altText}
      className={`avatar ${size ? `avatar-${size}` : ''}`}
    />
  );
}


export default Avatar;
