import "./ConversionHistory.css";
import lixeira from "../assets/Lixeira.svg";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";

export default function ConversionHistory() {
  const historicoMockado = [
    {
      id: 1,
      hora: "12:30",
      moedaOrigem: "Dólar Americano (USD)",
      moedaDestino: "Real Brasileiro (BRL)",
      valorInformado: "100",
      taxa: "R$ 5,93",
      resultado: "R$ 593,00",
    },
    {
      id: 2,
      hora: "14:45",
      moedaOrigem: "Euro (EUR)",
      moedaDestino: "Real Brasileiro (BRL)",
      valorInformado: "50",
      taxa: "R$ 6,42",
      resultado: "R$ 321,00",
    },
    {
      id: 3,
      hora: "16:20",
      moedaOrigem: "Libra Esterlina (GBP)",
      moedaDestino: "Euro (EUR)",
      valorInformado: "1.000",
      taxa: "€ 1,55",
      resultado: "€ 1.153,54",
    },
    {
      id: 4,
      hora: "18:10",
      moedaOrigem: "Iene Japonês (JPY)",
      moedaDestino: "Dólar Americano (USD)",
      valorInformado: "10.000",
      taxa: "$ 0,09",
      resultado: "$ 90,00",
    },
    {
      id: 5,
      hora: "20:05",
      moedaOrigem: "Dólar Canadense (CAD)",
      moedaDestino: "Real Brasileiro (BRL)",
      valorInformado: "200",
      taxa: "R$ 4,31",
      resultado: "R$ 862,00",
    },
  ];

  function gerarPDF() {
    const confirmou = window.confirm("Você deseja baixar o histórico em PDF?");
    if (confirmou == true) {
      const pdf = new jsPDF();
      pdf.setFontSize(18);
      pdf.text("Histórico de Conversões", 14, 20);

      autoTable(pdf, {
        startY: 30,
        head: [
          [
            "Hora",
            "Moeda de Origem",
            "Moeda de Destino",
            "Valor Informado",
            "Taxa",
            "Resultado",
          ],
        ],
        body: historicoMockado.map((item) => [
          item.hora,
          item.moedaOrigem,
          item.moedaDestino,
          item.valorInformado,
          item.taxa,
          item.resultado,
        ]),
      });

      pdf.save("historico-conversoes.pdf");
    } else {
      return;
    }
  }

  return (
    <section className="conversionHistory">
      <div className="areaTabela">
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
            {historicoMockado.map((item) => (
              <tr key={item.id}>
                <td>{item.hora}</td>
                <td>{item.moedaOrigem}</td>
                <td>{item.moedaDestino}</td>
                <td>{item.valorInformado}</td>
                <td>{item.taxa}</td>
                <td>{item.resultado}</td>
                <td>
                  <button className="botaoExcluir">
                    <img src={lixeira} alt="Excluir" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="acoesTabela">
          <div className="paginacao">
            <button className="pagina" type="button">
              {"<"}
            </button>
            <button className="pagina" type="button">
              {"1"}
            </button>
            <button className="pagina" type="button">
              {"2"}
            </button>
            <button className="pagina" type="button">
              {"3"}
            </button>
            <button className="pagina" type="button">
              {"..."}
            </button>
            <button className="pagina" type="button">
              {">"}
            </button>
          </div>
          <button className="baixar" type="button" onClick={gerarPDF}>
            {"Baixar pdf"}
          </button>
        </div>
      </div>
    </section>
  );
}
