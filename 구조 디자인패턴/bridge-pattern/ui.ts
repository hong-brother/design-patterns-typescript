import {Backend} from "./backend";

export abstract class UI {
    protected backend: Backend;

    constructor(backend: Backend) {
        this.backend = backend;
    }

    abstract render(): void;
}