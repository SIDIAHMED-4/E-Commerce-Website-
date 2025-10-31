import { createContext, useState, useContext } from "react";
import i18n from "../Common/components/LangConfig";



const LangContext = createContext();

export const useLang = () => {
  return useContext(LangContext);
};


export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (selectedLang) => {
    i18n.changeLanguage(selectedLang).then(() => {
    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);

    });
  };

  return (
    <LangContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
