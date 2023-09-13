import { Route, Routes, useLocation } from "react-router-dom";
import { ComponentsPage, HomePage } from "./pages";
import {
  AlertDocs,
  AvatarDocs,
  BadgeDocs,
  ButtonDocs,
  CardDocs,
  HeadingDocs,
  ImageDocs,
  Navbar,
  Sidebar,
  TextDocs,
} from "./documentation";

function App() {
  const location = useLocation();
  const showSideBar = !(
    (location.pathname === "/") |
    (location.pathname === "/components")
  );
  return (
    <div>
      <Navbar />
      {showSideBar && <Sidebar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/avatar" element={<AvatarDocs />} />
        <Route path="/alert" element={<AlertDocs />} />
        <Route path="/badge" element={<BadgeDocs />} />
        <Route path="/button" element={<ButtonDocs />} />
        <Route path="/card" element={<CardDocs />} />
        <Route path="/headings" element={<HeadingDocs/>} />
        <Route path="/image" element={<ImageDocs/>} />
        <Route path="/text" element={<TextDocs/>} />
      </Routes>
    </div>
  );
}

export default App;
