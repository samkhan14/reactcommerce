import { useProductContext } from "../../contexts/ProductContaxt";
import { OneProduct } from "./OneProduct";

export const FeaturedProducts = () => {
  const { isLoading, feturedProducts } = useProductContext();
  console.log("testing", feturedProducts);

  if (isLoading) {
    return <div>............. LOADING</div>;
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
            {feturedProducts.map((curElem) => {
              return (
                <div className="col-lg-3">
                  <OneProduct key={curElem.id} {...curElem} />;
                </div>
              );
            })}

            {/* {  feturedProducts.map((curElem) => (
                   <OneProduct key={curElem.id} {...curElem} />
                ))
                } */}
          </div>
        </div>
      </div>
    </section>
  );
};
