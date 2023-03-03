import {Duck} from "./duck";
import {Turkey} from "./turkey";

export class TurkeyAdapter implements Duck {
    private turkey: Turkey;
    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        this.turkey.fly();
    }

}