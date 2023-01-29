import React from "react";
import { useTranslation } from "react-i18next";
import handleThemeSwitch, {sun, moon} from "../darkmode"

export default function Header() {
    
    const [t, i18n] = useTranslation("global");

    return(
        <div>
            <h1>{t("header.hello-world")}</h1>
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button 
            type="button"
            onClick={handleThemeSwitch}
            className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md">
                {theme === "dark" ? sun : moon}
            </button>
        </div>
        
    );
}