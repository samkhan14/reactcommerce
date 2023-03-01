import React from 'react'
import { Link } from 'react-router-dom'


export const ProductFilterBaar = () => {
  return (
   <>
   	{/* Start Filter Bar */}
       <div className="filter-bar d-flex flex-wrap align-items-center">
					<div className="sorting">
						<select>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
						</select>
					</div>
					<div className="sorting mr-auto">
						<select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select>
					</div>
					<div className="pagination">
						<Link href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
						<Link href="#" className="active">1</Link>
						<Link href="#">2</Link>
						<Link href="#">3</Link>
						<Link href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
						<Link href="#">6</Link>
						<Link href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
					</div>
				</div>
				 {/* End Filter Bar  */}
   </>
  )
}
