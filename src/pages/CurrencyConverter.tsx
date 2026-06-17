import "./CurrencyConverter.css";
export default function CurrencyConverter() {
  return(
        <section className="currencyConverter">
          <div className="titulo">
            <h1>Conversor de Moedas</h1>
          </div>
          <div className="card">
            <form>
              <div className = "input-group">
                <label htmlFor="valor">Valor</label>
                <input type="number" id="valor" placeholder="0,00" />
              </div>

              <div className = "input-group">
                <label htmlFor="moedaOrigem">Converter de</label>
                <select id="moedaOrigem">
                  <option value="USD">Dólar Americano</option>
                  <option value="EUR">Euro</option>
                  <option value="BRL">Real Brasileiro</option>
                </select>
              </div>

              <div className = "input-group">
                <label htmlFor="moedaDestino">Converter para</label>
                <select id="moedaDestino">
                  <option value="USD">Dólar Americano</option>
                  <option value="EUR">Euro</option>
                  <option value="BRL">Real Brasileiro</option>
                </select>
              </div>

              <button className="botao" type="submit">Converter</button>
            </form> 
          </div> 

          <div className="resultado">
            <h3>Resultado</h3>
              <div className="linha">
                <p><strong>Valor informado:</strong> R$ 0,00</p>
                <p><strong>Valor convertido:</strong> R$ 0,00</p>
                <p><strong>Taxa de conversão utilizada:</strong> 1 USD = 5,93 BRL</p>
              </div>
          </div>
        </section>
      );
    }
