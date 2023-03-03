export class DetailPlan {
    private day: number;
    private plan: string;

    constructor(day: number, plan: string) {
        this.day = day;
        this.plan = plan;
    }

    public getDay(): number {
        return this.day;
    }

    public setDay(day: number): void {
        this.day = day;
    }

    public getPlan(): string {
        return this.plan;
    }

    public setPlan(plan: string): void {
        this.plan = plan;
    }
}