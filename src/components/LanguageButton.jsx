import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import {HiOutlineLanguage} from "react-icons/hi2";

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

    return(
        <button 
        type="button"
        onClick={handleLangSwitch}>
            <HiOutlineLanguage className="text-xl m-3"/>
        </button>
    )
}

export default LanguageButton;