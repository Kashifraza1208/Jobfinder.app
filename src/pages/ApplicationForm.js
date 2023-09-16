import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setApplicationData } from "../components/redux/jobAction";
import "./ApplicationForm.css";
// Make sure to import your action creator

const ApplicationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });

  const { name, email, coverLetter, resume } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch an action to submit the job application
    dispatch(setApplicationData(formData));

    // Redirect to the success page
    navigate("/application-success");
  };

  return (
    <div className="application-form">
      <h2>Job Application</h2>
      <form onSubmit={handleSubmit} className="applicationForm">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Cover Letter:</label>
          <textarea
            name="coverLetter"
            value={coverLetter}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <div className="form-group">
          <label>Resume (PDF or Word):</label>
          <input
            type="file"
            name="resume"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
