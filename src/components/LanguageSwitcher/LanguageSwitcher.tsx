import React, {ChangeEvent} from "react";
import "./LanguageSwitcher.scss";
import {stopEvent} from "../../common/utils";

export interface LanguageSwitcherProps {
    currentLanguage: string;
    languages: Array<string>;
    onLanguageSwitch: Function;
}

const LanguageSwitcher = (props: LanguageSwitcherProps) => {

    const onLanguageSwitchInner = (e: ChangeEvent, lang: string) => {
        stopEvent(e);
        props.onLanguageSwitch(lang);
    }

    return (
        <nav className="sds--language-switcher sds--text--body--small" aria-label="Language">
            <ul>
                {
                    props.languages.map((lang, index) => <li key={lang}>
                        <a href={`/${lang}`} hrefLang={lang}
                           className={lang === props.currentLanguage ? "is-active" : ""}
                           onClick={(e: any) => onLanguageSwitchInner(e, lang)}>
                            {lang.toUpperCase()}
                            <span className="sds--visually-hidden">{lang.toUpperCase()}</span>
                        </a>
                        {(index < props.languages.length - 1) && <span className="sds--language-sds--divider">|</span>}
                    </li>)
                }
            </ul>
        </nav>)
};

export default LanguageSwitcher;
