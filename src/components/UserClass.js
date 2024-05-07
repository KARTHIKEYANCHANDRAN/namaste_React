import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
      userInfo: {
        login: "karthi",
        location: "TamilNadu",
      },
    };
    //  console.log(this.state.userInfo.login + "Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child component did mount");
    const data = await fetch(
      "https://api.github.com/users/karthikeyanChandrasekaran"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("update component");
  }

  componentWillUnmount() {
    //  console.log("unmount"); // will get executed when we move to some other link
  }

  render() {
    // console.log("Child Render");

    const { login } = this.state.userInfo;
    const { count, count1 } = this.state;
    return (
      <div className="p-3 m-3 w-80 font-normal border border-solid border-black ">
        <h3>Count = {count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h3>Count1 = {count1}</h3>
        <h3>{login}</h3>
      </div>
    );
  }
}

export default UserClass;
