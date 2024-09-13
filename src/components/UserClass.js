import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        twitter_username: "Dummy handle",
      },
    };
    //console.log(this.props.name + "ChildConstructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Did Mount");
    //API Call

    const data = await fetch("https://api.github.com/users/sanket-deb");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
  }

  render() {
    const { avatar_url, name, location, twitter_username } =
      this.state.userInfo;

    //console.log(this.props.name + "ChildRender");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{twitter_username}</h4>
      </div>
    );
  }
}

export default UserClass;
