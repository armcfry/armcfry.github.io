import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";

export default class PageRoutes extends Component {
    render() {
        return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}/>
                <Route index element={<About />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} /> */}
                <Route path="*" element={<NoPage />} />
            </Routes>
        </HashRouter>
        )
    }
}