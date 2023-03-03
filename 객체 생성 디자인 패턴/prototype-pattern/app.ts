import {GithubRepository} from "./github-repository";
import {GithubIssue} from "./github-issue";

console.log('prototype test');

const repository = new GithubRepository();
repository.name = 'hsnam';
repository.user = 'hong-borther';

const issue = new GithubIssue();
issue.repository = repository;
issue.id = 1;
issue.title = 'prototype';
console.log(issue.url());

const issue2 = issue.clone();

console.log(issue !== issue2);
console.log(issue.repository !== issue2.repository);
console.log(issue2.repository);
console.log(issue.repository);