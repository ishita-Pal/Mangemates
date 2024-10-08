import "./Home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import Birthdays from "./Calendar/Birthdays";
import CalendarComponent from "./Calendar/CalendarComponent";
import NoticeBoard from "./Calendar/Updates";
import Leave from "./Calendar/Leave";
import Swal from "sweetalert2";

function Home() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("http://localhost:3000/auth/delete_employee/" + id)
          .then((result) => {
            if (result.data.Status) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success").then(() => {
                window.location.reload();
              });
            } else {
              Swal.fire("Error!", result.data.Error, "error");
            }
          })
          .catch((err) => {
            Swal.fire("Error!", err.message, "error");
          });
      }
    });
  };

  return (
    <div>
      <h1 className="heading">Dashboard</h1>
      <h4 className="heading">Admin</h4>

      <div className="content-wrapper mt-3">
        <div className="employee-list-wrapper">
          <div className="d-flex justify-content-center">
            <h3>Employee List</h3>
          </div>

          <Link to="/dashboard/add_employee" className="btn btn-success">
            Add Employee
          </Link>

          <div className="mt-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>
                      <Link
                        to={`/dashboard/edit_employee/` + e.id}
                        className="btn btn-info btn-sm me-2"
                      >
                        <MdModeEdit />
                      </Link>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleDelete(e.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="calendar-wrapper">
          <CalendarComponent />
        </div>
      </div>

      <div className="m">
        <div className="birthday">
          <Birthdays />
        </div>
        <div className="leave">
          <Leave />
        </div>
        <div className="notice">
          <NoticeBoard />
        </div>
      </div>
    </div>
  );
}

export default Home;
