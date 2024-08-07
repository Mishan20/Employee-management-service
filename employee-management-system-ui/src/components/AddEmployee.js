import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeServices";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigaye("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto border-b shadow">
      <div className="px-8 py-8">
        <div className="text-2xl font-thin tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center w-full my-4 h-14">
          <label className="block text-sm font-normal text-gray-600">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 px-2 py-2 mt-2 border w-96"></input>
        </div>
        <div className="items-center justify-center w-full my-4 h-14">
          <label className="block text-sm font-normal text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 px-2 py-2 mt-2 border w-96"></input>
        </div>
        <div className="items-center justify-center w-full my-4 h-14">
          <label className="block text-sm font-normal text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 px-2 py-2 mt-2 border w-96"></input>
        </div>

        <div className="items-center justify-center w-full pt-4 my-4 space-x-4 h-14">
          <button
            onClick={saveEmployee}
            className="px-6 py-2 font-semibold text-white bg-green-400 rounded hover:bg-green-700">
            Save
          </button>
          <button
            onClick={reset}
            className="px-6 py-2 font-semibold text-white bg-red-400 rounded hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;