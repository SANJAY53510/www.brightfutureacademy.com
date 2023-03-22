import React from "react";
import { useState, useEffect } from "react";
import "./Admission.css";

const Admission = () => {
  const [details, setDetails] = useState({
    StudentName: "",
    FatherName: "",
    MotherName: "",
    AadhaarNo: "",
    Category: "",
    Nationality: "",
    BloodGroup: "",
    Vaccinated: "",
    Gender: "",
    Course: "",
    DateOfBirth: "",
    MobileNo: "",
    Email: "",
    WhichclassNamehaveyouappliedfor: "",
    Whereyoulive: "",
    DisttName: "",
    StateName: "",
    PinCode: "",
  });
  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(details);
    setError(validation(details));
  };

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      (details.StudentName !== "" &&
        details.FatherName !== "" &&
        details.MotherName !== "" &&
        details.AadhaarNo !== "" &&
        details.MobileNo !== "" &&
        details.Email !== "" &&
        details.DateOfBirth !== "" &&
        details.DisttName !== "" &&
        details.StateName !== "" &&
        details.Whereyoulive !== "" &&
        details.WhichclassNamehaveyouappliedfor !== "" &&
        details.PinCode !== "")
    ) {
      alert("Form Sumbit Successfully");
    }
  }, [errors]);

  const validation = (details) => {
    let errors = {};
    //  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!details.StudentName) {
     errors.StudentName = "Student name is required!";} 
     else if (details.StudentName.length < 3) {
    errors.StudentName = "Student Name must be more than 2 characters";}

    if (!details.FatherName) {
      errors.FatherName = "Father name is required!";
    }
     else if (details.FatherName.length < 4) {
     errors.FatherName = "Father Name must be more than 3 characters";}

    if (!details.MotherName) {
      errors.MotherName = "Mother name is required!";
    } 
    else if (details.MotherName.length < 4) {
    errors.MotherName = "Mother Name must be more than 2 characters"; }

    if (!details.AadhaarNo) {
      errors.AadhaarNo = "Aadhaar is required!";
    }
    else if (details.AadhaarNo.length < 12) {
    errors.AadhaarNo = "Aadhaar must be 12 digit";}

    if (!details.MobileNo) {
      errors.MobileNo = "Mobile number is required!";
    } 
    else if (details.MobileNo.length < 10) {
    errors.MobileNo = "Mobile number must be 10 digit";}

    if (!details.Email) {
      errors.Email = "Email name is required!";
    } else if (details.Email.length < 3) {
      errors.Email = " This is not a valid email format!";
    }
    if (!details.DateOfBirth) {
      errors.DateOfBirth = "Date of Birth name is required!";
    }

    if (!details.WhichclassNamehaveyouappliedfor) {
      errors.WhichclassNamehaveyouappliedfor = "Class name is required!";
    }

    if (!details.Whereyoulive) {
      errors.Whereyoulive = "Address is required!";
    }

    if (!details.DisttName) {
      errors.DisttName = "Disst. name is required!";
    }

    if (!details.StateName) {
      errors.StateName = "State name is required!";
    }

    if (!details.PinCode) {
      errors.PinCode = " Pincode is required!";
    }
    return errors;
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="farm">
        <div className="container1">
          <h1> ADMISSION FORM</h1>
        </div>
        <div className="container2">
          <ol>
            <li>
              <label> Student Name</label>
              <br />
              <input
                type="text"
                name="StudentName"
                value={details.StudentName}
                onChange={handleChange}
                placeholder="Enter your Fullname"
              ></input>
            </li>
            {errors.StudentName && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.StudentName}
              </p>
            )}
            <br></br>
            <li>
              <label>Father Name</label>
              <br></br>
              <input
                type="text"
                name="FatherName"
                value={details.FatherName}
                onChange={handleChange}
                placeholder="Enter your Fathername"
              ></input>
            </li>
            {errors.FatherName && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.FatherName}
              </p>
            )}
            <br></br>
            <li>
              <label>Mother Name </label>
              <br></br>
              <input
                type="text"
                name="MotherName"
                value={details.MotherName}
                onChange={handleChange}
                placeholder="Enter your Mothername"
              ></input>
            </li>
            {errors.MotherName && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.MotherName}
              </p>
            )}
            <br></br>
            <li>
              <label>Aadhaar No</label>
              <br></br>
              <input
                type="number"
                name="AadhaarNo"
                value={details.AadhaarNo}
                minlength="12"
                maxlength="12"
                onChange={handleChange}
              ></input>
            </li>
            {errors.AadhaarNo && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.AadhaarNo}
              </p>
            )}
            <br></br>
            <li>
              <label>Category</label>
              <br></br>
              <select name="Category" onChange={handleChange}>
                <option>select</option>
                <option>General</option>
                <option>OBC</option>
                <option>BC-A</option>
                <option>BC-B</option>
                <option>SC</option>
                <option>EWS</option>
              </select>
            </li>
            <br></br>
            <li>
              <label>Nationality</label>
              <br></br>
              <select name="Nationality" onChange={handleChange}>
                <option>Select</option>
                <option>Indian</option>
                <option>Other</option>
              </select>
            </li>
            <br></br>
            <li>
              <label>Blood Group</label>
              <br></br>
              <select name="BloodGroup" onChange={handleChange}>
                <option>select</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
                <option>O-</option>
              </select>
            </li>
            <br></br>
            <li>
              <label>Date Of Birth</label>
              <br></br>
              <input
                type="date"
                name="DateOfBirth"
                min="1989-01-01"
                value={details.DateOfBirth}
                onChange={handleChange}
              ></input>
            </li>
            {errors.DateOfBirth && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.DateOfBirth}
              </p>
            )}
            <br></br>
            <li>
              <label>Vaccinated</label>
              <br></br>
              <select name="Vaccinated" onChange={handleChange}>
                <option>select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </li>
            <br></br>
            <li>
              <label>Mobile No.</label>
              <br></br>
              <input
                type="number"
                name="MobileNo"
                value={details.MobileNo}
                placeholder="Enter your mobilenumber"
                onChange={handleChange}
              ></input>
            </li>
            {errors.MobileNo && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.MobileNo}
              </p>
            )}
            <br></br>
            <li>
              <label>Email</label>
              <br></br>
              <input
                type="email"
                name="Email"
                value={details.Email}
                placeholder="Enter your Email"
                onChange={handleChange}
              ></input>
            </li>
            {errors.Email && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.Email}</p>
            )}
            <br></br>
            <li>
              <label>Gender</label>
              <br></br>
              <select name="Gender" onChange={handleChange}>
                <option>select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </li>
            <br></br>
            <li>
              <label>Which className have you applied for?</label>
              <br></br>
              <input
                type="text"
                name="WhichclassNamehaveyouappliedfor"
                onChange={handleChange}
                value={details.WhichclassNamehaveyouappliedfor}
              ></input>
              <p>Example=11th</p>
            </li>
            {errors.WhichclassNamehaveyouappliedfor && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.WhichclassNamehaveyouappliedfor}
              </p>
            )}
            <br></br>
            <li>
              <label>Course</label>
              <br></br>
              <select name="Course" onChange={handleChange}>
                <option>select</option>
                <option>Arts</option>
                <option>Non-Medical</option>
                <option>Medical</option>
              </select>
            </li>
            <br></br>
            <li>
              <label>Where you live ?</label>
              <br></br>
              <input
                type="text"
                name="Whereyoulive"
                onChange={handleChange}
                value={details.Whereyoulive}
              ></input>
            </li>
            {errors.Whereyoulive && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.Whereyoulive}
              </p>
            )}
            <br></br>
            <li>
              <label>Distt. Name</label>
              <br></br>
              <input
                type="text"
                name="DisttName"
                onChange={handleChange}
                value={details.DisttName}
              ></input>
            </li>
            {errors.DisttName && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.DisttName}
              </p>
            )}
            <br></br>
            <li>
              <label>State Name</label>
              <br></br>
              <input
                type="text"
                name="StateName"
                onChange={handleChange}
                value={details.StateName}
              ></input>
            </li>
            {errors.StateName && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.StateName}
              </p>
            )}
            <br></br>
            <li>
              <label> Pin Code</label>
              <br></br>
              <input
                type="number"
                name="PinCode"
                maxlength="6"
                onChange={handleChange}
                value={details.PinCode}
              ></input>
            </li>
            {errors.PinCode && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.PinCode}</p>
            )}{" "}
            <br></br>
          </ol>
          <br></br>

          <button className="buton" type="submit">
            Sumbit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Admission;
