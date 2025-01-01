import { createI18n } from 'vue-i18n';
import en from './localization/en.json';
import ar from './localization/ar.json';

const messages = {
  en: en,
  ar: ar
};

const i18n = createI18n({
  legacy: false, // استخدام الوضع غير التقليدي
  locale: 'en',  // اللغة الافتراضية
  messages,      // النصوص المترجمة
});

export default i18n;