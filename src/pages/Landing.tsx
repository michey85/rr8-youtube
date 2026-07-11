import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getCoins } from '../lib/getCoins';

const Landing = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then((data) => setCoins(data));
  }, []);

  return (
    <div>
      <h1>Landing Page</h1>
      <p>This is the landing page content.</p>
      <section className="grid">
        {coins.length === 0 ? (
          <progress />
        ) : (
          coins.map((coin: any) => (
            <article key={coin.id}>
              <header>
                <h2>{coin.name}</h2>
                <img src={coin.image} alt={coin.name} width={100} />
              </header>
              <p>Price: ${coin.current_price}</p>
              <Link to={`/coins/${coin.id}`}>Go to Details</Link>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default Landing;
