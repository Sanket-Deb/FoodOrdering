import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResTnfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=25620&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>Name of the Restaurants</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Biryani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
