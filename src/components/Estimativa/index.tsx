import styled from "styled-components";

interface Props {
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
}

export default function Estimativa({dataProximoConcurso,valorEstimadoProximoConcurso}:Props){
    return(
        <Sld>
            <TextoSld>Estimativa de prêmio do próximo concurso. Sorteio em {dataProximoConcurso}</TextoSld>
              <ValorSld>{valorEstimadoProximoConcurso.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "brl",
                })}</ValorSld>
        </Sld>
    )
}

const Sld = styled.div`
    width:240px;
    margin-left:45px;
    margin-top: 15px;
`;

const TextoSld = styled.div`
    font-size:15px;
    color: ${props => props.theme.data};         
`;

const ValorSld = styled.div`
    font-size:20px;
    color:${props => props.theme.estimativa};
    font-weight: bold;
    margin-top: 15px;
`;