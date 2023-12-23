"use client";
import React, { useState } from "react";

function BasicInfoForm({ userName, email }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutMe: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <div className='mt-8'>
      <form onSubmit={handleSubmit}>
        <div className='mt-4'>
          <label htmlFor='name' className='mr-2'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder={userName}
            value={formData.name}
            onChange={handleChange}
            className='border rounded-md p-1.5'
          />
        </div>
        <div className='mt-4'>
          <label htmlFor='email' className='mr-2'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder={email}
            value={formData.email}
            onChange={handleChange}
            className='border rounded-md p-1.5'
          />
        </div>
        <div>
          <label htmlFor='aboutMe' className='mt-4'>
            About Me:
          </label>
          <textarea
            id='aboutMe'
            name='aboutMe'
            value={formData.aboutMe}
            onChange={handleChange}
            className='h-32 w-full mt-4 border'
          ></textarea>
        </div>
        <button
          type='submit'
          className='mt-4 w-full bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-500 p-1.5'
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BasicInfoForm;
