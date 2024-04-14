import Navbar from '@/components/Navbar';
import MenuCategory from '@/components/MenuCategory';
import Footer from '@/components/Footer';
import HeroLanding from '@/components/HeroLanding';
import ListEvent from '@/components/ListEvent';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroLanding />
      <MenuCategory />
      <ListEvent />
      <Footer />
    </div>
  );
}
