import React from "react";
import "../css_files/Sidebar.css";
import logo192 from "../../src/iiitb_logo.jpg";
import my_pic from "../../src/my_pic.jpeg";

const SideNav = () => {
  return (
    <>
      <div className="container">
        <img className="logo" src={logo192} />
        <div className="content">Overview</div>
        <div className="content">Onboarding</div>
        <div className="content">Monitoring</div>
        <div className="content">Flagging</div>
        {/* <div className="content">Source of Income</div> */}
      </div>
      <div className="profileSection profileInfo profileImg">
        <img className="my_pic" src={my_pic}  alt="/" />
      </div>
      <div className="profileText">sudhanshu.kumar@iiitb.ac.in</div>
    </>
  );
};

export default SideNav;
