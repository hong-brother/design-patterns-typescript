import {Component} from "./component";

export class Item implements Component {
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    private name: string;

    private price: number;

    getPrice(): number {
        return this.price;
    }


}