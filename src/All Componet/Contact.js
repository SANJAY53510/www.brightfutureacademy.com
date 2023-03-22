import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    NAME: "",
    PHONE: "",
    EMAIL: "",
    MESSAGE: "",
  });

  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(contact);
    setError(validation(contact));
    // validation(contact);
  };

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      contact.NAME!== "" &&
      contact.PHONE!== "" &&
      contact.EMAIL!== "" &&
      contact.MESSAGE!== ""
    ) {
      alert("Sumbit Successfully");
    }
  }, [errors]);

  const validation = (contact) => {
    let errors = {};
    // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!contact.NAME) {
      errors.NAME = "Name Is Required";
    } else if (contact.NAME.length < 3) {
      errors.NAME = " Name must be more than 3 characters";
    }

    if (!contact.PHONE) {
      errors.PHONE = "Phone Number Is Required";
    } else if (contact.PHONE.length < 10) {
      errors.PHONE = " Phone number must be 10 digit";
    }

    if (!contact.EMAIL) {
      errors.EMAIL = "Email Is Required";
    } else if (contact.EMAIL.length < 3) {
      errors.EMAIL = " This is not a valid email format!";
    }

    if (!contact.MESSAGE) {
      errors.MESSAGE = "Message Is Required";
    } else if (contact.MESSAGE.length < 10) {
      errors.MESSAGE = "Message must be more than 50 characters";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="cons">
        <div className="us">CONTACT US</div>

        <div className="nom">
          <label>
            <input
              className="nome"
              type="text"
              name="NAME"
              value={contact.NAME}
              onChange={handleChange}
              placeholder="Name"
            ></input>
          </label>
          <br></br>
          {errors.NAME && (
            <p style={{ color: "black", fontSize: "13px" }}>{errors.NAME}</p>
          )}
          <label>
            <input
              className="nome"
              type="number"
              name="PHONE"
              value={contact.PHONE}
              onChange={handleChange}
              placeholder="Phone"
            ></input>
          </label>
          <br></br>
          {errors.PHONE && (
            <p style={{ color: "black", fontSize: "13px" }}>{errors.PHONE}</p>
          )}
          <label>
            <input
              className="nome"
              type="email"
              name="EMAIL"
              value={contact.EMAIL}
              onChange={handleChange}
              placeholder="Email id "
            ></input>
          </label>
          <br></br>
          {errors.EMAIL && (
            <p style={{ color: "black", fontSize: "13px" }}>{errors.EMAIL}</p>
          )}
          <label>
            <input
              className="nome1"
              type="text"
              name="MESSAGE"
              value={contact.MESSAGE}
              onChange={handleChange}
              placeholder="Message"
            ></input>
          </label>
          <br></br>
          {errors.MESSAGE && (
            <p style={{ color: "black", fontSize: "13px" }}>{errors.MESSAGE}</p>
          )}{" "}
        </div>
        <button className="subButton" type="sumbit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
