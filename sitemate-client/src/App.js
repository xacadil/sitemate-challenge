import React, { useState } from 'react';
import IssueForm from './components/IssueForm';
import IssueList from './components/IssueList';
import axios from 'axios';

const App = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const response = await axios.get('http://localhost:3001/api/issues');
    setIssues(response.data);
  };

  return (
    <div>
      <h1>Issue Tracker</h1>
      <IssueForm fetchIssues={fetchIssues} />
      <IssueList issues={issues} fetchIssues={fetchIssues} />
    </div>
  );
};

export default App;
