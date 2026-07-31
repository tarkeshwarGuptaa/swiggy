import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

export default function Restaurant() {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const targetUrl =
        "/swiggy-api/dapi/restaurants/list/v5?lat=26.4944595&lng=80.27963369999999&is-seo-homepage-enabled=true";

      const response = await fetch(targetUrl);
      const data = await response.json();
      //just check please cards index either 1 or 2 working

      setRestData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }

    fetchData();
  }, []);

  if (restData.length == 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="max-w-[80%] container mx-auto  mt-20">
      <div className="text-2xl font-semibold text-[#02060CEB] mb-8">
        Restaurants with online food delivery
      </div>
      <div className="flex flex-wrap gap-8">
        {restData.map((restInfo) => (
          <RestaurantCard
            key={restInfo.info.id}
            restInfo={restInfo}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
}

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=55473&catalog_qa=undefined&submitAction=ENTER
// https://www.swiggy.com/city/kanpur/chinese-wok-metro-station-spm-hospital-rest686194
// https://www.swiggy.com/city/kanpur/new-chappan-bhog-vikas-nagar-rest278476
