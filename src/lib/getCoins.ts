export async function getCoins() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1',
  );

  return res.json();
}

export async function getCoinDetails(coinId: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  return res.json();
}
