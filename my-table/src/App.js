import React, { useState } from 'react';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [salaryInfo, setSalaryInfo] = useState({
    salary: ''
  });

  const [addressInfo, setAddressInfo] = useState({
    address: ''
  });

  const [employeeInfo, setEmployeeInfo] = useState({
    name: '',
    age: '',
    dob: '',
    domain: 'IT'
  });

  const [selectedDepartment, setSelectedDepartment] = useState('');

  const [departments, setDepartments] = useState([]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSalaryChange = (e) => {
    const { name, value } = e.target;
    setSalaryInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAgeChange = (e) => {
    let age = parseInt(e.target.value);
    if (age < 24) {
      age = 24;
    } else if (age > 40) {
      age = 40;
    }
    setEmployeeInfo(prevState => ({
      ...prevState,
      age: age.toString()
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const department = e.dataTransfer.getData('department');
    setSelectedDepartment(department);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, department) => {
    e.dataTransfer.setData('department', department);
  };

  const handleSubmit = () => {
    const payload = {
      personalInfo,
      salaryInfo,
      addressInfo,
      employeeInfo,
      selectedDepartment
    };
    console.log(payload); // Log the payload or send it to the server
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <div className="container">
        <div className="form-container">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="section">
                    <h2>Personal Information</h2>
                    <div>
                      <label>First Name:</label>
                      <input type="text" name="firstName" value={personalInfo.firstName} onChange={handlePersonalInfoChange} />
                    </div>
                    <div>
                      <label>Last Name:</label>
                      <input type="text" name="lastName" value={personalInfo.lastName} onChange={handlePersonalInfoChange} />
                    </div>
                    <div>
                      <label>Email:</label>
                      <input type="email" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="section">
                    <h2>Salary</h2>
                    <div>
                      <label>Salary:</label>
                      <input type="number" name="salary" value={salaryInfo.salary} onChange={handleSalaryChange} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="section">
                    <h2>Address</h2>
                    <div>
                      <label>Address:</label>
                      <input type="text" name="address" value={addressInfo.address} onChange={handleAddressChange} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="section">
                    <h2>Employee Details</h2>
                    <div>
                      <label>Name:</label>
                      <input type="text" name="name" value={employeeInfo.name} onChange={handleEmployeeChange} />
                    </div>
                    <div>
                      <label>Age:</label>
                      <input type="number" name="age" value={employeeInfo.age} onChange={handleAgeChange} />
                    </div>
                    <div>
                      <label>Date of Birth:</label>
                      <input type="date" name="dob" value={employeeInfo.dob} onChange={handleEmployeeChange} />
                    </div>
                    <div>
                      <label>Domain:</label>
                      <select name="domain" value={employeeInfo.domain} onChange={handleEmployeeChange}>
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="department-container" onDrop={handleDrop} onDragOver={handleDragOver}>
          <h2>Departments</h2>
          <div className="department" data-department="HR" draggable="true" onDragStart={(e) => handleDragStart(e, 'HR')} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e)}>
            <h3>HR Department</h3>
          </div>
          <div className="department" data-department="IT" draggable="true" onDragStart={(e) => handleDragStart(e, 'IT')} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e)}>
            <h3>IT Department</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
