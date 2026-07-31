import { Link } from "react-router";

export default function RestaurantCard({ restInfo }) {
  return (
    <Link to={`/city/kanpur/${restInfo.info.id}`}>
      <div className="w-65 max-h-65 mt-6 transform transition duration-300 hover:scale-95 cursor-pointer">
        <div className="relative">
          <img
            className="w-65 h-45 object-cover rounded-xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${restInfo.info.cloudinaryImageId}`}
          ></img>
          <div className="w-65 absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/80 to-transparent rounded-xl"></div>
          <div className="max-w-[80%] truncate absolute bottom-2 left-2 text-xl font-semibold text-white z-10">
            {restInfo?.info?.aggregatedDiscountInfoV3?.header}{" "}
            {restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}
          </div>
        </div>
        <div className="max-w-[95%] container mx-auto mt-1">
          <div className="truncate">
            <span className="font-semibold text-lg ">
              {restInfo?.info?.name}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 bg-green-700 font-semibold  px-1.5 py-0.5 rounded-full shadow-xs">
              <svg
                className="w-3.5 h-3.5 fill-current text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>

            <span className="font-bold text-base">
              {restInfo?.info?.avgRatingString}
            </span>
            <span className="font-bold text-base">
              {restInfo?.info?.sla?.slaString}
            </span>
          </div>
          <div className="font-medium text-gray-500 truncate ">
            <span>{restInfo?.info?.cuisines.join(", ")}</span>
          </div>
          <div className="font-medium text-gray-500">
            <span>{restInfo?.info?.areaName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
