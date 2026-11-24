import React from "react";

function Step3({ data, setData, next, previous }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!data.username.trim() || !data.password || !data.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (data.username.trim().length < 3) {
      alert("Username must contain at least 3 characters");
      return;
    }

    if (data.password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    next();
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Account Details</h2>
      <p>Create your account credentials.</p>

      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Choose a username"
        value={data.username}
        onChange={handleChange}
        required
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Minimum 8 characters"
        value={data.password}
        onChange={handleChange}
        required
      />

      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Re-enter your password"
        value={data.confirmPassword}
        onChange={handleChange}
        required
      />

      <div className="button-group">
        <button type="button" className="secondary" onClick={previous}>
          ← Previous
        </button>
        <button type="submit">Review Details →</button>
      </div>
    </form>
  );
}

export default Step3;