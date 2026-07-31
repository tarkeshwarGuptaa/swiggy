import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader() {
  const cartCount = useSelector(state=>state.cart.cartCount);
  
  return (
    <div className="sticky top-0 z-50 w-full h-20 bg-white flex items-center">
      <div className="w-full max-w-300 mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <svg
            className="w-10 h-10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" rx="24" fill="#ff5200" />
            <path
              d="M50 15C33.4315 15 20 28.4315 20 45C20 63.5 42 82.5 48.5 87.8C49.4 88.5 50.6 88.5 51.5 87.8C58 82.5 80 63.5 80 45C80 28.4315 66.5685 15 50 15ZM50 56C43.9249 56 39 51.0751 39 45C39 38.9249 43.9249 34 50 34C56.0751 34 61 38.9249 61 45C61 51.0751 56.0751 56 50 56Z"
              fill="white"
            />
            <circle cx="50" cy="45" r="5" fill="#FC8019" />
          </svg>
          <span className="text-2xl font-extrabold text-[#ff5200] ">
            swiggy
          </span>

          <button className="flex items-center gap-2 text-sm cursor-pointer group bg-transparent border-none p-0 text-left">
            <span className="text-[#686B78] max-w-55 truncate font-normal">
              Lakhanpur khyora Kanpur
            </span>
            <svg
              className="w-4 h-4 text-[#ff5200] transition-transform group-hover:translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center">
          <Link to="/checkout">
          <button className="flex items-center gap-2.5 font-semibold text-base text-[#282C3F] px-3 py-2 rounded-lg hover:text-[#ff5200] hover:bg-[#FFF3EA] transition-all bg-transparent border-none cursor-pointer">
            <div className="relative flex items-center">
              {/* Shopping Bag Cart Icon */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#118A62] text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </div>
            <span>Cart</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
