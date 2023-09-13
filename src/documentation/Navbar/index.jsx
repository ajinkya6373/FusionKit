import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { components } from "../../util";
import "./navbar.css";


export default function Navbar() {
  const [searchText,setSearchText] = useState("")
  const navigate  =useNavigate()
  const onClickHandler=()=>{
     const redirect=components.find((i)=>i.toLowerCase().includes(searchText.toLowerCase()))?.toLowerCase();
     if (redirect) {
      navigate(`/${redirect}`)
     }else{
      alert("component not found..")
     }
     setSearchText("")

  }
  return (
    <div className="navbar" >
      <span className="logo" onClick={()=>navigate("/")}>FusionKit</span>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for components..."
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={onClickHandler}>Search</button>
      </div>
      <ul className="nav-list">
        <li className="nav-item"  onClick={()=>navigate("/")}>Home</li>
        <li className="nav-item"  onClick={()=>navigate("/components")}>Components</li>
      </ul>
    </div>
  );
}
