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
            <option hidden disabled selected value>
              {`Select a ${props.view ==='users'? 'user':'team'}`}
            </option>
            {props.item.map((item) => (
              <option key={item.id} value={item.id}>
                {(props.view === 'teams')? item.name :`${item.first_name} ${item.last_name}`}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}

export default ItemSelector;
