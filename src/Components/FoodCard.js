export default function FoodCard({foodData}){
    return (
        <div>
        <a href="#">
            <img className="w-35 h-45 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData.imageId}`}></img>
        </a>
        </div>
    )
}