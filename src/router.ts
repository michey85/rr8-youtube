import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Landing from './pages/Landing';
import About from './pages/About';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { getCoinDetails, getCoins } from './lib/getCoins';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Landing,
        loader: async () => {
          const coins = await getCoins();
          return { coins };
        },
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'coins/:coinId',
        Component: Details,
        loader: async ({ params }) => {
          const coinId = params.coinId;
          if (!coinId) {
            throw redirect('/not-found');
          }
          const coinDetails = await getCoinDetails(coinId);

          return { coinDetails, coinId };
        },
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

export default router;
