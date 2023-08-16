export default function Student(props) {


  //const name = "Anna Plawgo";
  //const experience = 13;

  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.name}`}
            className="w-100"
          ></img>
        </div>
        <div className="col-10">
          {props.name} <br />
          Cat Petting {props.experience} years
        </div>
      </div>
    </div>
  );
}
