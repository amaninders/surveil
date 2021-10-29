import './Timeline.css'
import React from 'react'
import TimelineItem from './TimelineItem'

function Timeline() {
	return (
		<div className="container">
    <div className="row data--item">
        <div className="col-md-10">
            <ul className="timeline">
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
              <TimelineItem time={"12:13 pm"} appImage="favicon.ico" name={"facebook"} title={"lorem ipsum"} />
            </ul>  
        </div>
    </div>
</div>
	)
}

export default Timeline
