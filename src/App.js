import { Navbar } from "reactstrap";
import SideNav from "./page-component/SideNav";
import Mainpage from "./pages/mainpage";
import NavHead from "./page-component/Navhead";
import React, { useState } from "react";

import MyContext from "./myContext";

function App() {

  const [tab, setTab] = useState(1);
  const contextValue = {
    tab,
    setTab
  };

  return (
    <MyContext.Provider value={contextValue} >
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <SideNav />
      </div>
      <div style={{ flex: 4 }}>
        <NavHead />
        <Mainpage />
      </div>
    </div>
    </MyContext.Provider>
  );
}

export default App;
