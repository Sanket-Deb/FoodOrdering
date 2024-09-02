import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
    <h1 id="heading" className="head">
        Namaste Sanket
    </h1>
)
const title = (
    <h1 id="heading" className="head">
        Namaste Sanket2
    </h1>
)

const HeadingComponent = () => (
    <div id="headingContainer">
        <Title />
        {title}
        <h1 className="heading">Namaste Sanket Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);