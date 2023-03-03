import {MallardDuck} from "./mallard-duck";
import {WildTurkey} from "./wild-turkey";
import {TurkeyAdapter} from "./turkey-adapter";
import {Duck} from "./duck";

console.log('adapter-test');
const duck = new MallardDuck();

const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

console.log('칠면조가 말하길~~');
turkey.gobble();
turkey.fly();


console.log('오리가 말하길~~~');
testDuck(duck);

console.log('칠면조 어댑터가 말하길~');
testDuck(turkeyAdapter);
function testDuck(duck: Duck) {
    duck.quack();
    duck.fly();
}
