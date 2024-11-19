import React, { useState } from "react";
import "../styles/homepage.scss";
import { validateUser } from "../utils/validators";
import { useUserStore } from "../store/user.store";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const { createUser } = useUserStore();
  const submitHandler = () => {
    const data = { name, email, dob };
    // console.log(data);
    const isValid = validateUser(data);
    if (isValid) {
      createUser(data);
    }
  };

  return (
    <section className="add-user">
      <div className="add-user-form">
        <h2>Add User</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the name"
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the email"
            name="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div
          className="button"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "rgb(81, 101, 255)",
            color: "white",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={submitHandler}
        >
          Submit
        </div>
      </div>
    </section>
  );
};

export default AddUser;
