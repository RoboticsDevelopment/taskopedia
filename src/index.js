import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header"; //Can be named anything, will go to  header.jsx default export.
import Student from "./Student";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="">
    <Header />
    <MainBody />
    <br />
    <div className="container row">Students Enrolled</div>
    <Student
      name="Patrick B."
      experience={7}
      degree="Gas Lighting"
    //headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
    <Student
      name="Epstein Clinton"
      experience={1}
      degree="Daycare Management"
    //headshot="https://api.lorem.space/image/face?w=150&h=153"
    />
    <Student
      name="Nikola Tesla"
      experience={77}
      degree="Electrical Engineering"
    //headshot="https://api.lorem.space/image/face?w=150&h=152"
    />
    <Student
      name="Shaniqa Tequista"
      experience={0.01}
      degree="Gender Studies"
    //headshot="https://api.lorem.space/image/face?w=150&h=151"
    />
    <Footer />
  </div>
);

const mainBodyStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function MainBody() {
  return (
    <>
      <p style={mainBodyStyle}>
        Welcome to TaskOPedia, get your life in OrDeR!
      </p>
      <ul>
        <li>Call Friends and tell them you love them.</li>
        <li>Go shopping for cool shiny things.</li>
        <li
          style={{
            color: "pink",
            backgroundColor: "gray",
            border: "solid",
            borderWidth: "thick",
          }}
        >
          Use Patrics cc
        </li>
      </ul>
      {
        <div>
          Enter a new Task:{" "}
          <input
            maxLength={25}
            readOnly={false}
            placeholder={"poopy-pants"}
          ></input>
        </div>
      }
    </>
  );
}
