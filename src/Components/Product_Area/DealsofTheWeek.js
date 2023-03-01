import React from 'react'
import { Link } from 'react-router-dom'

export const RelatedProducts = () => {
  return (
    <section class="related-product-area section_gap_bottom">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
                <div class="section-title">
                    <h1>Deals of the Week</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r1.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r2.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r3.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r5.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r6.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r7.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r9.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r10.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="single-related-product d-flex">
                            <Link href="#"><img src="img/r11.jpg" alt=""/></Link>
                            <div class="desc">
                                <Link href="#" class="title">Black lace Heels</Link>
                                <div class="price">
                                    <h6>$189.00</h6>
                                    <h6 class="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="ctg-right">
                    <Link href="#" target="_blank">
                        <img class="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
