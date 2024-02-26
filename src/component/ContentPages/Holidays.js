import React from "react";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Holidays = () => {
  return (
    <>
      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
        {/* <!-- Overlays --> */}
        <div
          className="ms-aside-overlay ms-overlay-left ms-toggler"
          data-target="#ms-side-nav"
          data-toggle="slideLeft"
        ></div>
        <div
          className="ms-aside-overlay ms-overlay-right ms-toggler"
          data-target="#ms-recent-activity"
          data-toggle="slideRight"
        ></div>

        <LeftSidebar />

        {/* <!-- Sidebar Right --> */}
        <aside
          id="ms-recent-activity"
          className="side-nav fixed ms-aside-right ms-scrollable"
        >
          <div className="ms-aside-header">
            <ul
              className="nav nav-tabs tabs-bordered d-flex nav-justified mb-3"
              role="tablist"
            >
              <li role="presentation" className="fs-12">
                <a
                  href="#activityLog"
                  aria-controls="activityLog"
                  className="active"
                  role="tab"
                  data-toggle="tab"
                >
                  {" "}
                  Activity Log
                </a>
              </li>
              <li role="presentation" className="fs-12">
                <a
                  href="#recentPosts"
                  aria-controls="recentPosts"
                  role="tab"
                  data-toggle="tab"
                >
                  {" "}
                  Settings{" "}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="close ms-toggler text-center"
                  data-target="#ms-recent-activity"
                  data-toggle="slideRight"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="ms-aside-body">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active fade show"
                id="activityLog"
              >
                <ul className="ms-activity-log">
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-light">
                      <i className="flaticon-gear"></i>
                    </div>
                    <h6>Update 1.0.0 Pushed</h6>
                    <span>
                      {" "}
                      <i className="material-icons">event</i>1 January, 2021
                    </span>
                    <p className="fs-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, ula in sodales
                      vehicula....
                    </p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-success">
                      <i className="flaticon-tick-inside-circle"></i>
                    </div>
                    <h6>Profile Updated</h6>
                    <span>
                      {" "}
                      <i className="material-icons">event</i>4 March, 2018
                    </span>
                    <p className="fs-14">
                      Curabitur purus sem, malesuada eu luctus eget, suscipit
                      sed turpis. Nam pellentesque felis vitae justo accumsan,
                      sed semper nisi sollicitudin...
                    </p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-warning">
                      <i className="flaticon-alert-1"></i>
                    </div>
                    <h6>Your payment is due</h6>
                    <span>
                      {" "}
                      <i className="material-icons">event</i>1 January, 2021
                    </span>
                    <p className="fs-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, ula in sodales
                      vehicula....
                    </p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-danger">
                      <i className="flaticon-alert"></i>
                    </div>
                    <h6>Database Error</h6>
                    <span>
                      {" "}
                      <i className="material-icons">event</i>4 March, 2018
                    </span>
                    <p className="fs-14">
                      Curabitur purus sem, malesuada eu luctus eget, suscipit
                      sed turpis. Nam pellentesque felis vitae justo accumsan,
                      sed semper nisi sollicitudin...
                    </p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-info">
                      <i className="flaticon-information"></i>
                    </div>
                    <h6>Checkout what's Trending</h6>
                    <span>
                      {" "}
                      <i className="material-icons">event</i>1 January, 2021
                    </span>
                    <p className="fs-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, ula in sodales
                      vehicula....
                    </p>
                  </li>
                  <li>
                    <div className="ms-btn-icon btn-pill icon btn-secondary">
                      <i className="flaticon-diamond"></i>
                    </div>
                    <h6>Your Dashboard is ready</h6>
                    <span>
                      {" "}
                      <i className="material-icons">event</i>4 March, 2018
                    </span>
                    <p className="fs-14">
                      Curabitur purus sem, malesuada eu luctus eget, suscipit
                      sed turpis. Nam pellentesque felis vitae justo accumsan,
                      sed semper nisi sollicitudin...
                    </p>
                  </li>
                </ul>
                <a href="\" className="btn btn-primary d-block">
                  {" "}
                  View All{" "}
                </a>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="recentPosts">
                <h6>General Settings</h6>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">
                    Location Tracking
                  </span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">
                    Allow Notifications
                  </span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">Allow Popups</span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" checked />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <h6>Log Settings</h6>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">Enable Logging</span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" checked />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">Audit Logs</span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">Error Logs</span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" checked />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <h6>Advanced Settings</h6>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">Enable Logging</span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" checked />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">Audit Logs</span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
                <div className="ms-form-group">
                  <span className="ms-option-name fs-14">Error Logs</span>
                  <label className="ms-switch float-right">
                    <input type="checkbox" checked />
                    <span className="ms-switch-slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* <!-- Main Content --> */}
        <main className="body-content">
          <Header />

          {/* <!-- Body Content Wrapper --> */}
          <div className="ms-content-wrapper">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb" className="nav-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="material-icons">home</i> Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Student
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Holidays
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-12">
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h1 className="mb-0">Holidays List</h1>
                  </div>
                  <div className="ms-panel-body">
                    <div
                      className="table-responsive"
                      style={{ height: "500px", overflowY: "scroll" }}
                    >
                      <table
                        id="data-table"
                        className="table w-100 thead-primary dataTable no-footer"
                        role="grid"
                        aria-describedby="data-table-4_info"
                        style={{ width: "930px" }}
                      >
                        <thead>
                          <tr role="row">
                            <th style={{ width: "141px" }}>Title</th>
                            <th style={{ width: "77px" }}>Type</th>
                            <th style={{ width: "79px" }}>Start Date</th>
                            <th style={{ width: "81px" }}>End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-success">
                                New Year's Day
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>01/01/2024</td>
                            <td>01/01/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-yellow">
                                Republic Holiday
                              </span>
                            </td>
                            <td>National Holiday</td>
                            <td>26/01/2024</td>
                            <td>26/01/2024</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-pink">
                                Holi Festival
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>20/03/2024</td>
                            <td>21/03/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-info">
                                Summer Vacation
                              </span>
                            </td>
                            <td>Summer Holidays</td>
                            <td>01/05/2024</td>
                            <td>30/06/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-primary">
                                Independence Day
                              </span>
                            </td>
                            <td>National Holiday</td>
                            <td>15/08/2024</td>
                            <td>15/08/2024</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-secondary">
                                Rakshabandhan
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>25/08/2024</td>
                            <td>25/08/2024</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-success">
                                Dushera (Vijaydashmi)
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>20/10/2024</td>
                            <td>20/10/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-danger">
                                Diwali Festival
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>10/11/2024</td>
                            <td>15/11/2024</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-skyblue">
                                New Year's Day
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>01/01/2024</td>
                            <td>01/01/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-yellow">
                                Republic Holiday
                              </span>
                            </td>
                            <td>National Holiday</td>
                            <td>26/01/2024</td>
                            <td>26/01/2024</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-pink">
                                Holi Festival
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>20/03/2024</td>
                            <td>21/03/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-info">
                                Summer Vacation
                              </span>
                            </td>
                            <td>Summer Holidays</td>
                            <td>01/05/2024</td>
                            <td>30/06/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-primary">
                                Independence Day
                              </span>
                            </td>
                            <td>National Holiday</td>
                            <td>15/08/2024</td>
                            <td>15/08/2024</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-secondary">
                                Rakshabandhan
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>25/08/2024</td>
                            <td>25/08/2024</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>
                              <span className="post-date bg-success">
                                Dushera (Vijaydashmi)
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>20/10/2024</td>
                            <td>20/10/2024</td>
                          </tr>
                          <tr role="row" className="even">
                            <td>
                              <span className="post-date bg-danger">
                                Diwali Festival
                              </span>
                            </td>
                            <td>Public Holiday</td>
                            <td>10/11/2024</td>
                            <td>15/11/2024</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </main>

        {/* <!--   Quick bar --> */}
        <aside id="ms-quick-bar" className="ms-quick-bar fixed ms-d-block-lg">
          <ul className="nav nav-tabs ms-quick-bar-list" role="tablist">
            <li
              className="ms-quick-bar-item ms-has-qa"
              role="presentation"
              data-toggle="tooltip"
              data-placement="left"
              title="Launch Chat"
              data-title="Chat"
            >
              <a
                href="#qa-chat"
                aria-controls="qa-chat"
                role="tab"
                data-toggle="tab"
              >
                <i className="fa-regular fa-comments"></i>
                <span className="ms-quick-bar-label">Chat</span>
              </a>
            </li>
            <li
              className="ms-quick-bar-item ms-has-qa"
              role="presentation"
              data-toggle="tooltip"
              data-placement="left"
              title="Launch Email"
              data-title="Email"
            >
              <a
                href="#qa-email"
                aria-controls="qa-email"
                role="tab"
                data-toggle="tab"
              >
                <i className="fa-regular fa-envelope-open"></i>
                <span className="ms-quick-bar-label">Email</span>
              </a>
            </li>
            <li
              className="ms-quick-bar-item ms-has-qa"
              role="presentation"
              data-toggle="tooltip"
              data-placement="left"
              title="Launch To-do-list"
              data-title="To-do-list"
            >
              <a
                href="#qa-toDo"
                aria-controls="qa-toDo"
                role="tab"
                data-toggle="tab"
              >
                <i className="fa-solid fa-list"></i>
                <span className="ms-quick-bar-label">To-do</span>
              </a>
            </li>
            <li
              className="ms-quick-bar-item ms-has-qa"
              role="presentation"
              data-toggle="tooltip"
              data-placement="left"
              title="Launch Reminders"
              data-title="Reminders"
            >
              <a
                href="#qa-reminder"
                aria-controls="qa-reminder"
                role="tab"
                data-toggle="tab"
              >
                <i className="fa-regular fa-bell"></i>
                <span className="ms-quick-bar-label">Reminder</span>
              </a>
            </li>
            <li
              className="ms-quick-bar-item ms-has-qa"
              role="presentation"
              data-toggle="tooltip"
              data-placement="left"
              title="Launch Notes"
              data-title="Notes"
            >
              <a
                href="#qa-notes"
                aria-controls="qa-notes"
                role="tab"
                data-toggle="tab"
              >
                <i className="fa-regular fa-clipboard"></i>
                <span className="ms-quick-bar-label">Notes</span>
              </a>
            </li>
            <li
              className="ms-quick-bar-item ms-has-qa"
              role="presentation"
              data-toggle="tooltip"
              data-placement="left"
              title="Invite Members"
              data-title="Invite Members"
            >
              <a
                href="#qa-invite"
                aria-controls="qa-invite"
                role="tab"
                data-toggle="tab"
              >
                <i className="fa-solid fa-share-nodes"></i>
                <span className="ms-quick-bar-label">Invite</span>
              </a>
            </li>
          </ul>

          <div
            className="ms-configure-qa"
            data-toggle="tooltip"
            data-placement="left"
            title="Configure Quick Access"
          >
            <a href="\">
              <i className="fa-solid fa-sliders"></i>
              <span className="ms-quick-bar-label">Configure</span>
            </a>
          </div>

          {/* <!-- Quick bar Content --> */}
          <div className="ms-quick-bar-content">
            <div className="ms-quick-bar-header clearfix">
              <h5 className="ms-quick-bar-title float-left">Title</h5>
              <button
                type="button"
                className="close ms-toggler"
                data-target="#ms-quick-bar"
                data-toggle="hideQuickBar"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="ms-quick-bar-body tab-content">
              <div role="tabpanel" className="tab-pane" id="qa-chat">
                <div className="ms-chat-container">
                  <div className="ms-chat-header px-3">
                    <div className="ms-chat-user-container media clearfix">
                      <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                        <img
                          src="assets/img/new-student-4.jpg"
                          className="ms-img-round"
                          alt="people"
                        />
                      </div>
                      <div className="media-body ms-chat-user-info mt-1">
                        <h6>Anny Farisha</h6>
                        <a
                          href="\"
                          className="text-disabled has-chevron fs-12"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Available
                        </a>
                        <ul className="dropdown-menu">
                          <li className="ms-dropdown-list">
                            <a className="media p-2" href="#">
                              <div className="media-body">
                                <span>Busy</span>
                              </div>
                            </a>
                            <a className="media p-2" href="#">
                              <div className="media-body">
                                <span>Away</span>
                              </div>
                            </a>
                            <a className="media p-2" href="#">
                              <div className="media-body">
                                <span>Offline</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form className="ms-form my-3" method="post">
                      <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                        <input
                          type="search"
                          className="ms-form-input w-100"
                          name="search"
                          placeholder="Search for People and Groups"
                          value=""
                        />
                        <i className="flaticon-search text-disabled"></i>
                      </div>
                    </form>
                  </div>

                  <div className="ms-chat-body">
                    <ul
                      className="nav nav-tabs tabs-bordered d-flex nav-justified px-3"
                      role="tablist"
                    >
                      <li role="presentation" className="fs-12">
                        <a
                          href="#chats"
                          aria-controls="chats"
                          className="active show"
                          role="tab"
                          data-toggle="tab"
                        >
                          {" "}
                          Chats{" "}
                        </a>
                      </li>
                      <li role="presentation" className="fs-12">
                        <a
                          href="#groups"
                          aria-controls="groups"
                          role="tab"
                          data-toggle="tab"
                        >
                          {" "}
                          Groups{" "}
                        </a>
                      </li>
                      <li role="presentation" className="fs-12">
                        <a
                          href="#contacts"
                          aria-controls="contacts"
                          role="tab"
                          data-toggle="tab"
                        >
                          {" "}
                          Contacts{" "}
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane active show fade in"
                        id="chats"
                      >
                        <ul className="ms-scrollable ms-quickbar-container">
                          <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                            <div className="ms-chat-status ms-status-away ms-has-new-msg ms-chat-img mr-3 align-self-center">
                              <span className="msg-count">3</span>
                              <img
                                src="assets/img/new-student-5.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>James Zathila</h6>{" "}
                              <span className="ms-chat-time">2 Hours ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <i className="flaticon-trash ms-delete-trigger">
                                {" "}
                              </i>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-1.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Raymart Sandiago</h6>{" "}
                              <span className="ms-chat-time">3 Hours ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <i className="flaticon-trash ms-delete-trigger">
                                {" "}
                              </i>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                            <div className="ms-chat-status ms-status-offline ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-2.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Heather Brown</h6>{" "}
                              <span className="ms-chat-time">12 Hours ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <i className="flaticon-trash ms-delete-trigger">
                                {" "}
                              </i>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                            <div className="ms-chat-status ms-status-busy ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-4.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Micheal John</h6>{" "}
                              <span className="ms-chat-time">Yesterday</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <i className="flaticon-trash ms-delete-trigger">
                                {" "}
                              </i>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-5.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>John Doe</h6>{" "}
                              <span className="ms-chat-time">3 Days ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <i className="flaticon-trash ms-delete-trigger">
                                {" "}
                              </i>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="groups"
                      >
                        <ul className="ms-scrollable ms-quickbar-container">
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-1.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>James Zathila</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <ul className="ms-group-members clearfix mt-3 mb-0">
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-2.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-3.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-4.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                                <li className="ms-group-count"> + 12 more </li>
                              </ul>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-4.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Raymart Sandiago</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <ul className="ms-group-members clearfix mt-3 mb-0">
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-3.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-4.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-2.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>John Doe</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                              <ul className="ms-group-members clearfix mt-3 mb-0">
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-4.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-5.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <img
                                    src="assets/img/topper-6.jpg"
                                    alt="member"
                                  />{" "}
                                </li>
                                <li className="ms-group-count"> + 4 more </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="contacts"
                      >
                        <ul className="ms-scrollable ms-quickbar-container">
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-1.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>John Doe</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-2.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Raymart Sandiago</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-3.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Micheal John</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-4.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Heather Brown</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-2.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>Mila Freign</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                            </div>
                          </li>
                          <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                            <div className="ms-chat-img mr-3 align-self-center">
                              <img
                                src="assets/img/topper-1.jpg"
                                className="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div className="media-body ms-chat-user-info mt-1">
                              <h6>James Zathila</h6>{" "}
                              <a href="\" className="ms-chat-time">
                                {" "}
                                <i className="flaticon-chat"></i>{" "}
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In in arcu turpis. Nunc
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane" id="qa-email">
                <div className="ms-email-container">
                  <div className="ms-qa-options">
                    <a href="\" className="btn btn-primary w-100 mt-0 has-icon">
                      {" "}
                      <i className="flaticon-pencil"></i> Compose Email{" "}
                    </a>
                  </div>

                  <ul className="ms-scrollable ms-quickbar-container">
                    <li className="p-3  media ms-email clearfix">
                      <div className="ms-email-img mr-3 ">
                        <img
                          src="assets/img/topper-1.jpg"
                          className="ms-img-round"
                          alt="people"
                        />
                      </div>
                      <div className="media-body ms-email-details">
                        <span className="ms-email-sender">James Zathila</span>
                        <h6 className="ms-email-subject">
                          [WordPress] New Comment
                        </h6>{" "}
                        <span className="ms-email-time">2 Hours ago</span>
                        <p className="ms-email-msg">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In in arcu turpis. Nunc
                        </p>
                      </div>
                    </li>
                    <li className="p-3  media ms-email clearfix">
                      <div className="ms-email-img mr-3 ">
                        <img
                          src="assets/img/topper-2.jpg"
                          className="ms-img-round"
                          alt="people"
                        />
                      </div>
                      <div className="media-body ms-email-details">
                        <span className="ms-email-sender">John Doe</span>
                        <h6 className="ms-email-subject">
                          [WordPress] New Comment
                        </h6>{" "}
                        <span className="ms-email-time">8 Hours ago</span>
                        <p className="ms-email-msg">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In in arcu turpis. Nunc
                        </p>
                      </div>
                    </li>
                    <li className="p-3  media ms-email clearfix">
                      <div className="ms-email-img mr-3 ">
                        <img
                          src="assets/img/topper-4.jpg"
                          className="ms-img-round"
                          alt="people"
                        />
                      </div>
                      <div className="media-body ms-email-details">
                        <span className="ms-email-sender">Heather Brown</span>
                        <h6 className="ms-email-subject">
                          [WordPress] New Comment
                        </h6>{" "}
                        <span className="ms-email-time">1 Day ago</span>
                        <p className="ms-email-msg">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In in arcu turpis. Nunc
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane" id="qa-toDo">
                <div className="ms-quickbar-container ms-todo-list-container ms-scrollable">
                  <form className="ms-add-task-block">
                    <div className="form-group mx-3 mt-0  fs-14 clearfix">
                      <input
                        type="text"
                        className="form-control fs-14 float-left"
                        id="task-block"
                        name="todo-block"
                        placeholder="Add Task Block"
                        value=""
                      />
                      <button
                        type="submit"
                        className="ms-btn-icon bg-primary float-right"
                      >
                        <i className="material-icons text-disabled">add</i>
                      </button>
                    </div>
                  </form>

                  <ul className="ms-todo-list">
                    <li className="ms-card ms-qa-card ms-deletable">
                      <div className="ms-card-header clearfix">
                        <h6 className="ms-card-title">Task Block Title</h6>
                        <button
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add a Task to this block"
                          className="ms-add-task-to-block ms-btn-icon float-right"
                        >
                          {" "}
                          <i className="material-icons text-disabled">
                            add
                          </i>{" "}
                        </button>
                      </div>

                      <div className="ms-card-body">
                        <ul className="ms-list ms-task-block">
                          <li className="ms-list-item ms-to-do-task ms-deletable">
                            <label className="ms-checkbox-wrap ms-todo-complete">
                              <input type="checkbox" value="" />
                              <i className="ms-checkbox-check"></i>
                            </label>
                            <span> Task to do </span>
                            <button type="submit" className="close">
                              <i className="flaticon-trash ms-delete-trigger">
                                {" "}
                              </i>
                            </button>
                          </li>
                          <li className="ms-list-item ms-to-do-task ms-deletable">
                            <label className="ms-checkbox-wrap ms-todo-complete">
                              <input type="checkbox" value="" />
                              <i className="ms-checkbox-check"></i>
                            </label>
                            <span>Task to do</span>
                            <button type="submit" className="close">
                              <i className="flaticon-trash ms-delete-trigger">
                                {" "}
                              </i>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div className="ms-card-footer clearfix">
                        <a href="\" className="text-disabled mr-2">
                          {" "}
                          <i className="flaticon-archive"> </i> Archive{" "}
                        </a>
                        <a
                          href="\"
                          className="text-disabled  ms-delete-trigger float-right"
                        >
                          {" "}
                          <i className="flaticon-trash"> </i> Delete{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane" id="qa-reminder">
                <div className="ms-quickbar-container ms-reminders">
                  <ul className="ms-qa-options">
                    <li>
                      {" "}
                      <a
                        href="\"
                        data-toggle="modal"
                        data-target="#reminder-modal"
                      >
                        {" "}
                        <i className="flaticon-bell"></i> New Reminder{" "}
                      </a>{" "}
                    </li>
                  </ul>

                  <div className="ms-quickbar-container ms-scrollable">
                    <div className="ms-card ms-qa-card ms-deletable">
                      <div className="ms-card-body">
                        <p> Developer Meeting in Block B </p>
                        <span className="text-disabled fs-12">
                          <i className="material-icons fs-14">access_time</i>{" "}
                          Today - 3:45 pm
                        </span>
                      </div>
                      <div className="ms-card-footer clearfix">
                        <div className="ms-note-editor float-right">
                          <a
                            href="\"
                            className="text-disabled mr-2"
                            data-toggle="modal"
                            data-target="#reminder-modal"
                          >
                            {" "}
                            <i className="flaticon-pencil"> </i> Edit{" "}
                          </a>
                          <a
                            href="\"
                            className="text-disabled  ms-delete-trigger"
                          >
                            {" "}
                            <i className="flaticon-trash"> </i> Delete{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="ms-card ms-qa-card ms-deletable">
                      <div className="ms-card-body">
                        <p> Start adding change log to version 2 </p>
                        <span className="text-disabled fs-12">
                          <i className="material-icons fs-14">access_time</i>{" "}
                          Tomorrow - 12:00 pm
                        </span>
                      </div>
                      <div className="ms-card-footer clearfix">
                        <div className="ms-note-editor float-right">
                          <a
                            href="\"
                            className="text-disabled mr-2"
                            data-toggle="modal"
                            data-target="#reminder-modal"
                          >
                            {" "}
                            <i className="flaticon-pencil"> </i> Edit{" "}
                          </a>
                          <a
                            href="\"
                            className="text-disabled  ms-delete-trigger"
                          >
                            {" "}
                            <i className="flaticon-trash"> </i> Delete{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane" id="qa-notes">
                <ul className="ms-qa-options">
                  <li>
                    {" "}
                    <a href="\" data-toggle="modal" data-target="#notes-modal">
                      {" "}
                      <i className="flaticon-sticky-note"></i> New Note{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="\">
                      {" "}
                      <i className="flaticon-excel"></i> Export to Excel{" "}
                    </a>{" "}
                  </li>
                </ul>

                <div className="ms-quickbar-container ms-scrollable">
                  <div className="ms-card ms-qa-card ms-deletable">
                    <div className="ms-card-header">
                      <h6 className="ms-card-title">
                        Don't forget to check with the designer
                      </h6>
                    </div>
                    <div className="ms-card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vulputate urna in faucibus venenatis. Etiam at
                        dapibus neque, vel varius metus. Pellentesque eget orci
                        malesuada, venenatis magna et
                      </p>
                      <ul className="ms-note-members clearfix mb-0">
                        <li className="ms-deletable">
                          {" "}
                          <img
                            src="assets/img/topper-3.jpg"
                            alt="member"
                          />{" "}
                        </li>
                        <li className="ms-deletable">
                          {" "}
                          <img
                            src="assets/img/topper-4.jpg"
                            alt="member"
                          />{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="ms-card-footer clearfix">
                      <div className="dropdown float-left">
                        <a
                          href="\"
                          className="text-disabled"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="flaticon-share-1"></i> Share
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown-menu-header">
                            <h6 className="dropdown-header ms-inline m-0">
                              <span className="text-disabled">Share With</span>
                            </h6>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="ms-scrollable ms-dropdown-list ms-members-list">
                            <a className="media p-2" href="#">
                              <div className="mr-2 align-self-center">
                                <img
                                  src="assets/img/topper-5.jpg"
                                  className="ms-img-round"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <span>John Doe</span>
                              </div>
                            </a>
                            <a className="media p-2" href="#">
                              <div className="mr-2 align-self-center">
                                <img
                                  src="assets/img/topper-4.jpg"
                                  className="ms-img-round"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <span>Raymart Sandiago</span>
                              </div>
                            </a>
                            <a className="media p-2" href="#">
                              <div className="mr-2 align-self-center">
                                <img
                                  src="assets/img/topper-2.jpg"
                                  className="ms-img-round"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <span>Heather Brown</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="ms-note-editor float-right">
                        <a
                          href="\"
                          className="text-disabled mr-2"
                          data-toggle="modal"
                          data-target="#notes-modal"
                        >
                          {" "}
                          <i className="flaticon-pencil"> </i> Edit{" "}
                        </a>
                        <a
                          href="\"
                          className="text-disabled  ms-delete-trigger"
                        >
                          {" "}
                          <i className="flaticon-trash"> </i> Delete{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="ms-card ms-qa-card ms-deletable">
                    <div className="ms-card-header">
                      <h6 className="ms-card-title">
                        Perform the required unit tests
                      </h6>
                    </div>
                    <div className="ms-card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vulputate urna in faucibus venenatis. Etiam at
                        dapibus neque, vel varius metus. Pellentesque eget orci
                        malesuada, venenatis magna et
                      </p>
                      <ul className="ms-note-members clearfix mb-0">
                        <li className="ms-deletable">
                          {" "}
                          <img
                            src="assets/img/topper-1.jpg"
                            alt="member"
                          />{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="ms-card-footer clearfix">
                      <div className="dropdown float-left">
                        <a
                          href="\"
                          className="text-disabled"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="flaticon-share-1"></i> Share
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown-menu-header">
                            <h6 className="dropdown-header ms-inline m-0">
                              <span className="text-disabled">Share With</span>
                            </h6>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="ms-scrollable ms-dropdown-list ms-members-list">
                            <a className="media p-2" href="#">
                              <div className="mr-2 align-self-center">
                                <img
                                  src="assets/img/topper-5.jpg"
                                  className="ms-img-round"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <span>John Doe</span>
                              </div>
                            </a>
                            <a className="media p-2" href="#">
                              <div className="mr-2 align-self-center">
                                <img
                                  src="assets/img/topper-4.jpg"
                                  className="ms-img-round"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <span>Raymart Sandiago</span>
                              </div>
                            </a>
                            <a className="media p-2" href="#">
                              <div className="mr-2 align-self-center">
                                <img
                                  src="assets/img/topper-1.jpg"
                                  className="ms-img-round"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <span>Heather Brown</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="ms-note-editor float-right">
                        <a
                          href="\"
                          className="text-disabled mr-2"
                          data-toggle="modal"
                          data-target="#notes-modal"
                        >
                          {" "}
                          <i className="flaticon-pencil"> </i> Edit{" "}
                        </a>
                        <a
                          href="\"
                          className="text-disabled  ms-delete-trigger"
                        >
                          {" "}
                          <i className="flaticon-trash"> </i> Delete{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane" id="qa-invite">
                <div className="ms-quickbar-container text-center ms-invite-member">
                  <i className="flaticon-network"></i>
                  <p>Invite Team Members</p>
                  <form>
                    <div className="ms-form-group">
                      <input
                        type="text"
                        placeholder="Member Email"
                        className="form-control"
                        name="invite-email"
                        value=""
                      />
                    </div>
                    <div className="ms-form-group">
                      <button
                        type="submit"
                        name="invite-member"
                        className="btn btn-primary w-100"
                      >
                        Invite
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Holidays;
