import React from "react";

function ItemSelector(props) {
  const onToggleChange = (e) => {
    props.setToggle({ [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    props.setId({ [e.target.name]: e.target.value });
  };

  return (
    <div className="row row-cols-lg-auto g-3 align-items-center justify-content-between">
      <div className="col-12">
        <form>
          <label className="form-label">
            {`Select a ${props.view === "users" ? "user" : "team"}`}{" "}
          </label>
          <select
            className="form-select"
            name="id"
            onChange={onInputChange}
          >
            <option hidden disabled value>
              {`Select a ${props.view === "users" ? "user" : "team"}`}
            </option>
            {props.item.map((item) => (
              <option key={item.id} value={item.id}>
                {props.view === "teams"
                  ? item.name
                  : `${item.first_name} ${item.last_name}`}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="col-12">
        <form>
          <div
            className="btn-group"
            role="group"
            value={props.toggle}
            defaultChecked
            aria-label="Basic radio toggle button group"
            style={{ width: "100%" }}
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value="All"
              id="btnradio1"
              autoComplete="off"
              onChange={onToggleChange}
              defaultChecked
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              All
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value="Today"
              id="btnradio2"
              autoComplete="off"
              onChange={onToggleChange}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio2">
              Today
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value="Week"
              id="btnradio3"
              autoComplete="off"
              onChange={onToggleChange}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio3">
              Week
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value="Month"
              id="btnradio4"
              autoComplete="off"
              onChange={onToggleChange}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio4">
              Month
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemSelector;
