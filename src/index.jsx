import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header"; //Can be named anything, will go to  header.jsx default export.

import Footer from "./Layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "gray" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>
    <Footer />
  </div>
);
