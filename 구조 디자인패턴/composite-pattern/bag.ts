import {Component} from "./component";

export class Bag implements Component {
    private components = new Array<Component>();

    public add(component: Component): void {
        this.components.push(component)
    }

    public getComponents(): Array<Component> {
        return this.components;
    }
    getPrice(): number {
        return this.components.reduce((a,b)=> a + b.getPrice(), 0);
    }
}