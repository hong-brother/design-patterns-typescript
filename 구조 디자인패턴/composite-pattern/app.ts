import {Item} from "./item";
import {Bag} from "./bag";
import {Client} from "./client";

console.log('composite pattern');
const airPod = new Item("airPod", 100);
const watch = new Item("watch", 350);

const bag = new Bag();
bag.add(airPod);
bag.add(watch);

const client = new Client();
client.printPrice(airPod);
client.printPrice(watch);
client.printPrice(bag);


