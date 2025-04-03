import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'normal' | 'dark' | 'night';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDarkMode: boolean;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
    theme: 'normal',
    setTheme: () => { },
    isDarkMode: false
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('normal');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Function to determine theme based on time
        const getThemeByTime = (): Theme => {
            const hour = new Date().getHours();
            if (hour >= 6 && hour < 18) return 'normal';
            if (hour >= 18 && hour < 22) return 'dark';
            return 'night';
        };

        // Set initial theme based on time
        setTheme(getThemeByTime());

        // Update theme every hour
        const interval = setInterval(() => {
            setTheme(getThemeByTime());
        }, 3600000); // 1 hour in milliseconds

        return () => clearInterval(interval);
    }, []);

    // Apply theme to document
    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme, mounted]);

    const isDarkMode = theme === 'dark' || theme === 'night';

    const value = {
        theme,
        setTheme,
        isDarkMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 