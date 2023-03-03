import {rename} from "fs";

export class GithubRepository {
    private _user: string;
    private _name: string;

    get user(): string {
        return this._user;
    }

    set user(value: string) {
        this._user = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}