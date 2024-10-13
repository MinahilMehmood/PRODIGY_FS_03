import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const storedUser = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const parsedUser = storedUser && JSON.parse(storedUser).currentUser;

  const [currentUser, setCurrentUser] = useState(parsedUser);
  const [admin, setAdmin] = useState(parsedUser?.isAdmin || null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const parsedUser = storedUser && JSON.parse(storedUser).currentUser;
    setCurrentUser(parsedUser);
    setAdmin(parsedUser?.isAdmin || null);
  }, []);

  return (
    <Router>
      {admin && <Topbar />}
      <div className="container">
        {admin && <Sidebar />}
        <Routes>
          <Route path="/login" element={!admin ? <Login /> : <Navigate to="/" />} />
          {admin && (
            <>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
