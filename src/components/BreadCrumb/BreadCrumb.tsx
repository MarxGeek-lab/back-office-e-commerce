import React from "react";
import { FiChevronRight, FiHome } from "react-icons/fi";

import "./BreadCrumb.scss";

interface BreadCrumbProps {
  labelPage?: string;
}

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ labelPage }) => {
  return (
    <div className="BreadCrumb">
      <a className="Dflex Dflex-alignCenter" href="ijdi">
        <FiHome />
      </a>
      <FiChevronRight className="BreadCrumb-chevron" />
      <a className="Dflex Dflex-alignCenter" href="ijod">
        {labelPage}
      </a>
    </div>
  );
};
