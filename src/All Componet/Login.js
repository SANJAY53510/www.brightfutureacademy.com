import React, { useEffect, useState } from "react";

import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    UserId: "",
    Password: "",
  });
  const [errors, setError] = useState({});
//   const [isSumbit, SetIsSumbit] = useState(false);

 function handleChange(e){
    ///const {name, value}=e.target;
    // setvalues((prev) =>{
    // return{...prev, [name]: value};
    // })};
    setValues({ ...values, [e.target.name]: e.target.value });
  };

 function handlesumbit(e){
    e.preventDefault();
    console.log(values);
    setError(validation(values));
    //   SetIsSumbit(true);
    validation(values);
  };

  const validation = (values) => {
    let errors = {};

    if (!values.UserId) {
      errors.UserId = "UserId is required!";
    } else if (values.UserId.length < 2) {
      errors.UserId = " UserId must be more than 2 characters";
    }

    if (!values.Password) {
      errors.Password = "Password is required!";
    } else if (values.Password.length < 4) {
      errors.Password = " Password must be more than 4 characters";
    }
    return errors;
  };

  useEffect(() => {
    console.log(errors);
    if (
      Object.keys(errors).length === 0 &&
      (values.UserId !== "" &&
      values.Password !== "")
    ) { alert("Login is successfully" )}
  },[errors])



  return (
    <form onSubmit={handlesumbit}>

{/* {Object.keys(valuesErrors).length === 0  && isSumbit ? 
 (<div className = "ui message succes"> Login is successfully</div>)} */}
<div className="use">
        <div className="user">
          <div className="wel">Welcome to Login</div>
          <label> User Id : </label>
          <input
            className="user1"
            type="text"
            name="UserId"
            onChange={handleChange}
            placeholder="user id"
          ></input>
          <br></br>
          {errors.UserId && (<p style={{ color: "gold", fontSize: "13px" }}>{errors.UserId}</p>
          )}
          <label>Password:</label>
          <input
            className="user2"
            type="password"
            name="Password"
            onChange={handleChange}
            placeholder="password"
          ></input>
          <br></br>
          {errors.Password && (
            <p style={{ color: "gold", fontSize: "13px", }}>{errors.Password}</p>
          )}
          <input className="chek" type="checkbox"></input>
          Remember Me <br></br>
          <button className="bit" type="Login">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;

// {Object.keys(valuesErrors).length === 0  && isSumbit ? (<div className = "ui message succes"> Login is successfully</div>
// )}

//    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
