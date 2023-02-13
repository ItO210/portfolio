import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";

function LanguageButton(){
    const [lang, setLang] = useState(null);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        if (getLanguage === "es") {
            setLang("es");
        } else if (getLanguage === "en") {
            setLang("en");
        } else {
            setLang("en");
        }
    }, []);

    const handleLangSwitch = () => {
        setLang(lang === "en" ? "es" : "en");
    };

    useEffect(() => {
        if (lang === "en") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("es");
        }
    }, [lang]);

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
    
    function getLanguage(){

    var array = getBrowserLocales({languageCodeOnly: true});

    var found = array.find(function (element) {
        return element === "es" || "en";
    })
    return(
        console.log(found)
    )
    }

    const globe = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
    );

    return(
        <button 
        type="button"
        className="bg-violet-400 dark:bg-orange-400 text-lg rounded-md text-white mx-2"
        onClick={handleLangSwitch}>
            {globe}
        </button>
    )
}

export default LanguageButton;