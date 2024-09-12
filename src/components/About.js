import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is Sanket following the namaste react series</h2>

      <UserClass name={"Sanket Deb (class)"} location={"Jaipur (Class)"} />
    </div>
  );
};

export default About;
