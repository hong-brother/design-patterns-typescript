import {DefaultTourBuilder} from "./DefaultTourBuilder";
import {Tour} from "./Tour";

export interface TourBuilder {
    nightsAndDays(nights: number, days: number): TourBuilder;

    setTitle(title: string): TourBuilder;

    setStartDate(date: Date): TourBuilder;

    setWhereToStay(whereToStay: string): TourBuilder;

    addPlan(day: number, plan: string): TourBuilder;

    build(): Tour;

}