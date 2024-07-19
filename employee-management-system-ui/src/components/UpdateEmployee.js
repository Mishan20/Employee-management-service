import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeServices";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    console.log(employee);
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto border-b shadow">
      <div className="px-8 py-8">
        <div className="text-2xl font-thin tracking-wider">
          <h1>Update Employee</h1>
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
            onClick={updateEmployee}
            className="px-6 py-2 font-semibold text-white bg-green-400 rounded hover:bg-green-700">
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            className="px-6 py-2 font-semibold text-white bg-red-400 rounded hover:bg-red-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;