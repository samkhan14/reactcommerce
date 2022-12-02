import Banner from '../../Components/Banner/Banner';
import { Features } from '../../Components/Features/Features';
import { Categories } from '../../Components/Categories/Categories';
import { LatestProducts } from '../../Components/Product_Area/LatestProducts';
import { HotDeals} from '../../Components/Deals_Area/HotDeals';
import { Brands} from '../../Components/Brands/Brands';


const Home = () => {
  return (
  <>
  
     <Banner />
     <Features />
    <Categories />
    <LatestProducts />
    <HotDeals />
    <Brands />
   
  </>
  )
}

export default Home;
