import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mega from "../pages/mega";
import Loto from "../pages/loto";
import Menu from "../components/Menu";
import QuinaPage from "../pages/quinaPage";

function Rotas(){
    return(
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/megasena" element={<Mega />} />
                <Route path="/lotofacil" element={<Loto />} />
                <Route path="/quina" element={<QuinaPage />} />

                
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;