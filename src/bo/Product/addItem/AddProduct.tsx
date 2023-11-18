import React, { useEffect, useState } from "react";

import "./AddProduct.scss";
import { CardContent } from "../../../components/CardContent/CardContent";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { FiChevronDown, FiChevronRight, FiEdit, FiSearch } from "react-icons/fi";
import { ImageUpload } from "../../../components/ImageUpload/ImageUpload";

interface Category {
  id: number;
  name: string;
  subcategories: { id: number; name: string }[];
}

interface SearchCategoriesProps {
  categories?: Category[];
}

const AddProduct: React.FC<SearchCategoriesProps> = ({ categories }) => {
  const [colorSelected, setColorSelected] = useState<string[]>([]);
  const [sizeSelected, setSizeSelected] = useState<string[]>([]);
  const [selectedImages, setSelectedImage] = useState<File[]>([]);
  const [searchResults, setSearchResults] = useState<Category[]>([]);
  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const sizes = ["SM", "M", "L", "XL", "2XL", "3XL"];
  const colors = ["black", "red", "yellow", "purple", "green", "blue"];

  const categorys = [
    {
      id: 1,
      name: "Electroniques",
      subcategories: [
        { id: 101, name: "Téléphones" },
        { id: 102, name: "Ordinateurs" },
        { id: 103, name: "Appareils photo" },
      ],
    },
    {
      id: 2,
      name: "Vêtements",
      subcategories: [
        { id: 201, name: "Hommes" },
        { id: 202, name: "Femmes" },
        { id: 203, name: "Enfants" },
      ],
    },
    {
      id: 3,
      name: "Alimentation",
      subcategories: [
        { id: 301, name: "Fruits et légumes" },
        { id: 302, name: "Viande et poisson" },
        { id: 303, name: "Produits laitiers" },
      ],
    },
  ];

  const selectColor = (color: string) => {
    if (colorSelected.includes(color)) {
      setColorSelected(colorSelected.filter((c) => c !== color));
    } else {
      setColorSelected([...colorSelected, color]);
    }
  };

  const selectSize = (size: string) => {
    if (sizeSelected.includes(size)) {
      setSizeSelected(sizeSelected.filter((s) => s !== size));
    } else {
      setSizeSelected([...sizeSelected, size]);
    }
  };

  const selectCategory = (item: string, subItem?: string) => {
    if (item) {
      setCategory(item);
    }
    if (subItem) {
      setSubCategory(subItem);
    }
  };

  const searchCategory = () => {
    if (searchValue && categories) {
      const result = categories.filter((category) =>
        category.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      console.log(result);
      setSearchResults(result);
    }
  };

  useEffect(() => {
    searchCategory();
  }, [searchValue]);
  return (
    <CardContent>
      <div className="AddItem">
        <form className="Form">
          <h2 className="mb-4 Form-title flex align-items-end">
            <FiEdit /> Information sur le produit
          </h2>
          <div className="SelectField">
            <div className="SelectField-itemSelected">
              <input
                className="SelectField-itemSelected"
                value={category ? category : ""}
                type="text"
                placeholder="Selectionner "
              />
              <FiChevronDown />
            </div>
            <div className="SelectField-selectBoxItem">
              <form className="SelectField-form">
                <input
                  type="text"
                  placeholder="Rechecher votre catégories ici"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <FiSearch />
              </form>
              <ul className="SelectField-listItem">
                {searchResults.length > 0
                  ? searchResults.map((list, index) => (
                      <li className="SelectField-Item" key={index.toString()}>
                        <p
                          className="SelectField-itemValue"
                          onClick={() => selectCategory(list.name)}
                          onKeyUp={() => selectCategory(list.name)}
                        >
                          <span>{list.name}</span> <FiChevronRight />{" "}
                        </p>
                        {list.subcategories.length > 0 ? (
                          <ul className="SelectField-listSubItem">
                            {list.subcategories.map((sub, subIndex) => (
                              <li
                                className="SelectField-subItem"
                                onClick={() => selectCategory(list.name, sub.name)}
                                onKeyUp={() => selectCategory(list.name, sub.name)}
                                key={subIndex.toString()}
                              >
                                {sub.name}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    ))
                  : categorys.map((list, index) => (
                      <li className="SelectField-Item" key={index.toString()}>
                        <p
                          className="SelectField-itemValue"
                          onClick={() => selectCategory(list.name)}
                          onKeyUp={() => selectCategory(list.name)}
                        >
                          <span>{list.name}</span> <FiChevronRight />{" "}
                        </p>
                        {list.subcategories.length > 0 ? (
                          <ul className="SelectField-listSubItem">
                            {list.subcategories.map((sub, subIndex) => (
                              <li
                                className="SelectField-subItem"
                                onClick={() => selectCategory(list.name, sub.name)}
                                onKeyUp={() => selectCategory(list.name, sub.name)}
                                key={subIndex.toString()}
                              >
                                {sub.name}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                {/* {categorys.map((list, index) => (
                  <li className="SelectField-Item" key={index.toString()}>
                    <p
                      className="SelectField-itemValue"
                      onClick={() => selectCategory(list.name)}
                      onKeyUp={() => selectCategory(list.name)}
                    >
                      <span>{list.name}</span> <FiChevronRight />{" "}
                    </p>
                    {list.subcategories.length > 0 ? (
                      <ul className="SelectField-listSubItem">
                        {list.subcategories.map((sub, subIndex) => (
                          <li
                            className="SelectField-subItem"
                            onClick={() => selectCategory(list.name, sub.name)}
                            onKeyUp={() => selectCategory(list.name, sub.name)}
                            key={subIndex.toString()}
                          >
                            {sub.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
          <label className="flex flex-column mb-3">
            <span className="Form-field">
              Désignation du produit <i>*</i>:{" "}
            </span>
            <InputText className="p-inputtext" type="text" placeholder="désignation du produit" />
            <span />
          </label>
          <div className="flex gap-3 mb-3 w-full">
            <label className="flex flex-column w-6">
              <span className="Form-field">
                Marque<i>*</i> :
              </span>
              <InputText type="text" placeholder="Marque du produit" />
              <span />
            </label>
            <label className="flex flex-column w-6">
              <span className="Form-field">
                Modèle<i>*</i> :
              </span>
              <InputText type="text" placeholder="" />
              <span />
            </label>
          </div>
          <label className="flex flex-column mb-3">
            <span className="Form-field">
              Prix unitaire<i>*</i> :
            </span>
            <InputText type="text" placeholder="Prix" />
            <span />
          </label>
          <label className="flex flex-column mb-3">
            <span className="Form-field">Description du produit </span>
            <Editor placeholder="Description du produit" readOnly style={{ height: "150px" }} />
          </label>
          <ImageUpload selectedImages={selectedImages} setSelectedImages={setSelectedImage} />
          <div className="Form-otherDetail">
            <h3 className="mt-10 mb-10 Form-subtitle">Autres détails</h3>
            <div className="Card flex flex-column mt-3">
              <span className="Card-title Form-field">Taille : (Facultatif)</span>
              <div className="Card-body flex gap-3">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className={`Form-tagSize ${
                      sizeSelected.includes(size) ? "Form-selectSize" : null
                    }`}
                    onClick={() => selectSize(size)}
                    onKeyUp={() => selectSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="Card flex flex-column mt-3">
              <span className="Card-title Form-field">Couleur : (Facultatif)</span>
              <div className="Card-body flex gap-3">
                {colors.map((color: string) => (
                  <div
                    key={color}
                    className={`Form-color ${
                      colorSelected.includes(color) ? "Form-selectColor" : null
                    }`}
                    onClick={() => selectColor(color)}
                    onKeyUp={() => selectColor(color)}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </CardContent>
  );
};

export default AddProduct;
