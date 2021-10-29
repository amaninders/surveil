import React from 'react'

function TimelineItem(props) {
	return (
		<li>
      <time className="time"><span>{props.time }</span> <span></span></time>
      <div className="icon bg-icon"><i class="fas fa-chevron-circle-right"></i></div>
      <div className="label">
          <h2 className="align-self-center">Visited <span style={{color:'Green', fontSize:'1rem'}}>{props.name}</span> and app/page title was <span style={{color:'Green', fontSize:'1rem'}}>{props.title}</span></h2>
      </div>
  	</li>
	)
}

export default TimelineItem
