import React from 'react'
import UserCard from '../Users/UserCard'

function TeamUserList() {
	return (
		<div className="row" data-masonry='{"percentPosition": true }'>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
	  </div>
	)
}

export default TeamUserList
