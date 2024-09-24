import React from 'react';

const UDashboard = () => {
  const userName = "John Doe"; // Placeholder for dynamic data
  const surveysCompleted = 5;
  const recentSurvey = {
    title: "Personality Survey",
    date: "2024-09-05",
    result: "INTJ - Analyst"
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome, {userName}</h2>
        <p>Here's an overview of your activity.</p>
      </div>
      
      <div className="dashboard-content">
        {/* User info */}
        <div className="user-info">
          <h3>Profile</h3>
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Surveys Completed:</strong> {surveysCompleted}</p>
        </div>

        {/* Recent survey info */}
        <div className="recent-survey">
          <h3>Recent Survey</h3>
          <p><strong>Survey Title:</strong> {recentSurvey.title}</p>
          <p><strong>Date Taken:</strong> {recentSurvey.date}</p>
          <p><strong>Result:</strong> {recentSurvey.result}</p>
        </div>

        {/* Actions */}
        <div className="dashboard-actions">
          <h3>Quick Actions</h3>
        </div>
      </div>
    </div>
  );
};

export default UDashboard;