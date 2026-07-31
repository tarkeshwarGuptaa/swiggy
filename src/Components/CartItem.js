export default function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow border">
      <div className="flex items-center gap-4">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          className="w-20 h-20 object-cover rounded-lg border"
        />
        <div>
          <h1 className="font-medium text-gray-700">{item.name}</h1>
          <p className="text-sm text-gray-400">
            {item.defaultPrice/100 || item.price/100} &times; {item.qty}
          </p>
          <p className="font-bold text-gray-900">
            &#8377; {(item.defaultPrice/100 || item.price/100) * item.qty}
          </p>
        </div>
      </div>

    </div>
  );
}