import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);


const messages = {
    en: {

        hello: "hello"

    },
    pt: {

        hello: "Ola"

    }
};

const i18n = new VueI18n({
    locales: ['en', 'pt'],
    locale: "pt",
    fallbackLocale: "en",
    messages,
});

export default i18n;