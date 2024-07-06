// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/style.css", "~/assets/css/main.css"],
  modules: ["nuxt-graphql-client", "nuxt-icon", "@pinia/nuxt"],
  // plugins: ["~/plugins/alpine"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: " Nuxt mock shop",

      meta: [
        { name: "Nuxt mock shop", content: "minimal shopify nuxt3 starter" },
      ],

      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300..700&family=Voltaire&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: process.env.SHOPIFY_STORE_DOMAIN,
            token: {
              name: "X-Shopify-Storefront-Access-Token",
              value: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
              type: null,
            },
            retainToken: true,
          },
        },
      },
    },
  },
});
