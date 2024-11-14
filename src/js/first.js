import "@/assets/scss/first.scss";

import { createApp } from "vue";

import First from "@/vue/pages/first/index.vue";

import router from "@/vue/router/first";
import store from "@/vue/store/first";

const FirstApp = createApp(First);

FirstApp.use(router);
FirstApp.use(store);

FirstApp.mount("#first-app");
