import React from "react";
import InnerHeader from "../../Components/Inner_Banners/InnerHeader";
import { Link } from "react-router-dom";
import { ProductFilterSection } from "../../Components/Product_Area/ProductFilterSection";
import { ProductFilterBaar } from "../../Components/Product_Area/ProductFilterBaar";
import { RelatedProducts } from "../../Components/Product_Area/DealsofTheWeek";
import { useFilterContext } from "../../contexts/Filter_context";
import { ShopPageProducts } from "../../Components/Product_Area/ShopPageProducts";
const Products = () => {
  const heading = {
    name: "Products",
    slogan: "Shop",
  };

  // const { filter_products } = useFilterContext();
  // console.log("filter products", filter_products);

  return (
    <div>
      <InnerHeader heading={heading} />

      <div className="container">
        <div className="row">
          <ProductFilterSection />
          <div className="col-xl-9 col-lg-8 col-md-7">
         
            <ProductFilterBaar />
            {/* Start Best Seller */}
            <section className="lattest-product-area pb-40 category-list">
            <ShopPageProducts />
            </section>

            {/* Start Filter Bar  */}
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <div className="sorting mr-auto">
                <select>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                </select>
              </div>
              <div className="pagination">
                <Link href="#" className="prev-arrow">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="active">
                  1
                </Link>
                <Link href="#">2</Link>
                <Link href="#">3</Link>
                <Link href="#" className="dot-dot">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </Link>
                <Link href="#">6</Link>
                <Link href="#" className="next-arrow">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts />
    </div>
  );
};
export default Products;
