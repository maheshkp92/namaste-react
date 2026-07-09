import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Paarent COnstructor");
  }

  componentDidMount() {
    console.log("parent compnentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is namsate react web series</h2>
        <UserClass name="First " location="Mumbai Class" />
        {/* <UserClass name="Secind " location="US" /> */}
      </div>
    );
  }
}

export default About;
