const API_KEY = "69b372c596fe385410f672af";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export async function converterMoeda(
  moedaOrigem: string,
  moedaDestino: string,
  valor: number,
)

{
  const resposta = await fetch(
    `${BASE_URL}/pair/${moedaOrigem}/${moedaDestino}/${valor}`,
  );
  if (!resposta.ok) throw new Error("Erro ao buscar conversão, tente novamente mais tarde");
  const dados = await resposta.json();
  return dados;
}
export async function listarMoedas() {
  const lista = await fetch(`${BASE_URL}/codes/`);
  const dadosLista = await lista.json();
  return dadosLista;
}