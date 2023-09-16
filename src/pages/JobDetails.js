import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./JobDetails.css"; // Import the CSS file

const JobDetails = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const apiKey = "fd350e58e516c45273e7422fbaba87be";
        const searchParams = {
          app_id: "aa15a99c",
          app_key: apiKey,
          "content-type": "application/json",
        };
        const response = await axios.get(
          "https://api.adzuna.com/v1/api/jobs/us/search",
          {
            params: searchParams,
          }
        );
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleApply = () => {
    navigate("/apply");
  };

  console.log(jobDetails);

  return (
    <div className="job">
      {jobDetails ? (
        <div className="job-details">
          <h2 className="heading">Job Details</h2>
          <p>Company Name : {jobDetails.results[1].company.display_name}</p>
          <p>Location: {jobDetails.results[0].location?.display_name}</p>
          <p>Type: {jobDetails.results[1].contract_time}</p>
          <p>
            Salary: ${jobDetails.results[0].salary_min} - $
            {jobDetails.results[0].salary_max}
          </p>
          <button onClick={handleApply} className="applyButton">
            Apply
          </button>
        </div>
      ) : (
        <p className="loading">Loading job details...</p>
      )}
    </div>
  );
};

export default JobDetails;
