import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "dummyname",
        location: "defaultlocation",
        avatar_url: "dummyphoto",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "child compnentDidMount");
    const data = await fetch("https://api.github.com/users/maheshkp92");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    // this.timer = setInterval(() => {
    //   console.log("print ebery 1 sec....");
    // }, 1000);
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    // console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        <h4>Contact - Mahesh Pat</h4>
      </div>
    );
  }
}

export default UserClass;
