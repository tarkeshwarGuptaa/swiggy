import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard.js";
import RestShimmer from "./RestShimmer.js";

export default function RestMenu() {
  const { restId } = useParams();
  const [menuData, setMenuData] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    async function fetchMenu() {

      const targetUrl = `/swiggy-api/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4944595&lng=80.27963369999999&restaurantId=${restId}`;

      const response = await fetch(targetUrl);
      const data = await response.json();
      setMenuData(
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
          1,
          8,
        ),
      );
    }

    fetchMenu();
  }, []);

  return (
    <div className="w-[60%] mx-auto mt-20">
      <button
        className={`w-28 h-10 border border-gray-300 rounded-2xl ${selected === "veg" ? "text-white bg-green-700" : ""} mb-4 mr-4 text-2xl`}
        onClick={() => setSelected(selected === "veg" ? "" : "veg")}
      >
        Veg
      </button>
      <button
        className={`w-32 h-10 border border-gray-300 rounded-2xl ${selected === "nonveg" ? "text-white bg-red-700" : ""} mb-4 text-2xl`}
        onClick={() => setSelected(selected === "nonveg" ? "" : "nonveg")}
      >
        Non veg
      </button>

      {menuData.length == 0 ? <RestShimmer></RestShimmer> : null}

      {menuData?.map((menuItem) => (
        <MenuCard
          key={menuItem?.card?.card?.title}
          menuItem={menuItem?.card?.card}
          foodSelected = {selected}
        ></MenuCard>
      ))}
    </div>
  );
}
