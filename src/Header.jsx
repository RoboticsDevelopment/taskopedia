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
    <h1 style={mainHeaderStyle}>
      Task-<span style={{ color: "Orange" }}>O</span>-Pedia
    </h1>
  );
}

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
