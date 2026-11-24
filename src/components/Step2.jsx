import React from "react";

function Step2({ data, setData, next, previous }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!data.dob || !data.gender || !data.country) {
      alert("Please fill in all fields");
      return;
    }

    next();
  };

  return (
    <form onSubmit={handleNext}>
      <h2>Additional Details</h2>
      <p>Tell us a little more about yourself.</p>

      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={data.dob}
        onChange={handleChange}
        required
      />

      <label>Gender</label>
      <select
        name="gender"
        value={data.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>

      <label>Country</label>
      <select
        name="country"
        value={data.country}
        onChange={handleChange}
        required
      >
        <option value="">Select country</option>
        <option value="Pakistan">Pakistan</option>
        <option value="India">India</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
      </select>

      <div className="button-group">
        <button type="button" className="secondary" onClick={previous}>
          ← Previous
        </button>
        <button type="submit">Next Step →</button>
      </div>
    </form>
  );
}

export default Step2;