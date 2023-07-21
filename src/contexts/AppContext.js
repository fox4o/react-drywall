import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { number_materials } from "./DrywallContext";

const Drywall = createContext();

const AppContext = ({ children }) => {
  const dwSettings = {
    // настройки на изчисленията
    percent:10, // + разход

    // материали
    mpcw: 3,
    mpuw: 3,
    mpud: 3,
    mpcd: 3,
    ul: 30,
    pd: 50,
    md: 100,
    aocd: 1,
    tu: 1,
    tk: 1,
    do: 1,
    vl: 1,
    scd: 1,
    kv: 1,
    gbk: 5,
    lgk: 5,
    gk: 1,
    gki: 1,
    rv25: 1000,
    rv35: 1000,
    sp: 6,
    fp: 5,
    sfl: 25,
  };
  const [settings, setSettings] = useLocalStorage("dwSettings", dwSettings);

  function calc_dw_materials(mq, system) {
    let materials = [];
    for (let key in system) {
      if (parseFloat(system[key]) > 0) {
        materials[key] = Math.round(mq * system[key] * 100) / 100; // js math bug fix
        // ако е бройка - трябва да се закръгли
        if (number_materials.includes(key))
          materials[key] = Math.round(materials[key]);
      }
    }
    return materials;
  }

  return (
    <Drywall.Provider value={{ settings, setSettings, calc_dw_materials }}>
      {children}
    </Drywall.Provider>
  );
};

export default AppContext;

export const useDrywall = () => {
  return useContext(Drywall);
};
