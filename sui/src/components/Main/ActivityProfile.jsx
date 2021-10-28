import { useState } from "react";
import ActivityData from "./Activity/ActivityData";
import ActivityProfileNavBar from "./Activity/ActivityProfileNavBar";
import AddActivityProfile from "./Activity/AddActivityProfile";

export default function ActivityProfile() {
  const [view, setView] = useState("Profiles");
  return (
    <div className="container">
      <ActivityProfileNavBar setView={setView} />
      {view === "Profiles" && <ActivityData />}
      {view === "addProfile" && <AddActivityProfile />}
    </div>
  );
}
