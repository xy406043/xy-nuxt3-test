import { defineNuxtPlugin } from "#app";
import Antd from "ant-design-vue/lib/index.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
});
