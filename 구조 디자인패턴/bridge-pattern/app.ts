import {MobileBackend} from "./mobile-backend";
import {AndroidUI} from "./android-ui";
import {IPhoneUI} from "./i-phone-ui";
import {WebBackend} from "./web-backend";
import {WebUI} from "./web-ui";

console.log(`bridge-pattern`);
const mobileBackend = new MobileBackend();
const androidUI = new AndroidUI(mobileBackend);
androidUI.render();

// Output:
// AndroidUI: Rendering data from the backend -> MobileBackend: Data from the backend

const iphoneUI = new IPhoneUI(mobileBackend);
iphoneUI.render();

// Output:
// IPhoneUI: Rendering data from the backend -> MobileBackend: Data from the backend

const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
webUI.render();

// Output:
// WebUI: Rendering data from the backend -> WebBackend: Data from the backend

const androidBrowserUI = new AndroidUI(webBackend);
androidBrowserUI.render();

// Output:
// AndroidUI: Rendering data from the backend -> WebBackend: Data from the backend