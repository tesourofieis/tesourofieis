import { createContext, useContext, useState } from "react";

const LanguageContext = createContext<{
  language: "latin" | "vernacular";
  toggleLanguage: () => void;
}>(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState<"latin" | "vernacular">(
    "vernacular",
  );

  const toggleLanguage = () => {
    setLanguage((prevMode) => {
      if (prevMode === "latin") return "vernacular";
      if (prevMode === "vernacular") return "latin";
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
