import React from "react";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import Header from "../Header/Header";
import RightSidebar from "../RightSidebar/RightSidebar";
import Footer from "../Footer/Footer";

const Course = () => {
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
                      Courses & Syllabus
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="col-lg-12">
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h1 className="mb-0">About Courses</h1>
                  </div>

                  <div className="ms-panel-body">
                    <p>
                      Open after rule place He earth earth good called days unto
                      which wherein day doesn't said day image signs fish days
                      forth for evening whose his make his bearing years
                      gathering good brought without. Years living creepeth.
                      Form them yielding behold greater divided void was fowl
                      earth in. Spirit Bring grass they're you have shall years
                      so morning. Grass gathering won't heaven set greater
                      darkness forth abundantly he. sn't hath, forth. Brought
                      sea subdue, from divided replenish creature after creeping
                      abundantly fly is cattle fill were years years may
                      darkness blessed which land creepeth good moving good.
                      Life living you're. Open after rule place He earth earth
                      good called days unto which wherein day doesn't said day
                      image signs fish days forth for evening whose his make his
                      bearing years gathering good brought without. Years living
                      creepeth. Form them yielding behold greater divided void
                      was fowl earth in. Spirit Bring grass they're you have
                      shall years so morning. Grass gathering won't heaven set
                      greater darkness forth abundantly he. sn't hath, forth.
                      Brought sea subdue, from divided replenish creature after
                      creeping abundantly fly is cattle fill were years years
                      may darkness blessed which land creepeth good moving good.
                      Life living you're..
                    </p>
                    <h3>Course Syllabus</h3>
                    <ol className="dotted">
                      <li> Introduction to Computer and Internet.</li>
                      <li>
                        Microsoft Application Tools such MS Word, MS Excel, MS
                        PowerPoint.
                      </li>
                      <li>
                        Computer Organizations and Operating Systems Programming
                        in C.
                      </li>
                      <li>
                        Object Oriented Programming Languages such as C++/Java.
                      </li>
                      <li>RDBMS and Data Management</li>
                      <li>
                        Web Technologies such as creation of dynamic website.
                      </li>
                    </ol>
                    <h3>
                      After the completion of course the students will be able
                      to:
                    </h3>
                    <ol className="dotted">
                      <li>
                        Understand computers, its basic components and
                        applications.
                      </li>
                      <li>
                        Understand and Identify the Concepts of Computer
                        Hardware and software.
                      </li>
                      <li>Implement Word Processing Basics.</li>
                      <li>
                        Create Spread sheets and use of formulas and functions.
                      </li>
                      <li>Create and develop a presentation.</li>
                      <li>
                        Understand basic concepts in Networking and
                        Troubleshooting.
                      </li>
                      <li>
                        Develop the skills for effective compose of E-mails and
                        its features.
                      </li>
                      <li>Create and develop forms, queries and reports.</li>
                      <li>
                        Understand the concepts of multimedia and its
                        applications.
                      </li>
                      <li>Develop the understanding of HTML.</li>
                      <li>
                        Understand the concepts of Tally and its applications
                        Maintenance of PC.
                      </li>
                      <li>Create and develop forms, queries and reports.</li>
                      <li>
                        Understand the concepts of multimedia and its
                        applications.
                      </li>
                      <li>Develop the understanding of HTML.</li>
                      <li>
                        Understand the concepts of Tally and its applications
                        Maintenance of PC.
                      </li>
                      <li>
                        Understand the concepts of multimedia and its
                        applications.
                      </li>
                      <li>
                        Develop the understanding of HTML.ally and its
                        applications Maintenance of PC.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <div className=" d-flex justify-content-between">
                      <div className="ms-header-text">
                        <h1>Syllabus</h1>
                      </div>
                    </div>
                  </div>
                  <div className="ms-panel-body pb-5">
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Subjects</th>
                            <th scope="col">Conversation</th>
                            <th scope="col">Sessions</th>
                            <th scope="col">Final Exams</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>English</td>
                            <td className="w-25">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="80"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>76</td>
                            <td>9.12%</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td className="w-25">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>26</td>
                            <td>7.65%</td>
                          </tr>
                          <tr>
                            <td>Computer</td>
                            <td className="w-25">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "40%" }}
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>14</td>
                            <td>14.29%</td>
                          </tr>
                          <tr>
                            <td>Science</td>
                            <td className="w-25">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>12</td>
                            <td>10.99%</td>
                          </tr>
                          <tr>
                            <td>Mathmatics</td>
                            <td className="w-25">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuenow="15"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>4</td>
                            <td>22.35%</td>
                          </tr>
                          <tr>
                            <td>Social Science</td>
                            <td className="w-25">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "45%" }}
                                  aria-valuenow="45"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>86</td>
                            <td>34.12%</td>
                          </tr>
                          <tr>
                            <td>Sports</td>
                            <td className="w-25">
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "55%" }}
                                  aria-valuenow="55"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>23</td>
                            <td>3.75%</td>
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
        <RightSidebar />
      </div>
    </>
  );
};

export default Course;
