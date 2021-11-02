import React, { useEffect, useState } from 'react'
import TeamItem from './TeamItem'
import axios from 'axios';

function TeamBody() {

	const [teamData, setTeamData] = useState([])

	const getData = async () => {

		const requestOne 	 = axios.get("http://localhost:8000/api/users",    { withCredentials: true });
		const requestTwo 	 = axios.get("http://localhost:8000/api/activity", { withCredentials: true });
		const requestThree = axios.get("http://localhost:8000/api/teams",    { withCredentials: true });

		await axios.all([requestOne, requestTwo, requestThree])
		.then(axios.spread((...responses) => {
			const users   	 = responses[0].data
			const activities = responses[1].data
			const teams 		 = responses[2].data

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
				team: teams.find(team => team.id === item.team_id)
			}))
		
			const output = {}

			for (const item of sortedData) {
				if (item.team) {
					if (!output[`${item.team.name}`]) {
						output[`${item.team.name}`] = {
							users: 1,
							complianceScores: [item.score]
						}
					}
					output[`${item.team.name}`].users += 1
					output[`${item.team.name}`].complianceScores.push(item.score)
				}
			}
			setTeamData(output)
		}))
		.catch(err => console.log(err))		
	}

	useEffect(() => {		
		getData();
	},[]);

	const componentData = []

	for (const key in teamData) {
		componentData.push(<TeamItem key={key} name={key} users={teamData[`${key}`].users} score={Math.round(teamData[`${key}`].complianceScores.reduce((a,b) => a + b, 0) / teamData[`${key}`].complianceScores.length) }/>)	
	}

	return (
		<tbody className="text-center">
			{componentData}
		</tbody>
	)
}

export default TeamBody
