import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import {} from "./utils/import";
import { projectAuth } from "@/configs/firebase";
import { registerGlobalComponents } from "./utils/import";
let app;


//avoid create init app multiple times
//call function each time user change (login)
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerGlobalComponents(app);
    app.use(router);
    app.mount("#app");
  }
});
