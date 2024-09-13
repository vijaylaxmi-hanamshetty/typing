import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import DefaultFooter from "./components/DefaultFooter";

const App = () => {
  
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4">
      <Header />
     <div className="min-h-[calc(100vh - 400px)]">
        <Outlet />
      </div>
      <DefaultFooter />
    </div>
  );
};

export default App;
