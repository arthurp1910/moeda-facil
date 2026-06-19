import "./ConversionHistory.css";
import lixeira from "../assets/Lixeira.svg";
export default function ConversionHistory() {
  return (
  <section className="conversionHistory">

    <table className="tabelaHistorico">
      <caption className="tituloTabela">Histórico</caption>
      <thead className="cabecalhoHistorico">
      <th>Hora</th>
      <th>Moeda de Origem</th>
      <th>Moeda de destino</th>
      <th>Valor informado</th>
      <th>Taxa</th>
      <th>Resultado</th>
      <th>Ações</th>
      </thead>

      <tbody className="corpoHistorico">
        <tr>
          <td>12:30</td>
          <td>Dólar Americano (USD)</td>
          <td>Real Brasileiro (BRL)</td>
          <td>100</td>
          <td>R$ 5,93</td>
          <td>R$ 593,00</td>
          <td><button className="botaoExcluir">
            <img src={lixeira} alt="Excluir" />
          </button></td>
        </tr>

        <tr>
          <td>14:45</td>
          <td>Euro (EUR)</td>
          <td>Real Brasileiro (BRL)</td>
          <td>50</td>
          <td>R$ 6,42</td>
          <td>R$ 321,00</td>
          <td>
          <button className="botaoExcluir">
            <img src={lixeira} alt="Excluir" />
          </button>
        </td>
        </tr>

        <tr>
          <td>16:20</td>
          <td>Libra Esterlina (GBP)</td>
          <td>Euro (EUR)</td>
          <td>1.000</td>
          <td>€ 1,55</td>
          <td>€ 1.153,54</td>
          <td><button className="botaoExcluir">
            <img src={lixeira} alt="Excluir" />
          </button></td>
        </tr>

        <tr>
          <td>18:10</td>
          <td>Iene Japonês (JPY)</td>
          <td>Dólar Americano (USD)</td>
          <td>10.000</td>
          <td>$ 0,09</td>
          <td>$ 90,00</td>
          <td><button className="botaoExcluir">
            <img src={lixeira} alt="Excluir" />
          </button></td>
        </tr>

        <tr>
          <td>20:05</td>
          <td>Dólar Canadense (CAD)</td>
          <td>Real Brasileiro (BRL)</td>
          <td>200</td>
          <td>R$ 4,31</td>
          <td>R$ 862,00</td>
          <td><button className="botaoExcluir">
            <img src={lixeira} alt="Excluir" />
          </button></td>
        </tr>

      </tbody>
    </table>
    </section>
  );
}