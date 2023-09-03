import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from '../pages/Home';
import Cadastrar from '../pages/Cadastrar';
import Confirm from '../pages/Confirm';
import Error from '../pages/Error';
import ReceitasSalgadas from '../pages/ListaReceitasSalgadas';
import ReceitasDoces from '../pages/ListaReceitasDoces';
import ReceitasBebidas from '../pages/ListaReceitasBebidas';
import RSalgadas from '../pages/RSalgadas';
import RDoces from "../pages/Rdoces";
import RBebidas from '../pages/RBebidas';
import ReceitaAberta from '../pages/ReceitaAberta';
import Login from '../pages/Login';
import Teste from "../pages/teste _api/index";


const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cadastrar" element={<Cadastrar />} />
                <Route path="/ReceitasSalgadas" element={<ReceitasSalgadas />} />
                <Route path="/ReceitasDoces" element={<ReceitasDoces />} />
                <Route path="/ReceitasBebidas" element={<ReceitasBebidas />} />
                <Route path="/RDoces" element={<RDoces />} />
                <Route path="/RSalgadas" element={<RSalgadas />} />
                <Route path="/RBebidas" element={<RBebidas />} />
                <Route path="/Confirm" element={<Confirm />} />
                <Route path="/ReceitaAberta" element={<ReceitaAberta />} />
                <Route path="/Login" element={<Login />} />
                <Route path="Cadastrar" element={<Cadastrar />} />
                <Route path="*" element={<Error />} />
                <Route path="/Teste" element={<Teste />} />

            </Routes>
        </Router>
    );
}

export default Root;