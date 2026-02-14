import { createContext, useContext, useEffect, useState } from "react";

const SchemeContext = createContext();

export const SchemeProvider = ({ children }) => {
    const systemScheme = window.matchMedia("(prefers-color-scheme: dark")
        ? "dark"
        : "light";

    const [scheme, setScheme] = useState(
        localStorage.getItem("ncqx-scheme") || systemScheme,
    );

    useEffect(() => {
        const currentTheme = scheme === "system" ? systemScheme : scheme;
        setScheme(currentTheme);
        localStorage.setItem("ncqx-scheme", scheme);
        document.documentElement.setAttribute("data-ncqx-scheme", scheme);
    }, [scheme, systemScheme]);

    return (
        <SchemeContext.Provider value={{ scheme, setScheme }}>
            {children}
        </SchemeContext.Provider>
    );
};

export const useScheme = () => useContext(SchemeContext);
