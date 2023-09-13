import { useNavigate } from "react-router-dom";
import { components } from "../../util";
import "./sidebar.css"
export default function Sidebar() {
    const navigate = useNavigate()
  return (
    <div className="sidebar">
        {
            components.map((component)=>{
               return <span key={component} onClick={()=>navigate(`/${component.toLowerCase()}`)}>{component}</span>
            })
        }
    </div>
  )
}
