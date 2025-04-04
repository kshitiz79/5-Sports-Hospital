'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // Always use dark mode
  const [darkMode] = useState(true); // Always set dark mode to true

  // Set HTML class for global dark mode support
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      <div className="dark">{children}</div> {/* Force dark mode */}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
