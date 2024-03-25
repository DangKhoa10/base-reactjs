import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.scss'
import './styles/tailwind.scss'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

import EN from "./assets/locales/en.json";
import VI from "./assets/locales/vi.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping,
  lng: 'vi',
  resources: {
    en: {
      translation: EN
    },
    vi: {
      translation: VI
    }
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
