import React from 'react'
import { Link } from 'react-router-dom'
import { useFilterContext } from '../../contexts/Filter_context'


export const ProductFilterBaar = () => {
  const { grid_view, setGridView, setListView, filter_products } = useFilterContext();
  
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
						{/* <select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select> */}
						<p className='m-0 text-white'>Products: {filter_products.length}</p>
					</div>
					<div class="filter-buttons d-flex mr-auto">						
						<div className={grid_view ? "active grid-view-button" : "grid-view-button"} onClick={setGridView}><i class="fa fa-th-large" aria-hidden="true"></i></div>
						<div className={!grid_view ? "active list-view-button" : "list-view-button" } onClick={setListView}><i class="fa fa-bars" aria-hidden="true"></i></div>
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
