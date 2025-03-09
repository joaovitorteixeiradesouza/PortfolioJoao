import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import MyTech from "../pages/MyTech";
import ExperienciaProfissional from "../pages/ExperienciaProfissional";
import Contato from "../pages/Contato";

function RouterManager() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/skills" element={<Skills></Skills>}></Route>
                <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
                <Route path="/my-tech" element={<MyTech></MyTech>}></Route>
                <Route path="/experiencia" element={<ExperienciaProfissional></ExperienciaProfissional>}></Route>
                <Route path="/contato" element={<Contato></Contato>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterManager;