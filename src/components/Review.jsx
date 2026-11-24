import React from "react";

function Review({ data, previous, submit }) {
  return (
    <div>
      <h2>Review Your Information</h2>
      <p>Please check your details before submitting.</p>

      <div className="review-section">
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
      </div>

      <div className="review-section">
        <h3>Additional Details</h3>
        <p><strong>Date of Birth:</strong> {data.dob}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Country:</strong> {data.country}</p>
      </div>

      <div className="review-section">
        <h3>Account Details</h3>
        <p><strong>Username:</strong> {data.username}</p>
        <p><strong>Password:</strong> •••••••• (Hidden)</p>
      </div>

      <div className="button-group">
        <button type="button" className="secondary" onClick={previous}>
          ← Edit Details
        </button>
        <button type="button" onClick={submit}>
          Submit Form ✓
        </button>
      </div>
    </div>
  );
}

export default Review;