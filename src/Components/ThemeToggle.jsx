import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center mt-4">
            <label htmlFor="theme-toggle" className="theme-toggle">
                <input 
                    type="checkbox" 
                    id="theme-toggle"
                    className="sr-only peer"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span class="theme-slider"></span>
                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </span> */}
            </label>
        </div>
    );
};

export default ThemeToggle;


        
