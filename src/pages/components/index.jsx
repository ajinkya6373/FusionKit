import { useNavigate } from "react-router-dom";
import { components } from "../../util";
import "./components.css"
export default function ComponentsPage() {
  const navigate = useNavigate()
  return (
    <div className="components-page">
      <h1 className="components-heading">Components</h1>
      <div className="components-list">
        {components.map((component) => (
          <div key={component} className="component-item" onClick={()=>navigate(`/${component.toLowerCase()}`)}>
            {component}
          </div>
        ))}
      </div>
    </div>
    
  );
}
