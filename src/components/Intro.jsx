import React from "react";
import { useTranslation } from "react-i18next";
import DarkmodeButton from "./DarkmodeButton";
import LanguageButton from "./LanguageButton";

function Intro() {
    const [t] = useTranslation("global");

    return (
        <div className="flex flex-col w-full h-screen">
            <div className="flex h-1/3 items-start justify-end px-6 pt-6">
                <LanguageButton/>
                <DarkmodeButton/>
            </div>
            <div className="flex w-full h-1/3 items-center justify-center flex-col text-center">
                <h1 className="text-4xl md:text-7x1 dark:text-white mb-1 md:mb-3 font-bold">Carlos Ito</h1>
                <p className="text-base md:text-xl mb-3 font-medium">{t("intro.description")}</p>
                <p className="text-sm max-w-xl mb-6 font-bold">{t("intro.bio")}</p>
            </div>
            <div className="h-1/3 flex items-center justify-between">
                <div className="flex flex-col itmes-center justify-center px-10">
                    <a href="">github</a>
                    <a href="">linkedin</a>
                    <a href="">mail</a>
                </div>
                <div className="flex transform rotate-90 justify-center items-center">
                        Scroll down ---{">"} 
                </div>
            </div>
        </div>
    )
}

export default Intro;