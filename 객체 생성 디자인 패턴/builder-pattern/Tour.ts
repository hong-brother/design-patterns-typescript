import {DetailPlan} from "./DetailPlan";

export class Tour {
    private title: string;
    private nights: number;
    private days: number;
    private startDate: Date;
    private whereToStay: string;
    private plans: Array<DetailPlan>

    constructor(title: string, nights: number, days: number, startDate: Date, whereToStay: string, plans: Array<DetailPlan>) {
        this.title = title;
        this.nights = nights;
        this.days = days;
        this.startDate = startDate;
        this.whereToStay = whereToStay;
        this.plans = plans;
    }
}