import React, { ReactNode } from "react";

import "./Button.scss";

interface ButtonProps {
  label: string;
  icon: ReactNode;
  command?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, icon }) => {
  return (
    <button className="Button border-round-sm flex align-items-center pl-2 pr-2" type="button">
      {icon} {label}
    </button>
  );
};
