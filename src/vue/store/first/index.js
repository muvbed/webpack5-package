import { createStore } from "vuex";

import module from "./module";

const store = createStore({
  modules: {
    module,
  },
});

export default store;
