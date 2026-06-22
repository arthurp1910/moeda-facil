import "./Quotes.css";

export default function Quotes() {
  const moedasMockadas = [
    {
      codigo: "USD",
      bandeira: "🇺🇸",
      moeda: "Dólar Americano",
      simbolo: "$",
      paisRegiao: "Estados Unidos",
      cotacaoBRL: "R$ 5,93",
    },
    {
      codigo: "EUR",
      bandeira: "🇪🇺",
      moeda: "Euro",
      simbolo: "€",
      paisRegiao: "União Europeia",
      cotacaoBRL: "R$ 6,42",
    },
    {
      codigo: "GBP",
      bandeira: "🇬🇧",
      moeda: "Libra Esterlina",
      simbolo: "£",
      paisRegiao: "Reino Unido",
      cotacaoBRL: "R$ 7,55",
    },
    {
      codigo: "JPY",
      bandeira: "🇯🇵",
      moeda: "Iene Japonês",
      simbolo: "¥",
      paisRegiao: "Japão",
      cotacaoBRL: "R$ 0,04",
    },
    {
      codigo: "CAD",
      bandeira: "🇨🇦",
      moeda: "Dólar Canadense",
      simbolo: "$",
      paisRegiao: "Canadá",
      cotacaoBRL: "R$ 4,31",
    },
  ];

  return (
    <section className="quotes">
      <div className="tituloquotes">
        <h1>Cotações</h1>
      </div>

      <table className="tabela">
        <thead className="cabecalho">
          <tr>
            <th>Código</th>
            <th>Moeda</th>
            <th>Símbolo</th>
            <th>País/Região</th>
            <th>Cotação (BRL)</th>
          </tr>
        </thead>

        <tbody className="corpo">
          {moedasMockadas.map((moeda) => (
            <tr key={moeda.codigo}>
              <td>
                
                {moeda.bandeira} {moeda.codigo}
              </td>
              <td>{moeda.moeda}</td>
              <td>{moeda.simbolo}</td>
              <td>{moeda.paisRegiao}</td>
              <td>{moeda.cotacaoBRL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}