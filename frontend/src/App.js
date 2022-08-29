import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import UserEditScreen from "./screens/UserEditScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route exact path="/" element={<HomeScreen />}></Route>
              <Route
                exact
                path="/admin/userlist"
                element={<UserListScreen />}
              ></Route>
              <Route
                exact
                path="/admin/orderlist"
                element={<OrderListScreen />}
              ></Route>
              <Route
                exact
                path="/admin/productlist"
                element={<ProductListScreen />}
              ></Route>
              <Route
                exact
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              ></Route>
              <Route
                exact
                path="/admin/user/:id/edit"
                element={<UserEditScreen />}
              ></Route>
              <Route exact path="/login" element={<LoginScreen />}></Route>
              <Route exact path="/payment" element={<PaymentScreen />}></Route>
              <Route exact path="/order/:id" element={<OrderScreen />}></Route>
              <Route
                exact
                path="/admin/order/:id"
                element={<OrderDetailScreen />}
              ></Route>
              <Route
                exact
                path="/placeOrder"
                element={<PlaceOrderScreen />}
              ></Route>
              <Route
                path="/login/shipping"
                element={<ShippingScreen />}
              ></Route>
              <Route
                exact
                path="/register"
                element={<RegisterScreen />}
              ></Route>
              <Route exact path="/profile" element={<ProfileScreen />}></Route>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/cart" element={<CartScreen />}></Route>
              <Route path="/cart/:id" element={<CartScreen />}></Route>

              {/* <Route path="/cart/:id/:qty" element={<CartScreen />}></Route> */}
            </Routes>
          </Container>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
