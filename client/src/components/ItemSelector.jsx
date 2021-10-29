import React from "react";

function ItemSelector(props) {
  const onInputChange = (e) => {
    props.setId({ [e.target.name]: e.target.value });
  };

  console.log(props.Id);
  return (
    <div className="row row-cols-lg-auto g-3 align-items-center justify-content-between">
      <div className="col-12">
        <form>
          <select
            className="form-select"
            name="id"
            value={props.item.id}
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
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
          style={{ width: "100%" }}
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="btnradio1">
            Today
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="btnradio2">
            Week
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="btnradio3">
            Month
          </label>
        </div>
      </div>
    </div>
  );
}

export default ItemSelector;
