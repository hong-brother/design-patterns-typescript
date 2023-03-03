import {GithubRepository} from "./github-repository";
import {Prototype} from "./prototype";

export class GithubIssue implements Prototype{
    private _id: number;
    private _title: string;
    private _repository: GithubRepository

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get repository(): GithubRepository {
        return this._repository;
    }

    set repository(value: GithubRepository) {
        this._repository = value;
    }

    url(): string {
        return `https://github.com/${this.repository.user}/${this.repository.name}/${this.id}`;
    }

    clone(): this {
        // return Object.assign({}, this); // shallow copy
        console.log(Object.getOwnPropertyDescriptors(this));
       return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    }

}