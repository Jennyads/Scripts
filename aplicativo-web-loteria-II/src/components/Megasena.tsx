/* eslint-disable jsx-a11y/alt-text */

import { useContexto } from "../hooks";
import logo from "../assets/trevo-megasena.png"
import "../styles/megasena.css";

function Megasena(){
    const {megasena, carregamento} = useContexto();
    return(
        <div className="container" style={{ display: carregamento ? "" : "none" }}>
            <div className="col-1">
                <div className="header-container">
                    <div className="image-header">
                        <img src={logo} />
                    </div>
                    <div className="megasena-logo-header">
                        <h3 >MEGA-SENA</h3>
                    </div>

                </div>
                <div className="description">
                    Estimativa de prêmio do próximo concurso. Sorteio {megasena.dataProximoConcurso}:
                </div>
                <div className="megasena-value">
                    <h2>{carregamento? megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):""}</h2>
                </div>

            </div>


            <div className="megasena-col-2">
                <div className="">
                    <ul>
                        {megasena.dezenas ? megasena.dezenas.map((el) =>
                            <li>
                                {el}
                            </li>
                        ) : ""}
                    </ul>
                </div>
                <h1 className="winners">
                    {megasena.acumulado ? "ACUMULADO" : megasena.quantidadeGanhadores + " ganhadores"}
                </h1>

                <p className="gameDescription">
                    Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}
                </p>
            </div>


        </div>

    )
}

export default Megasena;


