
import {TourBuilder} from "./TourBuilder";
import {DetailPlan} from "./DetailPlan";
import {Tour} from "./Tour";
export class DefaultTourBuilder implements TourBuilder{
    private title: string;
    private nights: number;
    private days: number;
    private startDate: Date;
    private whereToStay: string;
    private plans: Array<DetailPlan>

    addPlan(day: number, plan: string): TourBuilder {
        if (this.plans === undefined || this.plans === null) {
            this.plans = new Array<DetailPlan>();
        }
        this.plans.push(new DetailPlan(day,plan));
        return this;
    }

    setTitle(title: string): TourBuilder {
        this.title = title;
        return this;
    }

    nightsAndDays(nights: number, days: number): TourBuilder {
        this.nights = nights;
        this.days = days;
        return this;
    }

    setStartDate(date: Date): TourBuilder {
        this.startDate = date;
        return this;
    }

    setWhereToStay(whereToStay: string): TourBuilder {
        this.whereToStay = whereToStay;
        return this;
    }

    build(): Tour {
        return new Tour(this.title, this.nights, this.days, this.startDate, this.whereToStay, this.plans);
    }

}