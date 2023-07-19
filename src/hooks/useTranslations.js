import { useState, useEffect } from "react";

function useTranslation() {
  const [translations, setTranslations] = useState();
  const locale = "bg";

  useEffect(() => {
    (async function loadLangTranslations() {
      setTranslations((await import(`../locales/${locale}.json`)).default);
    })();
  }, [locale]);

  const __trans = (key) => {
    return translations?.[key] || key;
  };

  return [__trans];
}

export default useTranslation;
