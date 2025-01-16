import React from "react";

const StatusCounts = ({ jobsList }) => {
  const rejectedCount = jobsList.filter((job) => job.app_status === "Rejected").length;
  const interviewedCount = jobsList.filter((job) => job.app_status === "Interviewed").length;
  const technicalCount = jobsList.filter((job) => job.app_status === "Technical").length;
  const offerCount = jobsList.filter((job) => job.app_status === "Offer").length;

  return (
    <div className="status-counts">
      <h1 className="statuses">Rejected: {rejectedCount}</h1>
      <h1 className="statuses">Interviewed: {interviewedCount}</h1>
      <h1 className="statuses">Technical: {technicalCount}</h1>
      <h1 className="statuses">Offer: {offerCount}</h1>
    </div>
  );
};

export default StatusCounts;
