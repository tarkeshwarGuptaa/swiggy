import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Components/Restaurant.js";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home.js";
import RestMenu from "./Components/RestMenu.js";
import Rest from "./Components/Rest.js";
import { Provider } from "react-redux";
import store from "./store/storeConfig.js";
import Checkout from "./Components/Checkout.js";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<Rest></Rest>}>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/kanpur/:restId" element={<RestMenu></RestMenu>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App></App>);
