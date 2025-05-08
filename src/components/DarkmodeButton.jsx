import React, {useEffect, useState} from "react";
import {BsSunFill, BsMoonFill} from "react-icons/bs";

function DarkmodeButton(){
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return(
        <button 
        type="button"
        onClick={handleThemeSwitch}>
            {theme === "dark" ? <BsSunFill className="text-xl m-3"/> : <BsMoonFill className="text-xl m-3"/>}
        </button>
    )
}

export default DarkmodeButton;