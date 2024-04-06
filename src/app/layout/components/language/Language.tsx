import { useTranslation } from "react-i18next";

export default function Language() {
    const [, i18n] = useTranslation();
    return <div className="relative group">
        <div className="w-auto h-8 p-1 bg-background rounded">
            {i18n.language === 'en' ? <img className="w-auto h-full rounded" src="src/assets/images/flags/us.svg" /> : <img className="w-auto h-full rounded" src="src/assets/images/flags/vn.svg" />}
        </div>
        <div className="absolute top-full right-0 hidden group-hover:flex w-40 flex-col  bg-background shadow-xl rounded-md py-2">
            <button className="h-10 hover:bg-hover flex  items-center px-2" onClick={() => i18n.changeLanguage('vi')}>
                <img className="h-6 w-auto rounded" src="src/assets/images/flags/vn.svg" />
                <span className="ml-2 text-foreground">Vietnamese</span>
            </button>
            <button className="h-10 hover:bg-hover  flex items-center px-2" onClick={() => i18n.changeLanguage('en')}>
                <img className="h-6 w-auto rounded" src="src/assets/images/flags/us.svg" />
                <span className="ml-2 text-foreground">English</span>
            </button>
        </div>
    </div>
}