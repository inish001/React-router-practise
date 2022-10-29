import React from "react";
// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"; // for active links
import Order from "./Components/Order"; // for navigating programmatically
import NotFound from "./Components/NotFound"; // for not found page
import Products from "./Components/Products"; // for nested routes
import FeaturedProducts from "./Components/FeaturedProducts"; // for nested routes
import NewProducts from "./Components/NewProducts"; // for nested routes
import Users from "./Components/Users"; // for  search params
import UsersDetails from "./Components/UsersDetails"; // for useParams
import Profile from "./Components/Profile"; // for protected routes
import { AuthProvider } from "./Components/auth";
import Login from "./Components/Login";
import ReqAuth from "./Components/ReqAuth";
const LazyAbout = React.lazy(() => import("./Components/About")); // for lazy loading

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* <Route path='/'   element={<Home/>}/> */}
          <Route path="home" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route // for lazy loading
            path="about"
            element={
              <React.Suspense fallback="Loading....">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order" element={<Order />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} /> {/* index route */}
            <Route path="FeaturedProducts" element={<FeaturedProducts />} />
            <Route path="NewProducts" element={<NewProducts />} />
          </Route>
          <Route
            path="profile"
            element={
              <ReqAuth>
                <Profile />
              </ReqAuth>
            }
          />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UsersDetails />} />
          {/* dynamic routes */}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
