const express = require('express');
const issueRoutes = require('../routes/issueRoutes');

module.exports = (app) => {
    app.use(express.json());  // Parse JSON requests
    app.use('/api/issues', issueRoutes);  // Issue routes
};
