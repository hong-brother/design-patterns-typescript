import {Backend} from "./backend";

export class MobileBackend implements Backend {
    public getData() {
        return "MobileBackend: Data from the backend";
    }
}