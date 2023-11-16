import React, { ChangeEvent, SetStateAction, useState } from "react";

import "./ImageUpload.scss";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";

interface ImageUpload {
  selectedImages: File[];
  setSelectedImages: React.Dispatch<React.SetStateAction<File[]>>;
}

export const ImageUpload: React.FC<ImageUpload> = ({ selectedImages, setSelectedImages }) => {
  const [imageURLs, setImageURLs] = useState<(string | ArrayBuffer | null)[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageFiles = Array.from(files).filter((file) => {
        const allowedExtension = ["jpeg", "jpg", "png"];
        const extension = file.name.split(".").pop()?.toLowerCase();
        return extension && allowedExtension.includes(extension);
      });

      if (imageFiles.length === 0) {
        alert("mauvais extension");
        return;
      }

      const readers = imageFiles.map((file) => {
        setSelectedImages([...selectedImages, file]);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return reader;
      });

      Promise.all<string | ArrayBuffer | null>(
        readers.map(
          (reader) =>
            new Promise((resolve) => {
              reader.onload = () => {
                resolve(reader.result);
              };
            }),
        ),
      ).then((results) => {
        console.log(results);
        setImageURLs(results);
      });
    }
  };

  const handleImageDelete = (imageURL: string) => {
    if (imageURL) {
      const filterImage = imageURLs.filter(
        (imageUrl) => imageUrl?.toString() !== imageURL.toString(),
      );

      if (filterImage) {
        setImageURLs(filterImage);
      }
    }
  };

  return (
    <div className="ImageUpload">
      <div className="SelectFileImage">
        <div className="SelectFileImage-head">
          <div className="SelectFileImage-groupBtn">
            <button className="SelectFileImage-btnAddImage" type="button">
              <input
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                multiple
                onChange={handleImageChange}
              />
              <FiPlus />
              Ajouter une image
            </button>
            <button className="SelectFileImage-btnDeleteImage" type="button">
              <LiaTimesSolid /> Supprimer
            </button>
          </div>
        </div>
        <div className="SelectFileImage-contentImage">
          {imageURLs && imageURLs.length > 0 ? (
            <>
              {imageURLs.map((imageURL, index) => (
                <div className="SelectFileImage-imgDiv" key={index.toString()}>
                  <img src={imageURL ? imageURL.toString() : ""} alt="" />
                  <button
                    className="SelectFileImage-deleteImage"
                    type="button"
                    onClick={() => handleImageDelete(imageURL ? imageURL.toString() : "")}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="SelectFileImage-placeholder">
                <FaCloudDownloadAlt />
                <span className="SelectFileImage-label">Déplacer ou sélectionner des images</span>
              </div>
            </>
          )}
        </div>
        <div className="SelectFileImage-footer">
          <p className="SelectFileImage-infos">
            Sélectionner uniquement des images au format jpeg, jpg et png avec une taille maximum
            500x400
          </p>
        </div>
      </div>
    </div>
  );
};
