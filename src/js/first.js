import "@/assets/scss/first.scss";

import { createApp } from "vue";

import First from "@/vue/pages/first/index.vue";
import Second from "@/vue/pages/second/index.vue";

import router from "@/vue/router/first";
import store from "@/vue/store/first";

const FirstApp = createApp(First);
const SecondApp = createApp(Second);

FirstApp.use(router);
FirstApp.use(store);

FirstApp.mount("#first-app");
SecondApp.mount("#second-app");
