import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="	https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>)
}

const RestrauntCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
             className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" 
            />
            <h3>Rammu's Canteen</h3>
            <h4>Biryani, Continental</h4>
            <h4>4.2 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestrauntCard />
            </div>
        </div>
    )

}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        <Body />
        </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);