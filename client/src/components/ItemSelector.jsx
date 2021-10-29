import React from 'react'

function ItemSelector(props) {

	const	items = [
		'item A',
		'item B',
		'item C'
	]

	const listItems = items.map(item => <ListItem name={item} />)

	return (
		<div className="row row-cols-lg-auto g-3 align-items-center justify-content-between">
			<div className="col-12">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					  select a {props.item}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					  {listItems}
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{width:'100%'}}>
				  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
				  <label className="btn btn-outline-dark" for="btnradio1">Today</label>

				  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
				  <label className="btn btn-outline-dark" for="btnradio2">Week</label>

				  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
				  <label className="btn btn-outline-dark" for="btnradio3">Month</label>
				</div>
			</div>
		</div>
	)
}


function ListItem(props) {
	return (
		<div>
			<li><a className="dropdown-item" href="/">{props.name}</a></li>
		</div>
	)
}


export default ItemSelector
