import React from "react";

import "./CheckBox.scss";

interface CheckBoxProps {
  action?: () => void;
}
export const Checkbox: React.FC<CheckBoxProps> = ({ action }) => {
  return (
    <>
      <div className="CheckBox">
        <input type="checkbox" onClick={action} />
        <label className="CheckBox-mark" />
      </div>
    </>
  );
};
