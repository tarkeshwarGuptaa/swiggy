import { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function MenuCard({ menuItem, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  if ("categories" in menuItem) {
    return (
      <div className="w-full">
        <div className="flex justify-between pr-8">
          <div className="text-xl font-semibold text-[#02060CEB] mb-4">
            {menuItem?.title} ({menuItem?.categories?.length})
          </div>
          <div>
            {isOpen ? (
              <RiArrowDropUpLine
                size={36}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <RiArrowDropDownLine
                size={36}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
        {isOpen
          ? menuItem.categories.map((menu) => (
              <MenuCard
                foodSelected={foodSelected}
                key={menu.title}
                menuItem={menu}
              ></MenuCard>
            ))
          : ""}
      </div>
    );
  }

  if (foodSelected === "veg") {
    return (
      <div className="w-full">
        <div className="w-full">
          <div className="flex justify-between pr-8">
            <div className="text-xl font-semibold text-[#02060CEB] mb-4">
              {menuItem?.title} ({menuItem?.itemCards?.length})
            </div>
            <div>
              {isOpen ? (
                <RiArrowDropUpLine
                  size={36}
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <RiArrowDropDownLine
                  size={36}
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
          </div>

          {isOpen
            ? menuItem?.itemCards?.filter((item)=>"isVeg" in item?.card?.info ).map((itemCard) => (
                <MenuItemCard
                  key={itemCard?.card?.info?.id}
                  itemCard={itemCard?.card?.info}
                ></MenuItemCard>
              ))
            : ""}
        </div>
        <div className="bg-gray-300 h-1.5 rounded-3xl mb-2"></div>
      </div>
    );
  }

  if (foodSelected === "nonveg") {
    return (
      <div className="w-full">
        <div className="w-full">
          <div className="flex justify-between pr-8">
            <div className="text-xl font-semibold text-[#02060CEB] mb-4">
              {menuItem?.title} ({menuItem?.itemCards?.length})
            </div>
            <div>
              {isOpen ? (
                <RiArrowDropUpLine
                  size={36}
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <RiArrowDropDownLine
                  size={36}
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
          </div>

          {isOpen
            ? menuItem?.itemCards?.filter((item)=> !("isVeg" in item?.card?.info) ).map((itemCard) => (
                <MenuItemCard
                  key={itemCard?.card?.info?.id}
                  itemCard={itemCard?.card?.info}
                ></MenuItemCard>
              ))
            : ""}
        </div>
        <div className="bg-gray-300 h-1.5 rounded-3xl mb-2"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex justify-between pr-8">
          <div className="text-xl font-semibold text-[#02060CEB] mb-4">
            {menuItem?.title} ({menuItem?.itemCards?.length})
          </div>
          <div>
            {isOpen ? (
              <RiArrowDropUpLine
                size={36}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <RiArrowDropDownLine
                size={36}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>

        {isOpen
          ? menuItem?.itemCards?.map((itemCard) => (
              <MenuItemCard
                key={itemCard?.card?.info?.id}
                itemCard={itemCard?.card?.info}
              ></MenuItemCard>
            ))
          : ""}
      </div>
      <div className="bg-gray-300 h-1.5 rounded-3xl mb-2"></div>
    </div>
  );
}
