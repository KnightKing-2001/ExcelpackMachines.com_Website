import Hero from '../components/Hero';
import Catalog from '../components/Catalog';

// 1. Catch the prop here
const Home = ({ openQuoteModal }) => {
  return (
    <>
      <div id="home">
        {/* 2. Hand it to the Hero */}
        <Hero openQuoteModal={openQuoteModal} />
      </div>
      <div id="catalog">
        <Catalog />
      </div>
    </>
  );
};

export default Home;