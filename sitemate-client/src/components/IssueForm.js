import React, { useState } from 'react';
import axios from 'axios';

const IssueForm = ({ fetchIssues }) => {
    const [issue, setIssue] = useState({ id: '', title: '', description: '' });

    const handleChange = (e) => {
        setIssue({ ...issue, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/issues', issue);
        fetchIssues(); // Fetch issues after creating a new one
        setIssue({ id: '', title: '', description: '' }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="id"
                placeholder="ID"
                value={issue.id}
                onChange={handleChange}
            />
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={issue.title}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={issue.description}
                onChange={handleChange}
            />
            <button type="submit">Create Issue</button>
        </form>
    );
};

export default IssueForm;
