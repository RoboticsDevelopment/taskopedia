import { faker } from "@faker-js/faker";

export default function Student(props) {
  //const name = "Anna Plawgo";
  //const experience = 13;
  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img src={faker.image.avatar()} className="w-100 py-2"></img>
        </div>
        <div className="col-10">
          {props.name} <br />
          {"Studied " + props.degree + " for " +props.experience} years
        </div>
      </div>
    </div>
  );
}
