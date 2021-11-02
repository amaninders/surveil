import React, { useEffect, useState } from "react";
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
    setAllSites(allSites.data.slice(0,6));
  };
  return (
    <div className="col-md-8 data--item">
      <h3>Top Applications/Sites</h3>
      <div className="card">
        <ul className="list-group list-group-flush">
					{allSites.map((site, index) =>(
						<li className="list-group-item" key={index}>{site.name}</li>
					))}
        </ul>
      </div>
    </div>
  );
}

export default TopSites;
