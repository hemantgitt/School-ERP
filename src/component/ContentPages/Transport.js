import React from "react";
import RightSidebar from "../RightSidebar/RightSidebar";
import Header from "../Header/Header";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import Footer from "../Footer/Footer";

const Transport = () => {
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
                      Transport Details
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-12">
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h1 className="mb-0">Transport Details</h1>
                  </div>

                  <div className="ms-panel-body">
                    <div className="table-responsive">
                      <div
                        id="data-table-2_wrapper"
                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12">
                            <table
                              className="table table-striped table-bordered thead-primary w-100 dataTable no-footer"
                              role="grid"
                              aria-describedby="data-table-2_info"
                              style={{ width: "928px" }}
                            >
                              <thead>
                                <tr role="row">
                                  <th style={{ width: "178px" }}>Route Name</th>
                                  <th style={{ width: "94px" }}>Vehicle No</th>
                                  <th style={{ width: "94px" }}>Driver Name</th>
                                  <th style={{ width: "125px" }}>
                                    Driver License
                                  </th>
                                  <th style={{ width: "118px" }}>
                                    Contact Number
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr role="row" className="odd">
                                  <td>
                                    Jangpura &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Lodhi Road
                                  </td>
                                  <td>MT988800</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025936</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="even">
                                  <td>
                                    Lodhi Road &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Jangpura
                                  </td>
                                  <td>DT888002</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025967</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td>
                                    Jangpura &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Lodhi Road
                                  </td>
                                  <td>MT988800</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025936</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="even">
                                  <td>
                                    Lodhi Road &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Jangpura
                                  </td>
                                  <td>DT888002</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025967</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td>
                                    Jangpura &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Lodhi Road
                                  </td>
                                  <td>MT988800</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025936</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="even">
                                  <td>
                                    Lodhi Road &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Jangpura
                                  </td>
                                  <td>DT888002</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025967</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td>
                                    Jangpura &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Lodhi Road
                                  </td>
                                  <td>MT988800</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025936</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="even">
                                  <td>
                                    Lodhi Road &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Jangpura
                                  </td>
                                  <td>DT888002</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025967</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td>
                                    Jangpura &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Lodhi Road
                                  </td>
                                  <td>MT988800</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025936</td>
                                  <td>+91 9876543210</td>
                                </tr>
                                <tr role="row" className="even">
                                  <td>
                                    Lodhi Road &nbsp;{" "}
                                    <i className="fa-solid fa-arrow-right-arrow-left fs-12"></i>{" "}
                                    Jangpura
                                  </td>
                                  <td>DT888002</td>
                                  <td>James Jordan</td>
                                  <td>DLNC025967</td>
                                  <td>+91 9876543210</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="data-table-2_paginate"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </main>

        {/* <!--   Quick bar --> */}
        <RightSidebar />
      </div>
    </>
  );
};

export default Transport;
