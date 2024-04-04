import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.scss'
import './styles/tailwind.scss'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import EN from "./assets/locales/en.json";
import VI from "./assets/locales/vi.json";
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

i18next.init({
  interpolation: { escapeValue: false },
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
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
