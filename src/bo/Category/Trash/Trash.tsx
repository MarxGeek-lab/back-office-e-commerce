import React from "react";

import "./Trash.scss";
import { CardContent } from "../../../components/CardContent/CardContent";
import { Button } from "../../../components/Button/Button";
import { FiCheck, FiDelete, FiSearch, FiTrash } from "react-icons/fi";
import { Checkbox } from "../../../components/CheckBox/CheckBox";

import img from "../../../assets/images/product.jpeg";

const CategoryTrash: React.FC = () => {
  return (
    <CardContent>
      <div className="TrashCategoryPage">
        <div className="TrashCategoryPage-searchDiv mt-1 flex justify-content-between">
          <div className="TrashCategoryPage-actionDiv flex gap-3">
            <Button label="Tout Supprimer" icon={<FiTrash />} />
            <Button label="Supprimer" icon={<FiDelete />} />
          </div>
          <div className="TrashCategoryPage-FormSearchDiv flex align-items-center">
            <form className="FormSearch ml-3">
              <FiSearch />
              <input className="w-25rem pl-6" type="text" placeholder="Rechercher ici" />
            </form>
          </div>
        </div>
        <div className="DataTable">
          <div className="DataTable-table">
            <div className="DataTable-head">
              <div>
                <FiCheck />
              </div>
              <div>N°</div>
              <div>Nom</div>
              <div>Photo</div>
              <div>Catégorie</div>
              <div>Prix Unitaire</div>
              <div>Quantité</div>
              <div>Status</div>
            </div>
            <div className="DataTable-bodyTable">
              <div className="DataTable-bodyLine">
                <div>
                  <Checkbox />
                </div>
                <div>1</div>
                <div>Basket</div>
                <div>
                  <img src={img} alt="" />{" "}
                </div>
                <div>Accessoires</div>
                <div>1200 Fcfa</div>
                <div>8</div>
                <div>En stocks</div>
              </div>
              <div className="DataTable-bodyLine">
                <div>
                  <Checkbox />
                </div>
                <div>1</div>
                <div>Basket</div>
                <div>
                  <img src={img} alt="" />{" "}
                </div>
                <div>Accessoires</div>
                <div>1200 Fcfa</div>
                <div>8</div>
                <div>En stocks</div>
              </div>
              <div className="DataTable-bodyLine">
                <div>
                  <Checkbox />
                </div>
                <div>1</div>
                <div>Basket</div>
                <div>
                  <img src={img} alt="" />{" "}
                </div>
                <div>Accessoires</div>
                <div>1200 Fcfa</div>
                <div>8</div>
                <div>En stocks</div>
              </div>
              <div className="DataTable-bodyLine">
                <div>
                  <Checkbox />
                </div>
                <div>1</div>
                <div>Basket</div>
                <div>
                  <img src={img} alt="" />{" "}
                </div>
                <div>Accessoires</div>
                <div>1200 Fcfa</div>
                <div>8</div>
                <div>En stocks</div>
              </div>
              <div className="DataTable-bodyLine">
                <div>
                  <Checkbox />
                </div>
                <div>1</div>
                <div>Basket</div>
                <div>
                  <img src={img} alt="" />{" "}
                </div>
                <div>Accessoires</div>
                <div>1200 Fcfa</div>
                <div>8</div>
                <div>En stocks</div>
              </div>
            </div>
          </div>
          <div className="DataTable-footerTable">
            <p className="DataTable-text"> 23 produits en disponible</p>
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default CategoryTrash;
