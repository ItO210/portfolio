import DarkmodeButton from "./darkmodeButton";
import LanguageButton from "./LanguageButton";

export default function Header() {

    return(
        <div className="flex flex-row justify-end pt-5">
            <LanguageButton/>
            <DarkmodeButton/>
        </div>
        
    );
}