import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const themes = [
        { id: 'normal', label: 'Normal Mode', icon: '☀️' },
        { id: 'dark', label: 'Dark Mode', icon: '🌙' },
        { id: 'night', label: 'Night Mode', icon: '🌑' },
    ];

    return (
        <div className="fixed top-4 right-4 z-[9999] pointer-events-auto">
            <div className="relative group">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full bg-red-500 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-600 flex items-center justify-center"
                    aria-label="Theme Toggle"
                    aria-expanded="false"
                    aria-controls="theme-menu"
                >
                    <span className="text-2xl">{themes.find(t => t.id === theme)?.icon}</span>
                </motion.button>

                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block z-[10000]">
                    <div className="py-1" role="none">
                        {themes.map((t) => (
                            <motion.button
                                key={t.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setTheme(t.id as 'normal' | 'dark' | 'night')}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 ${theme === t.id
                                    ? 'bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-800'
                                    }`}
                                role="menuitem"
                                aria-current={theme === t.id ? 'true' : 'false'}
                            >
                                <span className="text-lg">{t.icon}</span>
                                <span>{t.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle; 