import "./Quotes.css";

export default function Quotes() {
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
                <tr>
                <td>🇺🇸</td>
                <td>Dólar Americano</td>
                <td>$</td>
                <td>Estados Unidos</td>
                <td>R$ 5,93</td>
                </tr>

                <tr>
                <td>🇪🇺</td>
                <td>Euro</td>
                <td>€</td>
                <td>União Europeia</td>
                <td>R$ 6,42</td>
                </tr>

                <tr>
                <td>🇬🇧</td>
                <td>Libra Esterlina</td>
                <td>£</td>
                <td>Reino Unido</td>
                <td>R$ 7,55</td>
                </tr>

                <tr>
                <td>🇯🇵</td>
                <td>Iene Japonês</td>
                <td>¥</td>
                <td>Japão</td>
                <td>R$ 0,04</td>
                </tr>

                <tr>
                <td>🇨🇦</td>
                <td>Dólar Canadense</td>
                <td>$</td>
                <td>Canadá</td>
                <td>R$ 4,31</td>
                </tr>
            </tbody>
        </table>
    </section>
  );
}