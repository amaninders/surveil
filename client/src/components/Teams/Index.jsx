import React, { useEffect, useState } from "react";
import ItemSelector from "../ItemSelector";
import TeamStats from "../Stats/Teams/TeamStats";
import TeamTimeBySite from "../Stats/Teams/TeamTimeBySite";
import TeamUserList from "../Stats/Teams/TeamUserList";
import axios from "axios";

function Teams(props) {
  props.setView("teams");
  
  const [teams, setTeams] = useState([]);
  const [Id, setId] = useState({
    id: 1
  })

  const [toggle, setToggle] = useState({
    btnradio: "All",
  });

  useEffect(() => {
    loadTeams();
  }, []);

  //get all teams
  const loadTeams = async () => {
    const allTeams = await axios.get("http://localhost:8000/api/teams", {
      withCredentials: true,
    });
    setTeams(allTeams.data);
  };

  return (
    <>
      <div className="container">
        <div className="row data--item">
          <ItemSelector
            item={teams}
            view={props.view}
            Id={Id}
            setId={setId}
            toggle={toggle}
            setToggle={setToggle}
          />
        </div>
      </div>
      <div className="container">
        <div className="row data--item">
          <TeamStats Id={Id} />
        </div>
        <div className="row data--item">
          <div className="col-xs-12">
            <TeamTimeBySite Id={Id} toggle={toggle} />
          </div>
        </div>
        <div className="row data--item">
          <div className="col-xs-12">
            <h3>All Users</h3>
            <TeamUserList teamId={Id.id}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
