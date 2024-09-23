import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("ParentConstructor");
  }

  componentDidMount() {
    //console.log("Parent Did Mount");
  }

  render() {
    //console.log("ParentRender");
    return (
      <div>
        <h1>About Class Compnent</h1>
        <div>
          LoggedIn user
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Sanket following the namaste react series</h2>

        <UserClass name={"First"} location={"Jaipur (Class)"} />
      </div>
    );
  }
}

export default About;
