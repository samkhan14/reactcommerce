import Banner from '../../Components/Banner/Banner';
import { Features } from '../../Components/Features/Features';
import { Categories } from '../../Components/Categories/Categories';
import { LatestProducts } from '../../Components/Product_Area/LatestProducts';
import { HotDeals} from '../../Components/Deals_Area/HotDeals';
import { Brands} from '../../Components/Brands/Brands';
import { FeaturedProducts } from '../../Components/Product_Area/FeaturedProducts';


const Home = () => {
  return (
  <>
  
     <Banner />
     <Features />
     <FeaturedProducts/>
    <Categories />
    <LatestProducts />
    <HotDeals />
    <Brands />
   
  </>
  )
}

export default Home;
