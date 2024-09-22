import { Service } from 'typedi';
import { Issue } from '../models/Issue';
import { IssueDTO } from '../interfaces/IssueDTO';

@Service()
export class IssueController {
    private issues: Issue[] = [];

    public createIssue(issueDTO: IssueDTO): Issue {
        const newIssue = new Issue(issueDTO.title, issueDTO.description);
        this.issues.push(newIssue);
        return newIssue;
    }

    public getIssues(): Issue[] {
        return this.issues;
    }
}
