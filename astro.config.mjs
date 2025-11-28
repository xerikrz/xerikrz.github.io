// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://xerikrz.github.io",
    base: "",
    i18n: {
        locales: ["en", "es", "pt", "fr", "ru", "de"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true
        }
    }
});
