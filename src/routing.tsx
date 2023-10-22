import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path={""} element={
                <Suspense fallback={"..."}>
                   
                </Suspense>
            }/>
        </Routes>
    </Router>
);

export default AppRouter;


