import React from "react";
import { useTranslation } from "react-i18next";
import DarkmodeButton from "./DarkmodeButton";
import LanguageButton from "./LanguageButton";
import {BsGithub, BsLinkedin, BsStackOverflow} from "react-icons/bs";

function Intro() {
    const [t] = useTranslation("global");

    return (
        <div className="flex flex-col w-full h-screen">
            <div className="flex h-1/3 items-start justify-end px-6 pt-6">
                <LanguageButton/>
                <DarkmodeButton/>
            </div>
            <div className="flex w-full h-1/3 items-center justify-center flex-col text-center">
                <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Carlos Ito</h1>
                <p className="text-base md:text-xl mb-3 font-medium">{t("intro.description")}</p>
                <p className="text-sm max-w-xl mb-6 font-bold">{t("intro.bio")}</p>
            </div>
            <div className="h-1/3 flex items-center justify-between">
                <div className="h-full flex flex-col itmes-center justify-center px-10">
                    <a href="https://github.com/ItO210" target="_blank"><BsGithub className="text-xl my-3"/></a>
                    <a href="www.linkedin.com/in/carlositom" target="_blank"><BsLinkedin className="text-xl my-3"/></a>
                    <a href="https://stackoverflow.com/users/21152911/carlos-ito" target="_blank"><BsStackOverflow className="text-xl my-3"/></a>
                </div>
                <div className="flex transform rotate-90 justify-center items-center">
                        Scroll down ---{">"} 
                </div>
            </div>
        </div>
    )
}

export default Intro;