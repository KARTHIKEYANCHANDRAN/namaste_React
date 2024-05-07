import UserClass from "./UserClass";
import { Component, useContext } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentWillUnmount() {
    // console.log(" parent unmount"); // will get executed when we move to some other link
  }

  componentDidMount() {
    //console.log("Parent Component did mount ");
  }

  componentDidUpdate() {
    // console.log("Parent update component");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div className="p-4 font-bold" style={{ marginBottom: "295px" }}>
        <h1>About Us</h1>
        <h2>Logged in User :</h2>
        <UserContext.Consumer>
          {({ loginusername }) => <h2>{loginusername}</h2>}
        </UserContext.Consumer>
        <p>Welcome to React food app development</p>
        <UserClass name={"Karthik"} location={"TamilNadu"} />
      </div>
    );
  }
}

export default About;
