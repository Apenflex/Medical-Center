// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            link: [],
            htmlAttrs: {
                lang: 'uk'
            },
            script: []
        }
    },
    css: ['@/assets/sass/app.scss'],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    modules: ['@pinia/nuxt', '@nuxt/icon', '@nuxt/image', '@pinia-plugin-persistedstate/nuxt', '@vueuse/nuxt'],
    $production: {},
    $development: {}
})
