import React, { ReactNode } from "react";

import "./CardContent.scss";

interface CardContentProps {
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="CardContent w-full bg-white p-3 border-round-md">{children}</div>;
};
