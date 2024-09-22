import { Service } from 'typedi';
import { Issue, createIssue, getIssues, getIssueById, updateIssue, deleteIssue } from '../models/Issue';
import { IssueDTO } from '../interfaces/IssueDTO';

@Service()
export default class IssuesService {
    public async createIssue(issueDTO: IssueDTO): Promise<Issue> {
        return createIssue(issueDTO);
    }

    public async getIssues(): Promise<Issue[]> {
        return getIssues();
    }

    public async updateIssue(id: number, issueDTO: Partial<IssueDTO>): Promise<Issue | null> {
        return updateIssue(id, issueDTO);
    }

    public async getIssueById(id: number): Promise<Issue | undefined> {
        return getIssueById(id);
    }

    public async deleteIssue(id: number): Promise<boolean> {
        return deleteIssue(id);
    }
}
