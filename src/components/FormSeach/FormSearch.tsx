import React from "react";

import "./FormSearch.scss";
import { FiSearch } from "react-icons/fi";

export const FormSeach: React.FC = () => {
  return (
    <form className="FormSearch ml-3">
      <FiSearch />
      <input className="w-25rem pl-7" type="text" placeholder="Rechercher ici" />
    </form>
  );
};
