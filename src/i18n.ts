import { createI18n } from 'vue-i18n';
import es from '@/locales/es.json'
import en from '@/locales/en.json'

const messages = {
    es,
    en
};

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'es',
    messages,
});

export default i18n;