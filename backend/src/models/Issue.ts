export interface Issue {
    id: number;
    title: string;
    description: string;
    status: 'open' | 'closed';
}

let currentId = 1; // Simulate auto-incrementing ID
const issues: Issue[] = [];

export const createIssue = (issue: Omit<Issue, 'id'>): Issue => {
    const newIssue = { id: currentId++, ...issue };
    issues.push(newIssue);
    return newIssue;
};

export const getIssues = (): Issue[] => {
    return issues;
};

export const getIssueById = (id: number): Issue | undefined => {
    return issues.find(issue => issue.id === id);
};

export const updateIssue = (id: number, updatedIssue: Partial<Issue>): Issue | null => {
    const issueIndex = issues.findIndex(issue => issue.id === id);
    if (issueIndex > -1) {
        const existingIssue = issues[issueIndex];
        const newIssue = { ...existingIssue, ...updatedIssue };
        issues[issueIndex] = newIssue;
        return newIssue;
    }
    return null;
};

export const deleteIssue = (id: number): boolean => {
    const issueIndex = issues.findIndex(issue => issue.id === id);
    if (issueIndex > -1) {
        issues.splice(issueIndex, 1);
        return true;
    }
    return false;
};
