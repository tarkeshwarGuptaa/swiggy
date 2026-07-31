import { dineoutRestaurants} from "../Utils/dineoutData.js";
import DineoutCard from "./DineoutCard.js";


export default function DineoutOption() {
  return (
    <div className="w-[80%] container mx-auto mt-30">
      <div className="text-2xl font-semibold text-[#02060CEB] mb-8">
        Discover best restaurants on Dineout
      </div>
      <div className="flex flex-nowrap gap-10  overflow-x-scroll scrollbar-none ">
        {dineoutRestaurants.map((dineoutData) => (
          <DineoutCard
            key={dineoutData.info.id}
            dineoutData={dineoutData}
          ></DineoutCard>
        ))}
      </div>
    </div>
  );
}