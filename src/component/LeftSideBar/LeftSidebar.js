import React from "react";
import { Link } from "react-router-dom";
// import Course from "../AboutCourse/Course";

const LeftSidebar = () => {
  return (
    <>
      {/* <main> */}
      <aside
        id="ms-side-nav"
        className="side-nav fixed ms-aside-scrollable ms-aside-left"
      >
        {/* <!-- Logo --> */}
        <div className="logo-sn ms-d-block-lg">
          <a className="pl-0 ml-0 text-center" href="/main">
            <img src="assets/img/logo/weeducate-4.png" alt="logo" />{" "}
          </a>
        </div>

        {/* <!-- Navigation --> */}
        <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
          {/* <!-- Dashboard --> */}
          <li className="menu-item">
            <a
              href="/"
              className="has-chevron active"
              data-toggle="collapse"
              data-target="#dashboard"
              aria-expanded="false"
              aria-controls="dashboard"
            >
              <span>
                <i className="material-icons fs-16">dashboard</i>Dashboard{" "}
              </span>
            </a>
            <ul
              id="dashboard"
              className="collapse show"
              aria-labelledby="dashboard"
              data-parent="#side-nav-accordion"
            >
              <li>
                {" "}
                <a href="/main" className="active">
                  Weeducate
                </a>{" "}
              </li>
            </ul>
          </li>
          {/* <!-- /Dashboard --> */}

          {/* <!--Courses Start--> */}
          <li className="menu-item">
            <Link to="/course">
              <span>
                <i className="fa fa-graduation-cap fs-16"></i>Courses
                
              </span>
            </Link>
          </li>
          {/* <!-- /Courses End---> */}

          {/* <!--Student Start--> */}
          <li className="menu-item">
            <Link to="/students">
              <span>
                <i className="fa fa-users fs-16"></i>Students
              </span>
            </Link>
          </li>
          {/* <!-- /Student End---> */}

          {/* <!--Attendence Start--> */}
          <li className="menu-item">
            <a href="/attendance">
              <span>
                <i className="fa fa-list-check fs-16"></i>&nbsp; Attendence
              </span>
            </a>
          </li>
          {/* <!-- /Attendence End---> */}

          {/* <!--Schedule Start--> */}
          <li className="menu-item">
            <a href="/schedule">
              <span>
                <i className="fa-regular fa-calendar-check fs-16"></i>&nbsp;
                Schedule
              </span>
            </a>
          </li>
          {/* <!-- /Schedule End---> */}

          {/* <!--Fees Start--> */}
          <li className="menu-item">
            <a href="/fees">
              <span>
                <i className="fas fa-indian-rupee-sign fs-16"></i>&nbsp; Fees
              </span>
            </a>
          </li>
          {/* <!-- /Fees End---> */}

          {/* <!--Holiday Start--> */}
          <li className="menu-item">
            <a href="/holidays">
              <span>
                <i className="fa-regular fa-calendar fs-16"></i>Holidays
              </span>
            </a>
          </li>
          {/* <!-- /Holiday End---> */}

          {/* <!--Transport Start--> */}
          <li className="menu-item">
            <a href="/transport">
              <span>
                <i className="fa-solid fa-bus-simple"></i>Transport
              </span>
            </a>
          </li>
          {/* <!-- /Transport End---> */}

          {/* <!--Notice Start--> */}
          <li className="menu-item">
            <a href="/notification">
              <span>
                <i className="fa-solid fa-bell fs-16"></i>Notifications
              </span>
            </a>
          </li>
          {/* <!-- /Notice End---> */}
        </ul>
      </aside>

      {/* </main> */}
    </>
  );
};

export default LeftSidebar;
