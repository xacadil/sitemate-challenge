import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IssueList = ({ fetchIssues }) => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetchIssues();
    }, [fetchIssues]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/issues/${id}`);
        fetchIssues(); // Fetch issues after deletion
    };

    return (
        <ul>
            {issues.map(issue => (
                <li key={issue.id}>
                    <h3>{issue.title}</h3>
                    <p>{issue.description}</p>
                    <button onClick={() => handleDelete(issue.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default IssueList;
