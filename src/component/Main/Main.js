import React from "react";
// import LeftSidebar from "../LeftSideBar/LeftSidebar";
import Header from "../Header/Header";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
// import Course from "../AboutCourse/Course";

const Main = () => {
  return (
    <>
    <div>
      
    </div>
      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
        {/* <!-- Preloader --> */}
        {/* <div id="preloader-wrap">
          <div className="spinner spinner-8">
            <div className="ms-circle1 ms-child"></div>
            <div className="ms-circle2 ms-child"></div>
            <div className="ms-circle3 ms-child"></div>
            <div className="ms-circle4 ms-child"></div>
            <div className="ms-circle5 ms-child"></div>
            <div className="ms-circle6 ms-child"></div>
            <div className="ms-circle7 ms-child"></div>
            <div className="ms-circle8 ms-child"></div>
            <div className="ms-circle9 ms-child"></div>
            <div className="ms-circle10 ms-child"></div>
            <div className="ms-circle11 ms-child"></div>
            <div className="ms-circle12 ms-child"></div>
          </div>
        </div> */}

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
            {/* <!-- Icon cards Widget --> */}
            <div className="row mt-4">
              <div className="col-xl-4 col-md-6">
                <div className="ms-card card-gradient-success ms-widget ms-infographics-widget">
                  <div className="ms-card-body media">
                    <div className="media-body">
                      <h6>Notifications</h6>
                      <p className="ms-card-change"> 25</p>
                      <a href="notification.html" className="fs-12 text-white">
                        View More{" "}
                        <i className="material-icons">arrow_forward</i>
                      </a>
                    </div>
                  </div>
                  <i className="fa-solid fa-bell"></i>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="ms-card card-gradient-secondary ms-widget ms-infographics-widget">
                  <div className="ms-card-body media">
                    <div className="media-body">
                      <h6>Total Fees</h6>
                      <p className="ms-card-change"> 30,950</p>
                      <a href="feereceipt.html" className="fs-12 text-white">
                        View More{" "}
                        <i className="material-icons">arrow_forward</i>
                      </a>
                    </div>
                  </div>
                  <i className="fas fa-indian-rupee-sign"></i>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="ms-card card-gradient-warning ms-widget ms-infographics-widget">
                  <div className="ms-card-body media">
                    <div className="media-body">
                      <h6>Attendance</h6>
                      <p className="ms-card-change">
                        {" "}
                        <i className="material-icons">arrow_upward</i> 90%
                      </p>
                      <a href="attendence.html" className="fs-12 text-white">
                        View More{" "}
                        <i className="material-icons">arrow_forward</i>
                      </a>
                    </div>
                  </div>
                  <i className="fa fa-list-check"></i>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-md-12 ">
                <div className="ms-panel ">
                  <div className="ms-panel-header">
                    <h1 className="mb- d-inline">Student Details</h1>
                    <img
                      src="assets/img/A003101.jpg"
                      className="profile-img"
                      alt=""
                    />
                    <a
                      className="fa fa-chevron-down float-right"
                      data-toggle="collapse"
                      data-target="#list"
                      aria-expanded="false"
                      aria-controls="popups"
                      style={{ top: "25px", position: "relative" }}
                    >
                      {" "}
                    </a>
                  </div>
                  <div className="ms-panel-body" id="list">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td className="font-weight-bold"> Name </td>
                            <td>:</td>
                            <td>Pawan Sharma</td>
                            <td className="font-weight-bold">Gender</td>
                            <td>:</td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold">Father Name </td>
                            <td>:</td>
                            <td>Shiv Sharma</td>
                            <td className="font-weight-bold">Mother Name</td>
                            <td>:</td>
                            <td>Deepika Sharma</td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold">
                              {" "}
                              Date of Birth{" "}
                            </td>
                            <td>:</td>
                            <td>10.09.1994</td>
                            <td className="font-weight-bold">Email</td>
                            <td>:</td>
                            <td>pawan.sharma@info.com</td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold"> className </td>
                            <td>:</td>
                            <td>
                              10<sup>th</sup>
                            </td>
                            <td className="font-weight-bold">Section</td>
                            <td>:</td>
                            <td>A</td>
                          </tr>
                          <tr>
                            <td className="font-weight-bold"> Roll No. </td>
                            <td>:</td>
                            <td>10005</td>
                            <td className="font-weight-bold">Address</td>
                            <td>:</td>
                            <td>A-16, Jangpura, New Delhi - 110014</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 col-md-12 ">
                <div className="ms-panel">
                  <div className="ms-panel-header ">
                    <h6>University Results</h6>
                    <a
                      className=" fa fa-chevron-down float-right"
                      data-toggle="collapse"
                      data-target="#graph"
                      aria-expanded="false"
                      aria-controls="popups"
                    >
                      {" "}
                    </a>
                  </div>
                  <div className="ms-panel-body " id="graph">
                    <canvas id="bar-chart"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="ms-panel  height-84 ">
                  <div className="ms-panel-header">
                    <h6>Excellent Toppers</h6>
                  </div>
                  <div className="ms-panel-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Persentage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="ms-table-f-w"> Chihoo Hwang </td>
                            <td>1</td>
                            <td>99.9%</td>
                          </tr>
                          <tr>
                            <td className="ms-table-f-w"> Ajay Suryavanash </td>
                            <td>2</td>
                            <td>98%</td>
                          </tr>
                          <tr>
                            <td className="ms-table-f-w"> Johnson </td>
                            <td>3</td>
                            <td>97%</td>
                          </tr>
                          <tr>
                            <td className="ms-table-f-w"> Kalvish </td>
                            <td>4</td>
                            <td>96%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </main>

        {/* <Course/> */}

        {/* <!--   Quick bar --> */}
       <RightSidebar/>

        {/* <!-- MODALS --> */}

        {/* <!-- Reminder Modal --> */}
        <div
          className="modal fade"
          id="reminder-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="reminder-modal"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-secondary">
                <h5 className="modal-title has-icon text-white">
                  {" "}
                  New Reminder
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <form>
                <div className="modal-body">
                  <div className="ms-form-group">
                    <label>Remind me about</label>
                    <textarea
                      className="form-control"
                      name="reminder"
                    ></textarea>
                  </div>

                  <div className="ms-form-group">
                    <span className="ms-option-name fs-14">Repeat Daily</span>
                    <label className="ms-switch float-right">
                      <input type="checkbox" />
                      <span className="ms-switch-slider round"></span>
                    </label>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="ms-form-group">
                        <input
                          type="text"
                          className="form-control datepicker"
                          name="reminder-date"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ms-form-group">
                        <select className="form-control" name="reminder-time">
                          <option value="">12:00 pm</option>
                          <option value="">1:00 pm</option>
                          <option value="">2:00 pm</option>
                          <option value="">3:00 pm</option>
                          <option value="">4:00 pm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary shadow-none"
                    data-dismiss="modal"
                  >
                    Add Reminder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- Notes Modal --> */}
        <div
          className="modal fade"
          id="notes-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="notes-modal"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-secondary">
                <h5 className="modal-title has-icon text-white" id="NoteModal">
                  New Note
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <form>
                <div className="modal-body">
                  <div className="ms-form-group">
                    <label>Note Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="note-title"
                      value=""
                    />
                  </div>

                  <div className="ms-form-group">
                    <label>Note Description</label>
                    <textarea
                      className="form-control"
                      name="note-description"
                    ></textarea>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary shadow-none"
                    data-dismiss="modal"
                  >
                    Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
