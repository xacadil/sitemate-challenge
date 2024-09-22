import { Router } from 'express';
import { IssueController } from '../controllers/issuesController';
import { Container } from 'typedi';

const router = Router();
const issueController = Container.get(IssueController);

router.post('/issues', (req, res) => {
    const newIssue = issueController.createIssue(req.body);
    res.status(201).json(newIssue);
});

router.get('/issues', (req, res) => {
    const issues = issueController.getIssues();
    res.json(issues);
});

export default router;
