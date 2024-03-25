import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Language from "../../components/language/Language";

export default function Classic() {
    const { t } = useTranslation();

    return <>
        <div className="sidebar"></div>
        <div className="main">
            <h1>{t('title')}</h1>
            <h5>{t('app.text', { framework: 'reactjs' })}</h5>
            <Language />
            <Outlet></Outlet>
        </div>
    </>
}