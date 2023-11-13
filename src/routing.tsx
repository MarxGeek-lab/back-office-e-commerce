import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./bo/Layout";
import {
  ADD_PRODUCT_PAGE,
  CATEGORY_LIST_PAGE,
  CATEGORY_TRASH_PAGE,
  HOME_PAGE,
  ORDER_PAGE,
  PRODUCT_PAGE,
  SALE_PAGE,
  SETTING_PAGE,
} from "./settings/constant";

const HomePage = lazy(() => import("./bo/Home/Home"));
const ProductPage = lazy(() => import("./bo/Product"));
const AddProductPage = lazy(() => import("./bo/Product/addItem/AddProduct"));
const ListCategoryPage = lazy(() => import("./bo/Category/List/List"));
const ListTrashCategory = lazy(() => import("./bo/Category/Trash/Trash"));
const OrderPage = lazy(() => import("./bo/Order"));
const SalePage = lazy(() => import("./bo/Sale"));
const SettingPage = lazy(() => import("./bo/Setting"));

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route
        path={HOME_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <HomePage />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path={PRODUCT_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <ProductPage />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path={ADD_PRODUCT_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <AddProductPage />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path={CATEGORY_LIST_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <ListCategoryPage />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path={CATEGORY_TRASH_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <ListTrashCategory />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path={ORDER_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <OrderPage />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path={SALE_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <SalePage />
            </Layout>
          </Suspense>
        }
      />

      <Route
        path={SETTING_PAGE}
        element={
          <Suspense fallback={"..."}>
            <Layout>
              <SettingPage />
            </Layout>
          </Suspense>
        }
      />
    </Routes>
  </Router>
);

export default AppRouter;
