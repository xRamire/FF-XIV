import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import RealmReborn from './Expansions/RealmReborn';
import Home from './Home/Home';

import { AnimatePresence } from 'framer-motion';
import Heavensward from './Expansions/Heavensward';

function AnimatedRoutes() {

    const location = useLocation();



    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/realm-reborn" element={<RealmReborn />} />
                <Route path="/heavensward" element={<Heavensward />} />
            </Routes>
        </AnimatePresence>
    )
}



export default AnimatedRoutes