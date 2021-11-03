import React, { useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";
import axios from "axios";

function TopSites() {
  const [allSites, setAllSites] = useState([]);

  useEffect(() => {
    loadAllSites();
  }, []);

  //get all sites visited by users and time spent
  const loadAllSites = async () => {
    const allSites = await axios.get("http://localhost:8000/api/allsites", {
      withCredentials: true,
    });
    setAllSites(allSites.data.sort((a,b) => b.value - a.value).slice(0,6));
  };

  return (
    <div className="col-md-12 data--item">
      <div className="card">
        <ul className="list-group list-group-flush">
					{allSites.map((site, index) => {
						return (
							<li className="list-group-item justify-content-center" key={index}>
								<div className="row">
									<div className="col-sm-6">{site.name}</div>
									<div className="col-sm-6 text-end">{ humanizeDuration(site.value * 1000) }</div>
								</div>
							</li>
						)
					})}
        </ul>
      </div>
    </div>
  );
}

export default TopSites;
