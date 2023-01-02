import { useProductContext } from '../../contexts/ProductContaxt'
import { OneProduct } from './OneProduct';


export const FeaturedProducts = () => {
    
 const { isLoading, feturedProducts } = useProductContext();
 console.log("testing", feturedProducts)
  
    if (isLoading) {
        return <div>............. LOADING</div>
    }


  return (
    <section className="active-product-area section_gap pt-0">
      <div className="single-product-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h1>Featured Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">               
            { feturedProducts.map((curElem) => {
                        return <div className="col-lg-3">
                        <OneProduct key={curElem.id}{  ...curElem  } />; 
                        </div>
                    })
            }

                {/* {  feturedProducts.map((curElem) => (
                   <OneProduct key={curElem.id} {...curElem} />
                ))
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
      
      </section>
  )
}

