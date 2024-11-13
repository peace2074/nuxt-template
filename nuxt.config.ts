import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  debug: false,
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/scripts",
    'nuxt-og-image'
  ],
  // @ts-ignore
  tailwindcss: {
    cssPath: './assets/globals.css'
  },
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #f0f0f0'
      }
    }
  },
  vite: {
    build: {
      minify: false
    }
  },

  nitro: {
    minify: false,
    rollupConfig: {
      external: ['bcrypt', 'waelio-utils', 'jsonwebtoken'],
    },
  },
  imports: {
    autoImport: true,
    dirs: [
      './constants/',
      './layouts',
      './store',
      '../shared/',
      '../server/uils'
    ]
  },
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    'quasar/dist/quasar.prod.css',
    "./assets/styles/quasar.css"
  ],
  // @ts-ignore
  quasar: {
    // Configurable Component Defaults
    components: {
      defaults: {
        QBtn: {
          dense: true,
          flat: true,
        },
      }
    }
  },
  experimental: {
    sharedPrerenderData: true,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  runtimeConfig: {
    // Auth
    authSecret: process.env.AUTH_SECRET,
    authKey: process.env.AUTH_KEY,
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    // Cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    // EmailJS
    emailPrivateKey: process.env.EMAIL_PRIVATE_KEY,
    // Root User
    rootEmail: process.env.ROOT_USER,
    // Mongo DB
    mongoose: process.env.MONGODB_URI,
    mongo: process.env.MONGODB_URI,
    //Deno JS
    deno: process.env.DENO_ID,
    denoToken: process.env.DENO_TOKEN,
    public: {
      // EmailJS
      EMAIL_SERVICE: process.env.EMAIL_PUBLIC_KEY,
      EMAIL_TEMPLATE: process.env.EMAIL_TEMPLATE,
      EMAIL_USER: process.env.EMAIL_USER,
      // JSON place Holder
      apiBase: process.env.API_URL,
    }
  },
  compatibilityDate: '2024-10-03',
})