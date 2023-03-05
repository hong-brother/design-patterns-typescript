import {Component} from "./component";

export class Client {
    public printPrice(component: Component) {
        console.log(component.getPrice());
    }
}