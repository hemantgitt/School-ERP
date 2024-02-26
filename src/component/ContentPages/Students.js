import React from "react";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import Header from "../Header/Header";
import RightSidebar from "../RightSidebar/RightSidebar";
import Footer from "../Footer/Footer";

const Students = () => {
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
                      Student Table
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-12">
                <div className="ms-panel">
                  <div className="ms-panel-header">
                    <h1 className="mb-0">Student Table</h1>
                  </div>
                  <div className="ms-panel-body">
                    <div className="table-responsive">
                      <table
                        id="data-table-4"
                        className="table w-100 thead-primary dataTable no-footer"
                        role="grid"
                        aria-describedby="data-table-4_info"
                        style={{ width: "930px" }}
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabindex="0"
                              aria-controls="data-table-4"
                              rowspan="1"
                              colspan="1"
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "141px" }}
                            >
                              Name
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="data-table-4"
                              rowspan="1"
                              colspan="1"
                              aria-label="Roll No: activate to sort column ascending"
                              style={{ width: "77px" }}
                            >
                              Roll No
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="data-table-4"
                              rowspan="1"
                              colspan="1"
                              aria-label="Class: activate to sort column ascending"
                              style={{ width: "79px" }}
                            >
                              Class
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="data-table-4"
                              rowspan="1"
                              colspan="1"
                              aria-label="Mobile: activate to sort column ascending"
                              style={{ width: "81px" }}
                            >
                              Mobile
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="data-table-4"
                              rowspan="1"
                              colspan="1"
                              aria-label="Admission date: activate to sort column ascending"
                              style={{ width: "148px" }}
                            >
                              Admission date
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="data-table-4"
                              rowspan="1"
                              colspan="1"
                              aria-label="Email: activate to sort column ascending"
                              style={{ width: "152px" }}
                            >
                              Email
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td className="sorting_1">Airi Satou</td>
                            <td>5</td>
                            <td>M.com</td>
                            <td>5407890</td>
                            <td>2008/11/28</td>
                            <td>gr@gmail.com</td>
                          </tr>
                          <tr role="row" className="even">
                            <td className="sorting_1">Ashton Cox</td>
                            <td>3</td>
                            <td>B.Tech(Ec)</td>
                            <td>15627840</td>
                            <td>2009/01/12</td>
                            <td>k456@gmail.com</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1">Bradley Greer</td>
                            <td>19</td>
                            <td>MCA</td>
                            <td>25580000</td>
                            <td>2012/10/13</td>
                            <td>$Da@gmail.com</td>
                          </tr>
                          <tr role="row" className="even">
                            <td className="sorting_1">Bradley Greer</td>
                            <td>26</td>
                            <td>MCA</td>
                            <td>25580000</td>
                            <td>2012/10/13</td>
                            <td>br@gmail.com</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1">Brielle Williamson</td>
                            <td>6</td>
                            <td>B.Arch</td>
                            <td>4804904</td>
                            <td>2012/12/02</td>
                            <td>gr786@gmail.com</td>
                          </tr>
                          <tr role="row" className="even">
                            <td className="sorting_1">Cedric Kelly</td>
                            <td>4</td>
                            <td>MCA</td>
                            <td>6224899</td>
                            <td>2012/03/29</td>
                            <td>kr@gmail.com</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1">Charde Marshall</td>
                            <td>13</td>
                            <td>Phd</td>
                            <td>67419300</td>
                            <td>2008/10/16</td>
                            <td>470453@gmail.com</td>
                          </tr>
                          <tr role="row" className="even">
                            <td className="sorting_1">Colleen Hurst</td>
                            <td>9</td>
                            <td>MCA</td>
                            <td>2360980</td>
                            <td>2009/09/15</td>
                            <td>k453@gmail.com</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1">Dai Rios</td>
                            <td>20</td>
                            <td>M.A</td>
                            <td>229066767</td>
                            <td>2012/09/26</td>
                            <td>Da@gmail.com</td>
                          </tr>
                          <tr role="row" className="even">
                            <td className="sorting_1">Dai Rios</td>
                            <td>27</td>
                            <td>M.A</td>
                            <td>229066767</td>
                            <td>2012/09/26</td>
                            <td>Da@gmail.com</td>
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

export default Students;
