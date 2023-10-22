import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./bo/Layout";

const HomePage = lazy(() => import("./bo/Home/Home"));

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path={""} element={
                <Suspense fallback={"..."}>
                   <Layout>
                        <HomePage />
                   </Layout>
                </Suspense>
            }/>
        </Routes>
    </Router>
);

export default AppRouter;


