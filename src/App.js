import React from "react";
import Login from "./component/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Register from "./component/Register/Register";
import Main from "./component/Main/Main";
import Course from './component/ContentPages/Course'
import Students from "./component/ContentPages/Students";
import Attendance from "./component/ContentPages/Attendance";
import Schedule from "./component/ContentPages/Schedule";
import Fees from "./component/ContentPages/Fees";
import Holidays from "./component/ContentPages/Holidays";
import Transport from "./component/ContentPages/Transport";
import Notify  from './component/ContentPages/Notify'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/main" element={<Main />} />
          <Route path="/course" element={<Course/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/attendance" element={<Attendance/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/fees" element={<Fees/>}/>
          <Route path="/holidays" element={<Holidays/>}/>
          <Route path="/transport" element={<Transport/>}/>
          <Route path="/notification" element={<Notify/>}/>
          








        </Routes>
      </Router>
    </div>
  );
};

export default App;
