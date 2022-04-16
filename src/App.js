import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Footer from "./Pages/shared/Footer/Footer";
import Header from "./Pages/shared/Header/Header";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/productdetails/:productid"
          element={<ProductDetails />}
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
