import { useTranslation } from "react-i18next";
import DarkmodeButton from "./darkmodeButton";
import LanguageButton from "./LanguageButton";

export default function Header() {
    
    const [t, i18n] = useTranslation("global");

    function getBrowserLocales(options = {}) {
        const defaultOptions = {
          languageCodeOnly: false,
        };
        const opt = {
          ...defaultOptions,
          ...options,
        };
        const browserLocales =
          navigator.languages === undefined
            ? [navigator.language]
            : navigator.languages;
        if (!browserLocales) {
          return undefined;
        }
        return browserLocales.map(locale => {
          const trimmedLocale = locale.trim();
          return opt.languageCodeOnly
            ? trimmedLocale.split(/-|_/)[0]
            : trimmedLocale;
        });
      }

    return(
        <div>
            {console.log(getBrowserLocales({languageCodeOnly: true}))}
            <LanguageButton/>
            <h1>{t("header.hello-world")}</h1>
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <DarkmodeButton/>
        </div>
        
    );
}