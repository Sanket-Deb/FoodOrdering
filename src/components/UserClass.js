import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Jaipur</h3>
        <h4>Contact: @sanket_deb</h4>
      </div>
    );
  }
}

export default UserClass;
