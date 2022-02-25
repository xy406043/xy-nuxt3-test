import { defineNuxtConfig } from "nuxt3";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Website",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=0",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Website",
      },
      {
        hid: "description",
        name: "description",
        content: "Website",
      },
      isDev && {
        name: "referrer",
        content: "no-referrer",
      },
    ],
    script: [],
  },

  unocss: {
    uno: true,
    icons: false,
    attributify: false,

    shortcuts: [
      [
        /^pc-([a-z]+)-(\d+)$/,
        ([, w, d]) => `xl:${w}-[${d}px] lg:${w}-[${(1600 / 1920) * d}px]`,
      ],
      [/^ipad-([a-z]+)-(\d+)$/, ([, w, d]) => `md:${w}-[${d / 7.68}vw]`],
      [/^mobile-([a-z]+)-(\d+)$/, ([, w, d]) => `lt-md:${w}-[${d / 3.75}vw]`],
    ],
    rules: [],
    theme: {
      colors: {
        blue: {
          DEFAULT: "#099dfd",
        },
      },
      fontFamily: {
        // numbers: ["D DIN"],
        // numbersBold: ["D DIN Bold"],
      },
    },
  },

  css: ["@/assets/css/index.less"],

  buildModules: ["@unocss/nuxt"],
  // build: {
  //   transpile: ["ant-design-vue"],
  // },

  vite: {
    // build: {
    //   chunkSizeWarningLimit: 1500,
    // },
    // plugins: [
    //   Components({
    //     resolvers: [AntDesignVueResolver()],
    //   }),
    // ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ["moment", "compute-scroll-into-view", "ant-design-vue"],
    },
     resolve: {
        mainFields: ['module', 'jsnext:main', 'jsnext']
    }
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes("node_modules")) {
    //         return id
    //           .toString()
    //           .split("node_modules/")[1]
    //           .split("/")[0]
    //           .toString();
    //       }
    //     },
    //   },
    // },
  },
});
