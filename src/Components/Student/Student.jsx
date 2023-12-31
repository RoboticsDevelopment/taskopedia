
import React from "react";
import { faker } from "@faker-js/faker";

class Student extends React.Component {
  render(){
  return (
    <div className=" container p-2"
      style={{ color: "limeGreen", backgroundColor: "black" }}>
      <div className=" border">
      <div className="row">
        <div className="col-2">
          <img src={faker.image.avatar()} className="w-100 py-2"></img>
        </div>
        <div className="col-8">
          {this.props.name} <br />
          {"Studied " + this.props.degree + " for " + this.props.experience + " years"}
        </div>
        <div className="col-2">{this.props.children}</div>
      </div>
      </div>
      </div>
  );}
};

export default Student;
