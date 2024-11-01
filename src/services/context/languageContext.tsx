import React, { createContext, useState, useMemo } from "react";

interface LanguageContextInterface {
  language: "fr" | "en";
  setLanguage: (language: "fr" | "en") => void;
}

const LanguageContext = createContext<LanguageContextInterface | null>(null);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  const props = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={props}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
