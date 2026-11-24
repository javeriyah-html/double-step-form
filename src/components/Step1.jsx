import React from "react";

function Step1({ data, setData, next }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!data.name.trim()) {
      alert("Please enter your full name");
      return;
    }

    if (!data.email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!/^[0-9]{11}$/.test(data.phone)) {
      alert("Please enter an 11-digit phone number");
      return;
    }

    next();
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Personal Information</h2>
      <p>Please enter your basic details.</p>

      <label>Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={data.name}
        onChange={handleChange}
        required
      />

      <label>Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={data.email}
        onChange={handleChange}
        required
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="phone"
        placeholder="03XXXXXXXXX"
        value={data.phone}
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <button type="submit">Next Step →</button>
    </form>
  );
}

export default Step1;