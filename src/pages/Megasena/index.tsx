import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-megasena.png";
import { Carregando, Direita, Esquerda, NomeLoteria, Principal, Resultado } from "../../components";

export default function Megasena() {
  const { megasena:sorteio } = useLoteria();
  return (
    <>
      {sorteio.dataApuracao ? (
        <Principal>
          <Esquerda>
            <NomeLoteria trevo={trevo} nome="MEGA-SENA"/>
            <div className="mega-bloco-estimativa">
              <div className="mega-texto-estimativa">
                Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                {sorteio.dataApuracao}
              </div>
              <div className="mega-valor-estimativa">
                {sorteio.valorEstimadoProximoConcurso.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "brl",
                })}
              </div>
            </div>
          </Esquerda>
          <Direita>
            <Resultado dezenas={sorteio.dezenas}/>
            <div className="mega-texto-acumulou">
              {sorteio.acumulado ? "ACUMULOU!" : "NÃO ACUMULOU"}
            </div>
            <div className="mega-data-concurso">
              {`Concurso ${sorteio.numeroDoConcurso} - ${sorteio.dataPorExtenso}`}
            </div>
          </Direita>
        </Principal>
      ) : (
        <Carregando />
      )}
    </>
  );
}
