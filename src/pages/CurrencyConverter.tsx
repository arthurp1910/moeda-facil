import "./CurrencyConverter.css";
import { useEffect, useState } from "react";
import { converterMoeda, listarMoedas } from "../services/api";

export default function CurrencyConverter() {
  const [valor, setValor] = useState("");
  const [moedaOrigem, setMoedaOrigem] = useState("USD");
  const [moedaDestino, setMoedaDestino] = useState("BRL");
  const [resultado, setResultado] = useState<number | null>(null);
  const [taxa, setTaxa] = useState<number | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [todasAsMoedas, setTodasAsMoedas] = useState([]);
  const [busca, setBusca] = useState("");
  const [moedasFiltradas, setMoedasFiltradas] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);

  useEffect(() => {
    listarMoedas().then((dadosLista) => {
      setTodasAsMoedas(dadosLista.supported_codes);
    });
  }, []);
  async function handleConverter(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro(null);
    if(!valor || Number(valor)  <= 0){
      setErro("Informe um valor válido");
      return;
    }
    try{
        const dados = await converterMoeda(
          moedaOrigem,
          moedaDestino,
          Number(valor),
        );

        setResultado(dados.conversion_result);
        setTaxa(dados.conversion_rate);
      }catch{
        setErro("Erro ao converter. Tente novamente.");
      }
  }
  return (
    <section className="currencyConverter">
      <div className="titulo">
        <h1>Conversor de Moedas</h1>
      </div>
      <div className="card">
        <form onSubmit={handleConverter}>
          <div className="input-group">
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              id="valor"
              placeholder="0,00"
              value={valor}
              onChange={(evento) => setValor(evento.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="moedaOrigem">Converter de</label>

            <input
              id="moedaOrigem"
              type="text"
              value={busca}
              placeholder="Digite a moeda de origem"
              onChange={(evento) => setBusca(evento.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="moedaDestino">Converter para</label>
            <select
              id="moedaDestino"
              value={moedaDestino}
              onChange={(evento) => setMoedaDestino(evento.target.value)}
            >
              <option value="USD">Dólar Americano</option>
              <option value="EUR">Euro</option>
              <option value="BRL">Real Brasileiro</option>
            </select>
          </div>

          <button className="botao" type="submit">
            Converter
          </button>
        </form>
      </div>

      <div className="resultado">
        <h3>Resultado</h3>
        <div className="linha">
          <p>
            <strong>Valor informado: </strong>
            {valor || "0"} {moedaOrigem}
          </p>
          <p>
            <strong>Valor convertido: </strong>{" "}
            {resultado !== null ? resultado.toFixed(2) : "0,00"} {moedaDestino}
          </p>
          <p>
            <strong>Taxa de conversão utilizada: </strong>{" "}
            {taxa !== null
              ? `1 ${moedaOrigem} = ${taxa.toFixed(2)} ${moedaDestino}`
              : "-"}
          </p>
        </div>
      </div>
    </section>
  );
}
