import {DefaultTourBuilder} from "./default-tour-builder";
import {Tour} from "./tour";

export interface TourBuilder {
    nightsAndDays(nights: number, days: number): TourBuilder;

    setTitle(title: string): TourBuilder;

    setStartDate(date: Date): TourBuilder;

    setWhereToStay(whereToStay: string): TourBuilder;

    addPlan(day: number, plan: string): TourBuilder;

    build(): Tour;

}