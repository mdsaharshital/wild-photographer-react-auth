import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Footer from "./Pages/shared/Footer/Footer";
import Header from "./Pages/shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/productdetails/:productid"
          element={<ProductDetails />}
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
