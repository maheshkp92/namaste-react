import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Paarent COnstructor");
  }

  componentDidMount() {
    // console.log("parent compnentDidMount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <div>
          Logged In User -
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is namsate react web series</h2>
        <UserClass name="First " location="Mumbai Class" />
        {/* <UserClass name="Secind " location="US" /> */}
      </div>
    );
  }
}

export default About;
