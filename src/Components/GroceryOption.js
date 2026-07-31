import { groceryOptionData } from "../Utils/groceryOptionsData.js";
import GroceryCard from "./GroceryCard.js";

export default function GroceryOption() {
  return (
    <div className="w-[80%] container mx-auto mt-30">
      <div className="text-2xl font-semibold text-[#02060CEB] mb-8">
        Shop groceries on Instamart
      </div>
      <div className="flex flex-nowrap gap-10  overflow-x-scroll scrollbar-none ">
        {groceryOptionData.map((groceryData) => (
          <GroceryCard
            key={groceryData.id}
            groceryData={groceryData}
          ></GroceryCard>
        ))}
      </div>
    </div>
  );
}
