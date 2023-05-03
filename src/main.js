import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import axios from "axios";

const app = createApp(App);
app.use(ElementPlus);
app.config.globalProperties.$http = axios; // предоставляет доступ к Axios во всех компонентах приложения.
app.mount("#app");
