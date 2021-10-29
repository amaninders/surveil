import React from 'react'

function TeamCard(props) {
	return (
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="media d-flex justify-content-between">
            <div class="media-body text-right">
              <h3>{props.value}</h3>
              <span>{props.title}</span>
            </div>
						<div class="text-center align-self-center	">
              <i class={props.icon} style={{fontSize:'30px'}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default TeamCard
