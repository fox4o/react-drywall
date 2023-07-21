import React from "react";
import { useDrywall } from "../contexts/AppContext";
import useTranslation from "../hooks/useTranslations";

const Settings = () => {
  const { settings, setSettings, calc_dw_materials } = useDrywall();
  const [__t] = useTranslation();

  const handleClick = () => {
    /*
    setSettings((prevSettings) => {
      return { ...prevSettings, pUD: 10 };
    });
    */
   localStorage.clear();
  };

  return (
    <div>
      <button onClick={handleClick}>Clear local storage</button>
      Settings page
      <form>form</form>
    </div>
  );
};

export default Settings;
