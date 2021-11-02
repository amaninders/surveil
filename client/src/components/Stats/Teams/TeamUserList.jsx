import React, { useEffect, useState } from 'react'
import UserCard from '../Users/UserCard'
import axios from 'axios'

function TeamUserList(props) {

	const [users, setUsers] = useState([])
	
	//get required data
	const getData = async () => {

		const requestOne = axios.get("http://localhost:8000/api/users", { withCredentials: true });
		const requestTwo = axios.get("http://localhost:8000/api/activity", { withCredentials: true });
		const requestThree = axios.get("http://localhost:8000/api/teams", { withCredentials: true });

		await axios.all([requestOne, requestTwo, requestThree])
			.then(axios.spread((...responses) => {
				const users = responses[0].data
				const activities = responses[1].data
				const team = responses[2].data.find(team => team.id === props.teamId)

				const complianceData = {}
				
				for (const item of activities) {
					if (!complianceData[`${item.user_id}`]) {
						complianceData[`${item.user_id}`] = {
							count: 1,
							compliant: item.is_compliant ? 1 : 0
						}
					}
					complianceData[`${item.user_id}`].count += 1
					complianceData[`${item.user_id}`].compliant += item.is_compliant ? 1 : 0
				}

				const sortedData = users.map(item => ({...item, 
					count: complianceData[`${item.id}`] ? complianceData[`${item.id}`].count : 0,
					compliant: complianceData[`${item.id}`] ? complianceData[`${item.id}`].compliant : 0,
					score: complianceData[`${item.id}`] ? (complianceData[`${item.id}`].compliant / complianceData[`${item.id}`].count * 100) : 0,
					team: team.name
				}))

				const output = sortedData.sort((a,b) => b.score - a.score);

				const filteredByTeam = output.filter(user => user.team_id === props.teamId)

				setUsers(filteredByTeam)

			}))
			.catch(err => console.log(err))
			
	}

	useEffect(() => {		
		getData();
	}, []);


	const componentData = users.map((item, index) => <UserCard key={index} name={item.first_name + ' ' + item.last_name} score={Math.round(item.score)} team={item.team}/>)


	return (
		<div className="row" data-masonry='{"percentPosition": true }'>
      { componentData }
	  </div>
	)
}

export default TeamUserList
