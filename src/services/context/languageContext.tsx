import React, { createContext, useState, useMemo, useEffect } from "react";

export interface LanguageContextInterface {
  language: "fr" | "en" | null;
  setLanguage: (language: "fr" | "en") => void;
}

const LanguageContext = createContext<LanguageContextInterface | null>(null);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"fr" | "en" | null>(null);

  const props = useMemo(() => ({ language, setLanguage }), [language]);

  useEffect(() => {
    const userLang = localStorage.getItem("lang_Ross0WebSite") as
      | "fr"
      | "en"
      | null;
    if (userLang && (userLang === "fr" || userLang === "en")) {
      setLanguage(userLang);
    } else {
      setLanguage("fr");
    }
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem("lang_Ross0WebSite", language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={props}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
