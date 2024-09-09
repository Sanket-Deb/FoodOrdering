import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
    console.log(1);
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
  };

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
