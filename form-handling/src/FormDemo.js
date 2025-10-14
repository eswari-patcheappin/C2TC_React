import React, { useState } from "react";
function FormDemo() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);
  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(true);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Form Submitted Successfully ✅</h3>
          <p><b>Username:</b> {formData.username}</p>
          <p><b>Email:</b> {formData.email}</p>
        </div>
      )}
    </div>
  );
}
export default FormDemo;
