import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import Mail from "./Mail";

const Header = () => {
    const [data, setData] = useState({ notifications: [], mails: [] });

    useEffect(() => {
      const notificationInterval = setInterval(() => {
        const newNotification = {
          message: "New notification!",
          time: new Date().toLocaleTimeString(),
        };
        setData(prevData => ({
          ...prevData,
          notifications: [newNotification, ...prevData.notifications.slice(0, 5)]
        }));
      }, 10000);
    
      const mailInterval = setInterval(() => {
        const newMail = {
          message: "New mail!",
          time: new Date().toLocaleTimeString(),
        };
        setData(prevData => ({
          ...prevData,
          mails: [newMail, ...prevData.mails.slice(0, 5)]
        }));
      }, 100000);
    
      return () => {
        clearInterval(notificationInterval);
        clearInterval(mailInterval);
      };
    }, []);
    
    const { notifications, mails } = data;  return (
    <>
      <nav className="navbar ms-navbar">
        <div
          className="ms-aside-toggler ms-toggler pl-0"
          data-target="#ms-side-nav"
          data-toggle="slideLeft"
        >
          <span className="ms-toggler-bar bg-primary"></span>
          <span className="ms-toggler-bar bg-primary"></span>
          <span className="ms-toggler-bar bg-primary"></span>
        </div>

        <div className="logo-sn logo-sm ms-d-block-sm">
          <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="\">
            <img src="assets/img/logo/weeducate-4.png" alt="logo" />{" "}
          </Link>
        </div>

        <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
          <li className="ms-nav-item ms-search-form pb-0 py-0">
            <form className="ms-form" method="post">
              <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                <input
                  type="search"
                  className="ms-form-input"
                  name="search"
                  placeholder="Search here..."
                  value=""
                />
                <i className="flaticon-search text-disabled"></i>
              </div>
            </form>
          </li>
          <li className="ms-nav-item dropdown">
            <a
              href="\"
              className="text-disabled ms-has-notification"
              id="mailDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa-regular fa-envelope-open fa-2x"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="mailDropdown"
            >
              <li className="dropdown-menu-header">
                <h6 className="dropdown-header ms-inline m-0">
                  <span className="text-disabled">Mail</span>
                </h6>
                <span className="badge badge-pill badge-success">{mails.length}New</span>
              </li>
              <li className="dropdown-divider"></li>
 {/* Mail notification fucntion */}
               {mails.slice(0, 6).map((mail, index) => (
                <Mail key={index} mail={mail} />
              ))}

              <li className="dropdown-divider"></li>
              <li className="dropdown-menu-footer text-center">
                <a href="\">Go to Inbox</a>
              </li>
            </ul>
          </li>
          <li className="ms-nav-item dropdown">
            <a
              href="\"
              className="text-disabled ms-has-notification"
              id="notificationDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa-regular fa-bell fa-2x"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="notificationDropdown"
            >
              <li className="dropdown-menu-header">
                <h6 className="dropdown-header ms-inline m-0">
                  <span className="text-disabled">Notifications</span>
                </h6>
                <span className="badge badge-pill badge-info">
                  {notifications.length}New
                </span>
              </li>
              <li className="dropdown-divider"></li>
    {/* Notification implementaion here  */}
              {notifications.slice(0, 6).map((notification, index) => (
                <Notification key={index} notification={notification} />
              ))}

      {/* //////////////////////         */}
              <li className="dropdown-divider"></li>
              <li className="dropdown-menu-footer text-center">
                <a href="\">View all Notifications</a>
              </li>
            </ul>
          </li>
          <li className="ms-nav-item">
            <a
              href="\"
              className="text-disabled ms-toggler"
              data-target="#ms-recent-activity"
              data-toggle="slideRight"
            >
              <i className="flaticon-menu"></i>
            </a>
          </li>
          <li className="ms-nav-item ms-nav-user dropdown">
            <a
              href="\"
              id="userDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <img
                className="ms-user-img ms-img-round float-right"
                src="assets/img/A003101.jpg"
                alt="people"
              />{" "}
            </a>
            <ul
              className="dropdown-menu dropdown-menu-right user-dropdown"
              aria-labelledby="userDropdown"
            >
              <li className="dropdown-menu-header">
                <h6 className="dropdown-header ms-inline m-0">
                  <span className="text-disabled">&nbsp; Welcome, Pawan</span>
                </h6>
              </li>
              <li className="dropdown-divider"></li>
              <li className="ms-dropdown-list">
                <a className="media fs-14 p-2" href="">
                  {" "}
                  <span>
                    <i className="flaticon-user mr-2"></i> Profile
                  </span>{" "}
                </a>
                <a className="media fs-14 p-2" href="">
                  {" "}
                  <span>
                    <i className="flaticon-mail mr-2"></i> Inbox
                  </span>{" "}
                  <span className="badge badge-pill badge-info">3</span>{" "}
                </a>
              </li>
              <li className="dropdown-divider"></li>
              <li className="dropdown-menu-footer">
                <a className="media fs-14 p-2" href="">
                  {" "}
                  <span>
                    <i className="flaticon-shut-down mr-2"></i> Logout
                  </span>{" "}
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div
          className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler"
          data-toggle="slideDown"
          data-target="#ms-nav-options"
        >
          <span className="ms-toggler-bar bg-primary"></span>
          <span className="ms-toggler-bar bg-primary"></span>
          <span className="ms-toggler-bar bg-primary"></span>
        </div>
      </nav>
    </>
  );
};

export default Header;
