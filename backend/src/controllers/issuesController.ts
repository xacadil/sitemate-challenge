import { Request, Response } from 'express';
import { Container } from 'typedi';
import IssuesService from '../services/issuesService';
import { IssueDTO } from '../interfaces/IssueDTO';

export default class IssuesController {
    private issuesService: IssuesService;

    constructor() {
        this.issuesService = Container.get(IssuesService);
    }

    public async createIssue(req: Request, res: Response) {
        try {
            const issueDTO: IssueDTO = req.body;
            const issue = await this.issuesService.createIssue(issueDTO);
            res.status(201).json(issue);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getIssues(req: Request, res: Response) {
        try {
            const issues = await this.issuesService.getIssues();
            res.status(200).json(issues);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateIssue(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const issueDTO: Partial<IssueDTO> = req.body;
            const issue = await this.issuesService.updateIssue(id, issueDTO);
            res.status(200).json(issue);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteIssue(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await this.issuesService.deleteIssue(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
