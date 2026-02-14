import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("ncqx-theme") || "purple",
    );

    useEffect(() => {
        setTheme(theme);
        localStorage.setItem("ncqx-theme", theme);
        document.documentElement.setAttribute("data-ncqx-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
