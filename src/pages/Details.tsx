import { useLoaderData } from 'react-router';

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
