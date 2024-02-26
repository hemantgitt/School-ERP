import React from "react";
import RightSidebar from "../RightSidebar/RightSidebar";
import Header from "../Header/Header";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import Footer from "../Footer/Footer";

const Fees = () => {
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
                      Student Fees
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-12">
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h1 className="mb-0">Fees Invoice</h1>
                  </div>
                  <div className="ms-panel-body">
                    <center>
                      <h1>
                        <i className="fa fa-graduation-cap fs-30"></i>{" "}
                        <strong>SMART</strong>
                      </h1>
                      <p className="text-dark">
                        Delhi University, Opp. Town Hall, Patel Road, Delhi -
                        1100231
                      </p>
                    </center>

                    <div className="col-lg-12 col-md-12">
                      <div className="ms-panel">
                        <div className="ms-panel-body">
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Fees Type</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Fees Semester</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">Invoice Number</th>
                                  <th scope="col">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Annual Fees</td>
                                  <td>Chirag</td>
                                  <td>Monthly</td>
                                  <td>27/11/2021</td>
                                  <td>#2312456</td>
                                  <td>$123</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Tution Fees</td>
                                  <td>Loary Cartine</td>
                                  <td>Yearly</td>
                                  <td>22/11/2018</td>
                                  <td>#231394</td>
                                  <td>$120</td>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td>Transport Fees</td>
                                  <td>Martine Cartine</td>
                                  <td>Yearly</td>
                                  <td>24/11/2021</td>
                                  <td>#231394</td>
                                  <td>$140</td>
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td>Tution Fees</td>
                                  <td>johny Cartine</td>
                                  <td>Yearly</td>
                                  <td>22/11/2018</td>
                                  <td>#231394</td>
                                  <td>$120</td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td>Annual Fees</td>
                                  <td>keviin Owen</td>
                                  <td>Monthly</td>
                                  <td>27/11/2021</td>
                                  <td>#2312456</td>
                                  <td>$123</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-dark">Transport fees : 120$</p>
                      <p className="text-dark">Sub-Total amount : $150</p>
                      <p className="text-dark">Tax (10%) : $14</p>
                      <p></p>
                      <hr />
                      <p className="text-dark">Total-Amount : $294</p>
                      <button type="button" className="btn btn-warning mb-5">
                        Proceed to Payement
                      </button>{" "}
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-outline-warning mb-5"
                      >
                        Cancel
                      </button>
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

export default Fees;
