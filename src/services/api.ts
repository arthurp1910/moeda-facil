const API_KEY = "69b372c596fe385410f672af";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export async function converterMoeda(
  moedaOrigem: String,
  moedaDestino: String,
  valor: Number,
) {
  const resposta = await fetch(
    `${BASE_URL}/pair/${moedaOrigem}/${moedaDestino}/${valor}`,
  );
  const dados = await resposta.json();
  return dados;
}
