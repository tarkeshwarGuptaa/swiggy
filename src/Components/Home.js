import DineoutOption from "./DineoutOption.js";
import FoodOption from "./FoodOption.js";
import GroceryOption from "./GroceryOption.js";
import HomeHeader from "./HomeHeader.js";

export default function Home(){
    return (
        <>
            <HomeHeader></HomeHeader>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineoutOption></DineoutOption>
        </>
    )
}