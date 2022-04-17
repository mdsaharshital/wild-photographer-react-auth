import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/About me/AboutMe";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/SignIn-SignUp/Login/Login";
import Register from "./Pages/SignIn-SignUp/Register/Register";
import Footer from "./Pages/shared/Footer/Footer";
import Header from "./Pages/shared/Header/Header";
import RequireAuth from "./Pages/SignIn-SignUp/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/checkout/:productid"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
