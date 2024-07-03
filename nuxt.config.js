export default {
  head: {
    title: "nuxt_myStory",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["./assets/scss/style.scss"],

  styleResources: {
    scss: ["./assets/scss/style.scss"],
  },
  plugins: [
    "@/plugins/vue-awesome-swiper.js",
    "@/plugins/lodash.js",
    "@/plugins/lottie.js",
    "@/plugins/globalComponent.js",
  ],

  components: true,

  buildModules: ["@nuxtjs/style-resources", "@nuxt/postcss8"],
  modules: [
    "nuxt-vuex-localstorage",
    "@nuxtjs/dayjs",
    "cookie-universal-nuxt",
    ["cookie-universal-nuxt", { alias: "cookiz", parseJSON: false  }],
  ],
  build: {
    extractCSS: false,
    postcss: {
      postcssOptions: {
        plugins: {},
        preset: {},
      },
    },
  },
  dayjs: {
    locales: ["ko"],
    defaultLocale: ["ko"],
    plugins: ["relativeTime"],
  },
};
