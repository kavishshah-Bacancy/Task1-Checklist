import React from "react";
import { BsPencil, BsXCircleFill } from "react-icons/bs";
import "./CSS/Todo_List.css";

function Todo_List({
  todoList,
  handleEdit,
  handleDelete,
  handleChecked,
  handleClearList,
  isEmpty,
}) {
  return (
    <div>
      {!isEmpty ? (
        <ul className="list-group my-5">
          {todoList.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item text-capitalize d-flex justify-content-between my-2"
              >
                <span>
                  <input
                    type="checkbox"
                    onChange={() => handleChecked(item.id)}
                    checked={item.isChecked}
                  />
                </span>
                <h6 className={item.isChecked ? "Checked" : ""}>
                  {item.title}
                </h6>
                <div>
                  <button
                    className="mx-2 text-success"
                    onClick={() => handleEdit(item.id)}
                    disabled={item.isChecked}
                  >
                    <BsPencil />
                  </button>
                  <button
                    className="mx-2 text-danger"
                    onClick={() => handleDelete(item.id)}
                    disabled={item.isChecked}
                  >
                    <BsXCircleFill />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="card card-body my-3">
          <h5>Opps.. Nothing to do, Please Add some ToDo</h5>
        </div>
      )}
      <button
        hidden={isEmpty}
        className="btn btn-block btn-danger mt-3 text-uppercase"
        onClick={handleClearList}
      >
        Clear Whole Todo's
      </button>
    </div>
  );
}

export default Todo_List;
