import i18n from 'i18next'

i18n.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: require('../locales/en/translations.json'),
    },
    'id-ID': {
      translations: require('../locales/id-ID/translations.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  react: {
    wait: true,
  },
})

i18n.languages = ['en', 'id-ID']

export default i18n
