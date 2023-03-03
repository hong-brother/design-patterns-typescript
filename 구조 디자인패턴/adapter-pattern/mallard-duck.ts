import {Duck} from "./duck";

export class MallardDuck implements Duck {
    fly(): void {
        console.log("꽥~");
    }

    quack(): void {
        console.log("날고 있어요~~");
    }

}