import React from "react";

import "./CheckBox.scss";

export const Checkbox: React.FC = () => {
  return (
    <>
      <label className="checkbox-wrapper">
        <input type="checkbox" />
        <label className="checkbox-mark" />
      </label>
      <div className="CheckBox">
        <input type="checkbox" />
        <label className="CheckBox-mark" />
      </div>
    </>
  );
};
