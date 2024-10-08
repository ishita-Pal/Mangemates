import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddCate = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/add_category', { category })
      .then(result => {
        if (result.data.Status) {
          Swal.fire({
            title: "Category has been Added",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/category');
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        console.error(err);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="category"><strong>Category:</strong></label>
            <input
              type="text"
              name='category'
              placeholder='Enter Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='form-control rounded-0'
            />
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
        </form>
      </div>
    </div>
  );
};

export default AddCate;
