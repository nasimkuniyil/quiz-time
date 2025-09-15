import React, { createContext, useContext, useEffect, useState } from 'react';

interface ITheme {
  isDark: boolean;
  toggleTheme: () => void;
}

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext<ITheme | undefined>(undefined);

export const useTheme = ():ITheme => {
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return context;
}

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  })

  const value: ITheme = {
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev)
  }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider