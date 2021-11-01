export function teamTimeBySite(members, activities) {
  const allSites = {};

  for(let i=0; i< members.length; i++){
    const userId = members[i].id;
    for(let j=0; j<activities.length; j++) {
      const userIdInActivity = activities[j].user_id;
      if(userId === userIdInActivity) {
         if(!allSites[activities[j].name]) {
           allSites[activities[j].name] = 1;
         } else{
           allSites[activities[j].name] += 1;
         }
      }
    }
  }

  return allSites;
}