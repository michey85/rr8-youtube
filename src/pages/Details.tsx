import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCoinDetails } from '../lib/getCoins';

const Details = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    if (coinId) {
      getCoinDetails(coinId).then((data) => setCoin(data));
    }
  }, [coinId]);

  return (
    <div>
      <h1>Details Page</h1>
      {coin ? (
        <>
          <img src={coin.image.small} alt={coin.name} />
          <h2>
            Price <em>{coin.market_data.current_price.rub}</em> rub
          </h2>
          <h3>
            24h change{' '}
            <em>{coin.market_data.price_change_24h_in_currency.rub}</em> rub
          </h3>
          <p>{coin.description.en}</p>
        </>
      ) : (
        <progress />
      )}
    </div>
  );
};

export default Details;
