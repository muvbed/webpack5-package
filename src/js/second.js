import "@/js/modules/module";
import "@/assets/scss/second.scss";

import { createApp } from "vue";

import Second from "@/vue/pages/second/index.vue";

const SecondApp = createApp(Second);

SecondApp.mount("#second-app");
