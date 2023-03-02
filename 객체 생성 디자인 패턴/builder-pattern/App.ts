import {DefaultTourBuilder} from "./DefaultTourBuilder";
import {TourDirector} from "./TourDirector";

console.log('builder test');
const plan = new DefaultTourBuilder()
    .nightsAndDays(2,3)
    .setStartDate(new Date())
    .setWhereToStay('리조트')
    .addPlan(0, '체크인')
    .addPlan(1, '휴식')
    .build();
console.log(plan);

const tourPlan1 = new TourDirector(new DefaultTourBuilder());
const tourPlan2 = new TourDirector(new DefaultTourBuilder());
console.log(tourPlan1.cancunTrip());
console.log(tourPlan2.longBeachTrip());