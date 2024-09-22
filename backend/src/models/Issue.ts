import { Service } from 'typedi';

@Service()
export class Issue {
    constructor(public title: string, public description: string) { }
}
