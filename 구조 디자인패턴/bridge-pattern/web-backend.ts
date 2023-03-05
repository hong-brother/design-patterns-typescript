import {Backend} from "./backend";

export class WebBackend implements Backend {
    public getData() {
        return "WebBackend: Data from the backend";
    }
}