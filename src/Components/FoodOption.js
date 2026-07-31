import {foodOptionsData} from "../Utils/foodOptionsData.js"
import FoodCard from "./FoodCard.js";

export default function FoodOption() {
  return (
  <div className="w-[80%] container mx-auto mt-30">
    <div className="text-2xl font-semibold text-[#02060CEB] mb-8">Order our best food options</div>
    <div className="flex flex-wrap gap-8">
        {foodOptionsData.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)}
    </div>
  </div> );
}
