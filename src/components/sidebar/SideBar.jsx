import React from "react";
import "../sidebar/sidebar.css";
import dashboard from "../../assets/icons/description.png"
import patient from "../../assets/icons/pateint.png"
import appointment from "../../assets/icons/appointment.png"
import billing from "../../assets/icons/billing.png"
import support from "../../assets/icons/support.png"
import settings from "../../assets/icons/settings.png"

const SideBar = () => {
  return (
    <div className="sidebar-Main">
      <div className="logo-and-link">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="navlinks">
          <div className="icon">
            <img src={dashboard}
            height="20px"
            width="20px"/>
            <p>Dashboard</p>
          </div>
          <div className="icon">
          <img src={patient}/>
            <p>Patient</p>
          </div>
          <div className="icon">
          <img src={appointment}/>
            <p>Appointment</p>
          </div>
          <div className="icon billing-nvlink">
          <img src={billing}/>
            <p>Billing</p>
          </div>
        </div>
      </div>
      <div className="footer-navlinks">
        <div className="icon">
        <img src={support}/>
          <p>Support</p>
        </div>
        <div className="icon">
        <img src={settings}/>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
