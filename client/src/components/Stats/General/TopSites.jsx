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
    setAllSites(allSites.data.sort((a,b) => b.value - a.value).slice(0,5));
  };
  return (
    <div className="col-md-8 data--item">
      <h3>Top Applications/Sites</h3>
      <div className="card">
        <ul className="list-group list-group-flush">
					{allSites.map((site, index) =>(
						<li className="list-group-item justify-content-center" key={index}>
					    <div class="row">
				        <div class="col-sm-6">{site.name}</div>
				        <div class="col-sm-6 text-end">{ humanizeDuration(site.value * 1000) }</div>
					    </div>
						</li>
					))}
        </ul>
      </div>
    </div>
  );
}

export default TopSites;
