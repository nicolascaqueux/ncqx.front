import { createContext, useContext, useState } from "react";
import en from "../locales/en";
import fr from "../locales/fr";

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
    const translations = { en, fr };

    const [lang, setLang] = useState("en");

    const t = (key) => translations[lang][key] || key;

    return (
        <I18nContext.Provider value={{ t, lang, setLang }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => useContext(I18nContext);
