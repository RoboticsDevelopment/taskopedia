import logo from "./images/react.png" 

const mainHeaderStyle = {
  color: "yellow",
  backgroundColor: "brown",
  fontFamily: "Times New Roman",
  textAlign: "Center",
  border: "solid",
  borderWidth: "thick",
};

function MainHeader() {
 return (
  <div className="pt-2 py-1 pl-2" style={{backgroundColor:"black"}}>
    <img src={logo} style={{ height:"35px", verticalAlign:"top"}}></img>
    <span className="h2 pt-4 text-white-50">Group Task List</span>
  </div>
 );
}
 /* return (
    <>
    <img src={logo}></img>
    <h1 style={mainHeaderStyle}>
      Task-<span style={{ color: "Orange" }}>O</span>-Pedia
    </h1>
    </>
  );
}
*/

function SubHeader() {
  const masterGreaterester = "Patrick";
  const luckyNumber = 3;
  return (
    <>
      <h2 className="heading2">
        Created by{" "}  
        <span style={{ color: "purple" }}>
          Super Mega Master Programmer{" "}
          <i style={{ color: "limegreen" }}>{masterGreaterester}</i>
        </span>
      </h2>
      <p>Hello, your lucky number is {luckyNumber}</p>
    </>
  );
}

export default function Header() {
  return (
    <>
      <MainHeader />
      <SubHeader />
    </>
  );
}

// export default Header;  // One way to export, or put "export default" in function declaration.
