import { useTranslation } from "react-i18next";

export default function Language() {
    const [, i18n] = useTranslation();
    return <div>
        <button onClick={() => i18n.changeLanguage('vi')}>VI</button>
        &nbsp;
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
}