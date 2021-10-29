import React from 'react'

function TeamCard(props) {
	return (
    <div className="card">
      <div className="card-content">
        <div className="card-body">
          <div className="media d-flex justify-content-between">
            <div className="media-body text-right">
              <h3>{props.value}</h3>
              <span>{props.title}</span>
            </div>
						<div className="text-center align-self-center	">
              <i className={props.icon} style={{fontSize:'30px'}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default TeamCard
