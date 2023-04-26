export interface LoteriaProps{
    megasena: Props;
    lotofacil: Props;
    quina: Props;
    carregamento: boolean;
    setMegasena: Function;
    setLotofacil: Function;
    setQuina: Function;
    setCarregamento: Function;
    
}

export interface Props{
    "acumulado": boolean;
    "concursoEspecial": boolean;
    "dataApuracao": string;
    "dataPorExtenso": string;
    "dataProximoConcurso": string;
    "dezenas": string[];
    "numeroDoConcurso": number;
    "quantidadeGanhadores": number;
    "tipoJogo": string;
    "valorEstimadoProximoConcurso": number;
    "valorPremio": number;

}