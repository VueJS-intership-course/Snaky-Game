import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import constants from "./constants";

const app = createApp(App);
app.config.globalProperties.$constants = constants;

app.use(router);
app.mount("#app");
