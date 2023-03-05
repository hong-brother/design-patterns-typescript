import {UI} from "./ui";

export class IPhoneUI extends UI  {
    public render() {
        const data = this.backend.getData();
        console.log("IPhoneUI: Rendering data from the backend ->", data);
    }
}