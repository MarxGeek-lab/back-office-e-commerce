import React, { ReactNode, Suspense } from "react";
import { MenuItem } from "primereact/menuitem";
import TopBar from "../components/TopBar/TopBar";

import "./Layout.scss";
import { TieredMenu } from "primereact/tieredmenu";
import { useNavigate } from "react-router-dom";
import {
  CATEGORY_LIST_PAGE,
  CATEGORY_PAGE,
  HOME_PAGE,
  ORDER_PAGE,
  PRODUCT_PAGE,
  SALE_PAGE,
  SETTING_PAGE,
} from "../settings/constant";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: "Tableau de bord",
      icon: "pi pi-fw pi-file",
      command: () => {
        navigate(HOME_PAGE);
      },
    },
    {
      label: "Catégories",
      icon: "pi pi-fw pi-list",
      items: [
        {
          label: "Tout les catégories",
          icon: "pi pi-fw pi-list",
          command: () => {
            navigate(CATEGORY_LIST_PAGE);
          },
        },
        {
          label: "Nouveau catégorie",
          icon: "pi pi-fw pi-plus",
          command: () => {
            navigate(CATEGORY_PAGE);
          },
        },
        {
          label: "Cobeille",
          icon: "pi pi-fw pi-trash",
          command: () => {
            navigate(CATEGORY_PAGE);
          },
        },
      ],
    },
    {
      label: "Produits",
      icon: "pi pi-fw pi-list",
      items: [
        {
          label: "Tout les produits",
          icon: "pi pi-fw pi-list",
          command: () => {
            navigate(PRODUCT_PAGE);
          },
        },
        {
          label: "Nouveau produits",
          icon: "pi pi-fw pi-plus",
          command: () => {
            navigate(PRODUCT_PAGE);
          },
        },
        {
          label: "Cobeille",
          icon: "pi pi-fw pi-trash",
          command: () => {
            navigate(PRODUCT_PAGE);
          },
        },
      ],
    },
    {
      label: "Commandes",
      icon: "pi pi-fw pi-shopping-bag",
      items: [
        {
          label: "Liste des commandes",
          icon: "pi pi-fw pi-list",
          command: () => {
            navigate(ORDER_PAGE);
          },
        },
        {
          label: "Cobeille",
          icon: "pi pi-fw pi-list",
          command: () => {
            navigate(ORDER_PAGE);
          },
        },
      ],
    },
    {
      label: "Ventes",
      icon: "pi pi-fw pi-shopping-cart",
      items: [
        {
          label: "Liste des ventes",
          icon: "pi pi-fw pi-list",
          command: () => {
            navigate(SALE_PAGE);
          },
        },
        {
          label: "Cobeille",
          icon: "pi pi-fw pi-list",
          command: () => {
            navigate(SALE_PAGE);
          },
        },
      ],
    },
    {
      label: "Réglages",
      icon: "pi pi-fw pi-wrench",
      command: () => {
        navigate(SETTING_PAGE);
      },
    },
  ];

  return (
    <div className="Layout">
      <div className="Layout-topBar">
        <TopBar />
      </div>
      <div className="Layout-mainCenter Dflex RawContainer">
        <TieredMenu
          model={items}
          breakpoint="767px"
          className="Layout-sidebar p-tieredmenu p-menu-list p-menuitem p-menuitem-icon"
        />
        <div className="Layout-contentPage">
          <div className="Layout-blockContent p-2">
            <Suspense fallback="...">{children}</Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
