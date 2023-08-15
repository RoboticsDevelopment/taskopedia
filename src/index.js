
import ReactDOM from 'react-dom/client';
import "./CSS/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

const mainHeaderStyle = {
  color: "yellow",
  backgroundColor: "brown",
  fontFamily: "Times New Roman",
  textAlign: "Center",
  border: "solid",
  borderWidth: "thick"
}

function MainHeader() {
  return (<h1 style={mainHeaderStyle} >
    Task-<span style={{ color: "Orange" }}>O</span>-Pedia</h1>)
}

function SubHeader() {
  const masterGreaterester = "Patrick"
  const luckyNumber = 3;
  return (
    <>
    <h2 className="heading2">
      Created by <span style={{ color: "purple" }}>Super Mega Master Programmer <i style={{color:"limegreen"}}>{masterGreaterester}</i></span>
    </h2>
    <p>Hello, your lucky number is {luckyNumber}</p>
    </>
    );
}

function Header() {
  return (
    <>
      <MainHeader
      />
      <SubHeader />
    </>
  );
}

const mainBodyStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray"
};
function MainBody() {
  return (
    <>
      <p style={mainBodyStyle}>Welcome to TaskOPedia, get your life in OrDeR!</p>
      <ul>
        <li>Call Friends and tell them you love them.</li>
        <li>Go shopping for cool shiny things.</li>
      </ul>
      <div>
        Enter a new Task: <input maxLength={25} readOnly={false} placeholder={"poopy-pants"}></input>
      </div>
    </>
  );
}

function Footer() {
  return (
  <p style={{ color: "white", backgroundColor: "black", textAlign: "right" }}>Happy Hacking!</p>)
}

root.render(
  <>
    <Header />
    <MainBody />
    <Footer />
  </>
);


