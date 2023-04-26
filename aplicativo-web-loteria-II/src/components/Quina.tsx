/* eslint-disable jsx-a11y/alt-text */
import logo from "../assets/trevo-quina.png"
import { useContexto } from "../hooks";
import "../styles/quina.css";

function Quina() {
    const { quina, carregamento } = useContexto()

    return (
        <div className="container" style={{ display: carregamento ? "" : "none" }}>
        <div className="col-1">
            <div className="header-container">
                <div className="image-header">
                    <img src={logo} />
                </div>
                <div className="quina-logo-header">
                    <h3 >QUINA</h3>
                </div>

            </div>
            <div className="description">
                Estimativa de prêmio do próximo concurso. Sorteio {quina.dataProximoConcurso}:
            </div>
            <div className="quina-value">
                <h2>{carregamento? quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):""}</h2>
            </div>

        </div>


        <div className="quina-col-2">
            <div className="">
                <ul>
                    {quina.dezenas ? quina.dezenas.map((el) =>
                        <li>
                            {el}
                        </li>
                    ) : ""}
                </ul>
            </div>
            <h1 className="winners">
                {quina.acumulado ? "ACUMULADO" : quina.quantidadeGanhadores + " ganhadores"}
            </h1>

            <p className="gameDescription">
                Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
            </p>
        </div>


    </div>
    
    )
}
export default Quina;