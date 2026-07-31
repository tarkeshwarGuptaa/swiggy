import { useState } from "react";
import { Link } from "react-router";

export default function HomeHeader() {
  const [mobileView, setMobileView] = useState(false);

  return (
    <header className="bg-[#ff5200] relative overflow-hidden text-white min-h-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex items-center justify-between relative z-20">
        <Link to="/" className="shrink-0">
          <img
            className="w-32 md:w-40 h-auto object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Swiggy Logo"
          />
        </Link>

        <nav className="hidden md:flex font-semibold text-sm lg:text-base gap-4 lg:gap-8 items-center">
          <a href="#">
            Swiggy Corporate
          </a>
          <a href="#">
            Partner with us
          </a>
          <a
            href="#"
            className="border border-white rounded-xl py-2.5 px-4 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Get the App
          </a>
          <a
            href="#"
            className="bg-black text-white rounded-xl md:rounded-2xl py-2.5 px-5 hover:bg-black/80 transition-colors"
          >
            Sign in
          </a>
        </nav>

        <button
          onClick={() => setMobileView(!mobileView)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileView ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileView && (
        <div className="md:hidden bg-[#e04800] px-4 pt-3 pb-6 space-y-3 relative z-20 font-semibold border-t border-white/20">
          <a href="#" className="block py-2 ">
            Swiggy Corporate
          </a>
          <a href="#" className="block py-2">
            Partner with us
          </a>
          <a
            href="#"
            className="inline-block border border-white rounded-xl py-2 px-4 hover:bg-white/10"
          >
            Get the App
          </a>
          <a
            href="#"
            className="block w-full text-center bg-black text-white rounded-xl py-2.5 mt-2"
          >
            Sign in
          </a>
        </div>
      )}

      <div className="relative pt-8 md:pt-16 pb-8 md:pb-12 px-4 z-10">
        <img
          className="hidden xl:block absolute top-0 left-0 h-100 w-auto  object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Veggies decoration"
        />

        <img
          className="hidden xl:block absolute top-0 right-0 h-100 w-auto  object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Sushi decoration"
        />

        <h1 className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Order food. Discover best restaurants. Swiggy it!
        </h1>

        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-3 md:gap-4 mt-6 md:mt-8">
          <input
            type="text"
            className="bg-white w-full md:w-5/12 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-base md:text-lg font-semibold text-gray-800 border-2 border-transparent focus:border-black focus:outline-none shadow-md placeholder:text-gray-400"
            placeholder="Lakhanpur, khyora, kanpur"
          />
          <input
            type="text"
            className="bg-white w-full md:w-7/12 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-base md:text-lg font-semibold text-gray-800 border-2 border-transparent focus:border-black focus:outline-none shadow-md placeholder:text-gray-400"
            placeholder="Search for restaurant, items or more"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 px-4 pb-8 relative">
        <Link
          to={"/restaurant"}
        >
          <img
            className="w-full h-auto rounded-2xl  cursor-pointer"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt="Order Food Online"
          />
        </Link>
        <a
          href="#"
        >
          <img
            className="w-full h-auto rounded-2xl"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt="Instamart"
          />
        </a>
        <a
          href="#"
        >
          <img
            className="w-full h-auto rounded-2xl"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt="Dineout"
          />
        </a>
      </div>
    </header>
  );
}