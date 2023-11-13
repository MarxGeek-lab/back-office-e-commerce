import React, { useState } from "react";

import "react-multi-carousel/lib/styles.css";
import "./List.scss";

import { CardContent } from "../../../components/CardContent/CardContent";
import { FiCheck, FiDelete, FiEdit, FiPlus, FiSearch } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import { Button } from "../../../components/Button/Button";
import { Checkbox } from "../../../components/CheckBox/CheckBox";

import img from "../../../assets/images/product.jpeg";
import img2 from "../../../assets/images/download (10).jpeg";
import img3 from "../../../assets/images/download (12).jpeg";
import img4 from "../../../assets/images/download (13).jpeg";

import { FormSeach } from "../../../components/FormSeach/FormSearch";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const CategoryList: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const selectLine = () => {
    const allLines: NodeListOf<Element> = document.querySelectorAll(".DataTable-bodyLine");

    for (const line of allLines) {
      const input = line.querySelector(".CheckBox input") as HTMLInputElement | null;
      input?.addEventListener("click", () => {
        input.checked = true;

        for (const otherLines of allLines) {
          const otherInput = otherLines.querySelector(".CheckBox input") as HTMLInputElement | null;
          if (otherInput && input !== otherInput) {
            otherInput.checked = false;
            otherLines.classList.remove("selected");
          }
        }

        const clickedLine = input.closest(".DataTable-bodyLine");
        if (clickedLine) {
          clickedLine.classList.toggle("selected", input.checked);
        }
      });
    }
  };

  const searchProductAuto = () => {};

  const product = [
    {
      id: 1,
      img: img,
      nameProduct: "Basket",
      category: "Accessoire",
      price: 1200,
      quantity: 20,
      status: true,
    },
    {
      id: 2,
      img: img2,
      nameProduct: "Basket X",
      category: "Accessoire",
      price: 1200,
      quantity: 20,
      status: true,
    },
    {
      id: 3,
      img: img4,
      nameProduct: "Basket SM",
      category: "Accessoire Elèctronique",
      price: 1200,
      quantity: 20,
      status: true,
    },
    {
      id: 4,
      img: img2,
      nameProduct: "Basket L",
      category: "Accessoire",
      price: 1200,
      quantity: 20,
      status: true,
    },
    {
      id: 5,
      img: img,
      nameProduct: "Basket L",
      category: "Elèctronique",
      price: 1200,
      quantity: 20,
      status: true,
    },
    {
      id: 6,
      img: img3,
      nameProduct: "Basket XM",
      category: "Accessoire",
      price: 1200,
      quantity: 20,
      status: true,
    },
    {
      id: 7,
      img: img4,
      nameProduct: "Basket",
      category: "Elèctronique",
      price: 1200,
      quantity: 20,
      status: true,
    },
  ];

  return (
    <CardContent>
      <Dialog
        className="p-4 bg-white DialogPopup"
        header="Header"
        visible={false}
        style={{ width: "50vw" }}
        onHide={() => setVisible(true)}
      >
        <form className="w-20rem">
          <label className="flex flex-column">
            <label htmlFor="username">Username</label>
            <InputText id="username" />
            <span>ojo</span>
          </label>
        </form>
      </Dialog>

      <div className="CategoryListPage">
        <div className="CategoryListPage-searchDiv mt-1 flex justify-content-between">
          <div className="CategoryListPage-actionDiv flex gap-3">
            <Button label="Nouveau Produit" icon={<FiPlus />} />
            <Button label="Modifier" icon={<FiEdit />} />
            <Button label="Supprimer" icon={<FiDelete />} />
          </div>
          <div className="CategoryListPage-FormSearchDiv flex align-items-center">
            <Button label="Exporter" icon={<FaFileDownload />} />
            <FormSeach />
          </div>
        </div>
        <div className="DataTable">
          <div className="DataTable-table">
            <div className="DataTable-head">
              <div>
                {" "}
                <FiCheck />{" "}
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
              {product.map((list) => (
                <div key={list.id} className="DataTable-bodyLine">
                  <div>
                    <Checkbox action={selectLine} />
                  </div>
                  <div>{list.id}</div>
                  <div>{list.nameProduct}</div>
                  <div>
                    <img src={list.img} alt="" />
                  </div>
                  <div>{list.category} </div>
                  <div>{list.price} Fcfa</div>
                  <div>{list.quantity}</div>
                  <div>{list.status ? "en Stock" : "fini"} </div>
                </div>
              ))}
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index.toString()} className="DataTable-bodyLine">
                  <div>
                    <Checkbox action={selectLine} />
                  </div>
                  <div>{index + 1}</div>
                  <div>Basket</div>
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <div>Accessoires</div>
                  <div>1200 Fcfa</div>
                  <div>8</div>
                  <div>En stock</div>
                </div>
              ))}
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

export default CategoryList;
