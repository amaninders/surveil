import React from "react";
import NavItem from "./NavItem";

function Nav(props) {
  // sample navItems
  const navItems = [
    { name: "Home", feather: "home" },
    { name: "Teams", feather: "file" },
    { name: "Users", feather: "users" },
    {name:"Activity Profile", feather:"activity_profile"}
  ];

  // function to set view in the parent
  const switchTo = (e, view) => {
    e.preventDefault();
    // console.log(view)
    props.setView(view);
  };

  // generate html for nav
  const navHTML = navItems.map((item, index) => {
    const selected = item.name === props.selected;
    return (
      <NavItem
        key={index}
        name={item.name}
        feather={item.feather}
        switchTo={switchTo}
        ariaCurrent={selected}
        class={selected ? "nav-item active" : "nav-item"}
      />
    );
  });

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">{navHTML}</ul>
      </div>
    </nav>
  );
}

export default Nav;
