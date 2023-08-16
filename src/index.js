import ReactDOM from 'react-dom/client';
import "./CSS/style.css"
import Header from './Header';  //Can be named anything, will go to  header.jsx default export.
import Student from './Student';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="container">
    <Header />
    <MainBody /><br />
    <div className="row">Students Enrolled</div>
    <Student name="Patrick Byrne" experience={7}/>
    <Student name="Fuzzy Lumpkins" experience={1} />
    <Student name="Nikola Tesla" experience={77} />
    <Student name="Shaniqa Johnston" experience={.01} />
    <Footer/>
  </div>
);

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
        <li style={{ color: "pink", backgroundColor: "gray", border: "solid", borderWidth: "thick" }}>Use Patrics cc</li>
      </ul>
      {
        <div>
          Enter a new Task: <input maxLength={25} readOnly={false} placeholder={"poopy-pants"}></input>
        </div>

      }
    </>
  );
}





