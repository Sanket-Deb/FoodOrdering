import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [drawerIcon, setDrawerIcon] = useState("🔽");

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("Clicked");
    {
      showItems ? setShowItems(false) : setShowItems(true);
      drawerIcon === "🔽" ? setDrawerIcon("🔼") : setDrawerIcon("🔽");
    }
  };
  return (
    <div>
      {/*Header*/}
      <div className="w-6/12 my-4 mx-auto bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{drawerIcon}</span>
        </div>
        {/*Accordian Body*/}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
