import { Outlet } from 'react-router';
import { useNavigation } from 'react-router';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Navbar />
      <main className="container">
        {isNavigating ? <progress /> : <Outlet />}
      </main>
    </>
  );
};

export default RootLayout;
