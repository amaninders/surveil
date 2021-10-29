import React from 'react'
import ItemSelector from '../ItemSelector'
import UserHeatmap from '../Stats/Users/UserHeatmap'
import Timeline from '../Timeline/Index'

function Users() {
	return (
			<>
			<div className="container">
				<div className="row data--item">
					<ItemSelector item={"user"}/>
				</div>
			</div>
			<div className="container">
				<div className="row data--item">
					<h3>Activity Heatmap</h3>
	        <div className="col-sm-12"> 
					 <UserHeatmap />
				 	</div>
		    </div>
		    <div className="row data--item">
					<h3>Activity Stream</h3>
					<div className="col-sm-12 data--item" style={{paddingTop:'20px'}}> 
						<Timeline />
				 	</div>
		    </div>
			</div>
		</>
	)
}

export default Users
