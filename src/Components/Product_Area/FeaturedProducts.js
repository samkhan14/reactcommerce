import { useProductContext } from '../../contexts/ProductContaxt'
import { OneProduct } from './OneProduct';


export const FeaturedProducts = () => {
    
 const { isLoading, featureProducts } = useProductContext();
 console.log("see data here", featureProducts)
  
    if (isLoading) {
        return <div>............. LOADING</div>
    }


  return (
    <section class="active-product-area section_gap pt-0">
      <div class="single-product-slider">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-title">
                <h1>Featured Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
               
                {  featureProducts.map((curElem) => (
                   <OneProduct key={curElem.id} {...curElem} />
                ))}


                {/* { featureProducts.map((curElement) => {
                        return <Product key={curElement.id}{  ...curElement  } />; 
                    })
                } */}
              
            </div>

            {/* <div class="col-lg-3 col-md-6">
              <div class="single-product">
                <img class="img-fluid" src="assets/img/product/p2.jpg" alt="" />
                <div class="product-details">
                  <h6>addidas New Hammer sole for Sports person</h6>
                  <div class="price">
                    <h6>$150.00</h6>
                    <h6 class="l-through">$210.00</h6>
                  </div>
                  <div class="prd-bottom">
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="ti-bag"></span>
                      <p class="hover-text">add to bag</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-heart"></span>
                      <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-sync"></span>
                      <p class="hover-text">compare</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-move"></span>
                      <p class="hover-text">view more</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="single-product">
                <img class="img-fluid" src="assets/img/product/p3.jpg" alt="" />
                <div class="product-details">
                  <h6>addidas New Hammer sole for Sports person</h6>
                  <div class="price">
                    <h6>$150.00</h6>
                    <h6 class="l-through">$210.00</h6>
                  </div>
                  <div class="prd-bottom">
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="ti-bag"></span>
                      <p class="hover-text">add to bag</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-heart"></span>
                      <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-sync"></span>
                      <p class="hover-text">compare</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-move"></span>
                      <p class="hover-text">view more</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="single-product">
                <img class="img-fluid" src="assets/img/product/p4.jpg" alt="" />
                <div class="product-details">
                  <h6>addidas New Hammer sole for Sports person</h6>
                  <div class="price">
                    <h6>$150.00</h6>
                    <h6 class="l-through">$210.00</h6>
                  </div>
                  <div class="prd-bottom">
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="ti-bag"></span>
                      <p class="hover-text">add to bag</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-heart"></span>
                      <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-sync"></span>
                      <p class="hover-text">compare</p>
                    </a>
                    <a href="javascriptvoid(0)" class="social-info">
                      <span class="lnr lnr-move"></span>
                      <p class="hover-text">view more</p>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
      </section>
  )
}

