import { redirect, useLoaderData } from 'react-router';
import { getCoinDetails } from '../lib/getCoins';

export async function loader({ params }: { params: Record<string, string> }) {
  const coinId = params.coinId;
  if (!coinId) {
    throw redirect('/not-found');
  }
  const coinDetails = await getCoinDetails(coinId);

  return { coinDetails, coinId };
}

const Details = () => {
  const { coinDetails: coin } = useLoaderData() as {
    coinDetails: any;
    coinId: string;
  };

  return (
    <div>
      <h1>Details Page</h1>

      <img src={coin.image.small} alt={coin.name} />
      <h2>
        Price <em>{coin.market_data.current_price.rub}</em> rub
      </h2>
      <h3>
        24h change <em>{coin.market_data.price_change_24h_in_currency.rub}</em>{' '}
        rub
      </h3>
      <p>{coin.description.en}</p>
    </div>
  );
};

export default Details;
