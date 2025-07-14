import React, { createContext, useEffect, useContext } from "react";
import { defaultTheme } from "../theme";

type Theme = typeof defaultTheme;

const ThemeContext = createContext<Theme | undefined>(undefined);

export const UIProvider = (props: {children: React.ReactNode; theme?: Theme}) => {
    const { children, theme = defaultTheme } = props;

    useEffect(() => {
        const root = document.documentElement;
        Object.entries(theme).forEach(([groupKey, groupValue]) => {
            if (typeof groupValue === 'object') {
                Object.entries(groupValue).forEach(([key, value]) => {
                    root.style.setProperty(`--${groupKey}-${key}`, value as string);
                });
            } else {
                root.style.setProperty(`--${groupKey}`, groupValue as string);
            }
        });
    },[theme]);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}


export const useUITheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        if (process.env.NODE_ENV === 'development') {
            console.error(
                `[UI Kit Error] useUITheme() must be used within a <UIProvider>. Please wrap your app with <UIProvider> from '@richardnjoku/ui-kit'.`
            );
        }
        // Return default theme in prod or fallback gracefully
        return defaultTheme;
    }

    return context;
};