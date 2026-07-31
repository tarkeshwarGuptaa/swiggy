export default function DineoutCard({ dineoutData }) {
  return (
    <div className="flex-none w-82 h-95">
      <div className="relative">
        <img
          className="w-80 h-48 object-cover rounded-t-2xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${dineoutData.info.mediaFiles[0].url}`}
        ></img>
        <div className="w-80 absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/80 to-transparent"></div>
        <p className="max-w-[80%] truncate absolute bottom-2 left-2 text-xl font-semibold text-white z-10">
          {dineoutData.info.name}
        </p>
        <p className="absolute bottom-2 right-4 text-xl font-semibold text-white z-10">
          {dineoutData.info.rating.value}
        </p>
      </div>
      <div></div>
    </div>
  );
}
