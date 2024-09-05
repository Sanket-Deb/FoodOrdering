import { CDN_URL } from "./utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;
  
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL +cloudinaryImageId}
          style={{ height: "130px", width: "200px" }}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestrauntCard;