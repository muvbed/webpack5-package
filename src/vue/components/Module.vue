<template>
  <p>{{ msg }}</p>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "module",
  data: () => ({
    msg: null,
  }),
  computed: {
    ...mapGetters({
      getMsg: "getMsg",
    }),
  },
  methods: {
    ...mapActions({
      setMsg: "setMsg",
    }),
  },
  created() {
    this.setMsg();
    this.msg = this.getMsg;
  },
};
</script>
