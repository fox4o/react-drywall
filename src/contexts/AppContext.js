import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { number_materials } from "./DrywallContext";

const Drywall = createContext();

const AppContext = ({ children }) => {
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
    <Drywall.Provider value={{ calc_dw_materials }}>
      {children}
    </Drywall.Provider>
  );
};

export default AppContext;

export const useDrywall = () => {
  return useContext(Drywall);
};
