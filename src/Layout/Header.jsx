import logo from "../images/react.png" 


function MainHeader() {
 return (
  <div className="pt-2 py-1 pl-2" style={{backgroundColor:"black"}}>
    <img src={logo} style={{ height:"35px", verticalAlign:"top"}}></img>
    <span className="h2 pt-4 text-white-50">Group Task List</span>
  </div>
 );
}


function SubHeader() {
  const masterGreaterester = "Patrick";
  
  return (
    <>
      <p2 className="text-center" >
        Created by{" "}
        <span style={{ color: "purple" }}>
          Super Mega Master Programmer{" "}
          <i style={{ color: "limegreen" }}>{masterGreaterester}</i>
        </span>
      </p2>
      
    </>
  );
}

const Header=()=> {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

export default Header;  // One way to export, or put "export default" in function declaration.
