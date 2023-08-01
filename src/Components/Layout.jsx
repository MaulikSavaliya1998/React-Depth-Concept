import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>Hello, Maulik</h1>
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </React.Fragment>
  );
};
