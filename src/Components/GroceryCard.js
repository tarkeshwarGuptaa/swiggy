export default function GroceryCard({ groceryData }) {
  return (
    <div>
      <div>
        <a href="#">
          <img
            className="min-w-36 min-h-45 w-36 h-45 object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${groceryData.imageId}`}
          ></img>
        </a>
      </div>
      <div className="text-center text-[#02060CEB] font-semibold text-xl/6 mt-3 max-w-36 max-h-11">
        <h1>{groceryData.action.text}</h1>
      </div>
    </div>
  );
}
