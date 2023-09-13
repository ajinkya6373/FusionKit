import { useNavigate } from "react-router-dom";
import "./home.css"

export default function HomePage() {
  const navigate =useNavigate()
  return (
      <div className="content">
        <h1>Your Unique Component Library</h1>
        <p className="description">
          A fusion of components and elements, indicating a diverse and
          versatile collection
        </p>
        <button className="get-started-button" onClick={()=>navigate("/components")}>Get Started</button>
      </div>
  );
}
