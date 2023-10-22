import React, { ReactNode } from "react";

import "./index.scss";

interface LayoutProps {
    children: ReactNode
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
    return(
        <div className="Layout">
            {children}
        </div>
    );
};

export default Layout;