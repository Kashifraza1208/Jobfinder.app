import React from "react";
import { useSelector } from "react-redux";
import "./SuccessPage.css";

const SuccessPage = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <div className="success-page">
      <div className="successbox">
        <h2 className="heading">Success Page</h2>
        <p className="gap">Name: {data?.name}</p>
        <p className="gap">Email: {data?.email}</p>
        <p className="gap">Cover Letter:</p>
        <p className="gap-cover">{data?.coverLetter}</p>
        <p className="gap">
          Resume: {data?.resume ? "Resume uploaded" : "No resume uploaded"}
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
