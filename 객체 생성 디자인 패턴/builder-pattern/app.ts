import {DefaultTourBuilder} from "./default-tour-builder";
import {TourDirector} from "./tour-director";

console.log('builder test');
const tourPlan1 = new TourDirector(new DefaultTourBuilder());
const tourPlan2 = new TourDirector(new DefaultTourBuilder());
console.log(tourPlan1.cancunTrip());
console.log(tourPlan2.longBeachTrip());