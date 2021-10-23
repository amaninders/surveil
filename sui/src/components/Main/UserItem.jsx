import React from 'react'

function UserItem(props) {
	return (
		<li>
			<div class="card" style={{width: '18rem'}}>
			  <img src="logo192.png" class="card-img-top" alt="user_avatar" />
			  <div class="card-body">
			    <h5 class="card-title">{props.name}</h5>
			    <p class="card-text">{props.role}</p>
			    <a href="/" class="btn btn-primary">props.status</a>
			  </div>
			</div>
		</li>
	)
}

export default UserItem
