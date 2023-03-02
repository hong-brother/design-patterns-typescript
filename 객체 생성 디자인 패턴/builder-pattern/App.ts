import {DefaultTourBuilder} from "./DefaultTourBuilder";
import {TourDirector} from "./TourDirector";

console.log('builder test');
const tourPlan1 = new TourDirector(new DefaultTourBuilder());
const tourPlan2 = new TourDirector(new DefaultTourBuilder());
console.log(tourPlan1.cancunTrip());
console.log(tourPlan2.longBeachTrip());