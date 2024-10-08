import React, { Profiler } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashb from './Components/Dashb';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Category from './Components/Category';
import Employee from './Components/Employee';
import Profile from './Components/Profile';
import AddCate from './Components/AddCate';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from "./Components/EditEmployee"
import Start from './Components/Start';
import Employee_login from './Components/Employee_login';
import EmployessMain from './Components/Employee/EmployessMain';
import Maap from './Components/Map/Maap';
import Mainn from './Components/Profile/Mainn';
import Complain from './Components/Complain';
// import Task from './Components/Task/Task';
import DragDropFiles from "./Components/Calendar/DragDropFiles"
import EmployeeProfile from "./Components/EmployeeProfile/Profile/Mainn";
// import Password1 from './Components/Password/Password';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/password1" element={<Password1 />} /> */}
        <Route path="/addemployee" element={<AddEmployee />} />
      <Route path='/' element={<Maap/>}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<Employee_login />}></Route>

      <Route path="/employeeHome" element={<EmployessMain/>}></Route>   
      <Route path="/employeeP" element={<EmployeeProfile/>}></Route>
      {/* <Route path="/task" element={<Task/>}></Route> */}
      {/* <Route path="/complain" element={<Contact/>}></Route> */}
     
  
    

{/* Admin */}

        <Route path='/complain' element={<Complain/>}></Route>
      <Route path='/dashboard/my_profile' element={<Mainn/>}></Route>
         <Route path='/dashboard' element={<Dashb />}>
        <Route path='/dashboard/home' element={<Home/>}></Route>
        <Route path='/dashboard/employee' element={<Employee/>}></Route>
        <Route path='/dashboard/category' element={<Category/>}></Route>
        <Route path='/dashboard/notice' element={<DragDropFiles/>}></Route>
        <Route path='/dashboard/add_category' element={<AddCate/>}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
        {/* <Route path='/dashboard/edit_employee:id' element={<EditEmployee/>}></Route> */}
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>

       
      </Route>

  
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
