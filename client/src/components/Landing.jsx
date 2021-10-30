import React, { useState } from 'react'
import PropTypes from 'prop-types';


async function loginUser() {
	return fetch("http://localhost:8000/api/users/login/1", {
		"headers": {
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"accept-language": "en-IN,en;q=0.9,pa-IN;q=0.8,pa;q=0.7,en-US;q=0.6,en-GB;q=0.5",
			"cache-control": "max-age=0",
			"if-none-match": "W/\"7f-YdzY6xhXNJSIN5P5x69IAbiuWZU\"",
			"sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Linux\"",
			"sec-fetch-dest": "document",
			"sec-fetch-mode": "navigate",
			"sec-fetch-site": "none",
			"sec-fetch-user": "?1",
			"upgrade-insecure-requests": "1"
		},
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": null,
		"method": "GET",
		"mode": "cors",
		"credentials": "include"
	})
		.then(data => data.json())
 }

export default function Landing({ setToken }) {

	const [username, setUserName] = useState();
  const [password, setPassword] = useState();

	const handleSubmit = async e => {
		console.log(username, password)
    e.preventDefault();
    const token = await loginUser();
    setToken(token);
  }

	return (
			<div className="container col-xl-10 col-xxl-8 px-4 py-5">
		    <div className="row align-items-center g-lg-5 py-5">
		      <div className="col-lg-7 text-center text-lg-start">
						<img src="images/landing.svg" alt="landing" className="landing--image"/>
						<br />
						<br />
		        <p className="col-lg-10 fs-4"><span style={{color:'green'}}>Surveil</span> makes it easier for you to track productivity of your remote workforce. It can track the user activity across browser and provide meaningful insights on how your remote employees spend their time</p>
		      </div>
		      <div className="col-md-10 mx-auto col-lg-5">
		        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
		          <div className="form-floating mb-3">
		            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUserName(e.target.value)}/>
		            <label htmlFor="floatingInput">Email address</label>
		          </div>
		          <div className="form-floating mb-3">
		            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
		            <label htmlFor="floatingPassword">Password</label>
		          </div>
		          <button className="w-100 btn btn-lg btn-dark" type="submit">Log in</button>
		        </form>
		      </div>
		    </div>
		  </div>
	)
}

Landing.propTypes = {
  setToken: PropTypes.func.isRequired
}
