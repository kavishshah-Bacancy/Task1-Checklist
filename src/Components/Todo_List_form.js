import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

function Todo_List_form({ item, handleChange, handleSubmit, isEdit }) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <BsFillPlusSquareFill />
            </div>
          </div>
          <input
            type="text"
            placeholder="Please Add your New Todo"
            className="form-control text-capitalize"
            value={item}
            onChange={handleChange}
            required
          />
        </div>

        <button
          disabled={!item}
          type="submit"
          className={
            !isEdit
              ? "btn btn-block btn-info mt-3 text-uppercase"
              : "btn btn-block btn-primary mt-3 text-uppercase"
          }
        >
          {!isEdit ? "Add New Item" : "Update Item"}
        </button>
      </form>
    </div>
  );
}

export default Todo_List_form;
