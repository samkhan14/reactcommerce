import { useState } from "react";

export const ProductImage = ({ images = [{ url:"" }] }) => {

  const [currentImage, setcurrentImage] = useState(images[0]);
  
  return (
    <>
    {/* main prouduct image will be set later as per design */}
     <div className="main-product-image mb-5">
      <h4>this is main product image</h4>
					<img src={currentImage.url} alt={currentImage.filename} class="rounded d-block" width="50%"/>	
    </div>

    <div className="s_Product_carousel">
      {images?.map((curElem, i) => {
        return( <div className="single-prd-item">
               <img
                className="img-fluid"
                src={curElem.url}
                alt={curElem.filename}
                key={i} 
                onClick={()=> { setcurrentImage(curElem)}}
              />
        </div>
        )
      })       
      }

    </div>
   
    </>
  ); 
   
};
