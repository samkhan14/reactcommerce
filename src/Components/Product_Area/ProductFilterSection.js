import React from "react";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../contexts/Filter_context";

export const ProductFilterSection = () => {
  const {
    filters_search: { searchText, category, company },
    all_products,
    updateSearchFilterValue,
  } = useFilterContext();

  //  function for get unique data
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  //  get unique data for categories
  const categoryOnlyData = getUniqueData(all_products, "category");
  const brandOnlyData = getUniqueData(all_products, "company");
  console.log(brandOnlyData);

  return (
    <div className="col-xl-3 col-lg-4 col-md-5">
      <div className="sidebar-categories">
        <div className="searchProductArea">
          <div className="head">Search Product</div>
          <form className="mt-3 mb-3" onClick={(e) => e.preventDefault()}>
            <input
              class="form-control form-control-lg"
              type="text"
              name="searchText"
              value={searchText}
              onChange={updateSearchFilterValue}
            />
          </form>
        </div>

        <div className="head">Browse Categories</div>
        
          {categoryOnlyData.map((curElem, index) => {
            return (
              // <li className="main-nav-list">
              //   <Link
              //     href="javaScript:void(0);"
              //     key={index}
              //     name="category"
              //     value={curElem}
              //     onClick={updateSearchFilterValue}
              //   >
              //     {" "}
              //     {curElem}
              //   </Link>
              // </li>
              <li className="main-nav-list">
              <button type="button" className="btn btn-primary" key={index} value={curElem} name="category"  onClick={updateSearchFilterValue}>{curElem}</button>
              </li>
            );
          })}
          {/* <li className="main-nav-list"><Link data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
             className="lnr lnr-arrow-right"></span>Fruits and Vegetables<span className="number">(53)</span></Link>
          <ul className="collapse" id="fruitsVegetable" data-toggle="collapse" aria-controls="fruitsVegetable">
            <li className="main-nav-list child"><Link href="#">Frozen Fish<span className="number">(13)</span></Link></li>
            <li className="main-nav-list child"><Link href="#">Dried Fish<span className="number">(09)</span></Link></li>
            <li className="main-nav-list child"><Link href="#">Fresh Fish<span className="number">(17)</span></Link></li>
            <li className="main-nav-list child"><Link href="#">Meat Alternatives<span className="number">(01)</span></Link></li>
            <li className="main-nav-list child"><Link href="#">Meat<span className="number">(11)</span></Link></li>
          </ul>
        </li> */}

          {/* <li className="main-nav-list"><Link href="#">Pet Care<span className="number">(29)</span></Link></li>        */}
        
      </div>
      <div className="sidebar-filter mt-50">
      <div className="top-filter-head">Product Filters</div>
      <div className="common-filter">
        <div className="head">Brands</div>
        <form action="#">
          <ul>
            {brandOnlyData.map((curElem, index) => {
              return <li className="filter-list"><input key={index} className="pixel-radio" type="radio" id="apple" value={curElem} name="company" onClick={updateSearchFilterValue} /><label for="apple">{curElem}<span>(29)</span></label></li> 
            })
            }
           
          </ul>
        </form>
      </div>
      {/* <div className="common-filter">
        <div className="head">Color</div>
        <form action="#">
          <ul>
            <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color"/><label for="black">Black<span>(29)</span></label></li>
            <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color"/><label for="balckleather">Black
                Leather<span>(29)</span></label></li>
            <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color"/><label for="blackred">Black
                with red<span>(19)</span></label></li>
            <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color"/><label for="gold">Gold<span>(19)</span></label></li>
            <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color"/><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
          </ul>
        </form>
      </div>
      <div className="common-filter">
        <div className="head">Price</div>
        <div className="price-range-area">
          <div id="price-range"></div>
          <div className="value-wrapper d-flex">
            <div className="price">Price:</div>
            <span>$</span>
            <div id="lower-value"></div>
            <div className="to">to</div>
            <span>$</span>
            <div id="upper-value"></div>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
};
