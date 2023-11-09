import React from "react";

import "./List.scss";
import { CardContent } from "../../../components/CardContent/CardContent";
import { InputText } from "primereact/inputtext";
import { FiDelete, FiEdit, FiPlus, FiSearch } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import { Button } from "../../../components/Button/Button";

const CategoryList: React.FC = () => {
  return (
    <CardContent>
      <div className="CategoryListPage">
        <div className="CategoryListPage-searchDiv flex justify-content-between">
          <div className="CategoryListPage-actionDiv flex gap-3">
            <Button label="Nouveau Produit" icon={<FiPlus />} />
            <Button label="Modifier" icon={<FiEdit />} />
            <Button label="Supprimer" icon={<FiDelete />} />
          </div>
          <div className="CategoryListPage-FormSearchDiv flex align-items-center">
            <Button label="Exporter" icon={<FaFileDownload />} />
            <form className="FormSearch ml-3">
              <FiSearch />
              <input className="w-20rem pl-6" type="text" placeholder="Rechercher ici" />
            </form>
          </div>
        </div>
        <div className="DataTable">
          <table className="DataTable-table">
            <thead className="DataTable-head">
              <tr>
                <th> </th>
                <th>N°</th>
                <th>Libellé</th>
                <th>Photo</th>
                <th>Prix Unitaire</th>
                <th>Quantité</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <input type="checkbox" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CardContent>
  );
};

export default CategoryList;
