import React, { useState } from "react";
import EmployeeServices from "../services/EmployeeServices";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeServices.saveEmployee(employee).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="flex max-w-2xl mx-auto border-b shadow">
      <div className="px-8 py-8">
        <div className="text-2xl font-thin tracking-wider">
          <h1>Add new Employee</h1>
        </div>
        <div className="items-center justify-center w-full my-4 h-14">
          <label htmlFor="" className="block text-sm font-normal text-gray-600">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
            className="h-10 px-2 py-2 mt-2 border w-96"
          />
        </div>
        <div className="items-center justify-center w-full my-4 h-14">
          <label htmlFor="" className="block text-sm font-normal text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
            className="h-10 px-2 py-2 mt-2 border w-96"
          />
        </div>
        <div className="items-center justify-center w-full my-4 h-14">
          <label htmlFor="" className="block text-sm font-normal text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) =>
              setEmployee({ ...employee, emailId: e.target.value })
            }
            className="h-10 px-2 py-2 mt-2 border w-96"
          />
        </div>
        <div className="items-center justify-center w-full pt-4 my-4 space-x-4 h-14">
          <button onClick={saveEmployee} className="px-6 py-2 font-semibold text-white bg-green-400 rounded hover:bg-green-700">
            Save
          </button>
          <button className="px-6 py-2 font-semibold text-white bg-red-400 rounded hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
