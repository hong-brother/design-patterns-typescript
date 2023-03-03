import {TourBuilder} from "./tour-builder";
import {Tour} from "./tour";

export class TourDirector {
    private tourBuilder: TourBuilder;

    constructor(builder : TourBuilder) {
        this.tourBuilder = builder;
    }

    public cancunTrip(): Tour {
        return this.tourBuilder.setTitle('칸쿤 여행')
            .nightsAndDays(2,3)
            .setStartDate(new Date())
            .setWhereToStay("리조트")
            .addPlan(0, "체크인")
            .addPlan(0, "호텔 저녁")
            .build()

    }

    public longBeachTrip(): Tour {
        return this.tourBuilder.setTitle('롱비치 여행')
            .nightsAndDays(2,3)
            .setStartDate(new Date())
            .setWhereToStay("리조트")
            .addPlan(0, "체크인")
            .addPlan(0, "호텔 저녁")
            .build()

    }
}