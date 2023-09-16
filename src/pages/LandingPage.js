import React, { useState } from "react";
import "./LandingPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../components/redux/jobAction";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("");
  const { jobs, loading } = useSelector((state) => state.job);

  const handleInputChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchJobs(language));
  };

  return (
    <div className="landing-page">
      <h1>Find a Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a programming language"
          value={language}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p className="loadingjob">Loading list of jobs...</p>
      ) : (
        <div className="job-listings">
          <h2 className="heading_job">List Of Jobs</h2>
          <ul>
            {jobs.results?.map((job) => (
              <ol key={job.id} className="list">
                <Link to={`/job/${job.id}`}>{job.title}</Link>
              </ol>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
