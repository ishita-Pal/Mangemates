

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    category_id: "",
    // image: null, // Initialize image as null
  });

  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee.name.trim() || !employee.email.trim() || !employee.password.trim() || !employee.address.trim() || !employee.category_id.trim()) {
      alert("All fields are required");
      return;
    }

    const data = {
      name: employee.name,
      email: employee.email,
      password: employee.password,
      address: employee.address,
      category_id: employee.category_id,
    };

    console.log('data', data);

    axios
      .post("http://localhost:3000/auth/add_employee", data)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(JSON.stringify(result.data.Error));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              name="name"
              placeholder="Enter Name"
              value={employee.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
              value={employee.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={employee.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="address"
              name="address"
              autoComplete="off"
              value={employee.address}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="category_id" className="form-label">Category</label>
            <select
              name="category_id"
              id="category_id"
              className="form-select"
              value={employee.category_id}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {category.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;

