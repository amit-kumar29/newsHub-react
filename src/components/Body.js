import React from "react";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import MiddleBody from "./MiddleBody";
import CarouselCard from "./CarouselCard";

const Body = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
