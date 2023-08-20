import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

const mainBodyStyle = {
  color: "blueviolet",
  backgroundColor: "black",
  minHeight: "70vh",
  //maxWidth: "400px",
};

function MainBody() {
  return (
    <div style={mainBodyStyle}>
      <p>Welcome to TaskOPedia, get your life in OrDeR!</p>
      <ul>
        <li>Call Friends and tell them you love them.</li>
        <li>Go shopping for cool shiny things.</li>
        <li
          style={{
            color: "pink",
            backgroundColor: "gray",
            border: "solid",
            borderWidth: "thick",
            maxWidth: "300px",
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

      <div className="container p-1 " style={{ fontWeight: "Bold" }}>
        Students Enrolled
        
      
      <Student
        name="Patrick B."
        experience={7}
        degree="Gas Lighting"
        //headshot="https://api.lorem.space/image/face?w=150&h=150"
      >
        <StudentReview />
      </Student>
      <Student
        name="Clinton Epstein "
        experience={1}
        degree="Daycare Management"
        //headshot="https://api.lorem.space/image/face?w=150&h=153"
      >
        <StudentReview />
      </Student>
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
    </div>
    </div>
  );
}
export default MainBody;
