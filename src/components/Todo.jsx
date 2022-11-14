import React, { useState } from "react";

const Todo = ({ todo, handleDelete, handleCheckbox, setTodoList }) => {
  const [todoEdit, setTodoEdit] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);
  const handleIsEdit = (id) => {
    setIsEdit(!isEdit);
  };
  let { title, description, dueDate, piority, complete } = todoEdit;
  const handleOnChangeEdit = (e) => {
    setTodoEdit({ ...todoEdit, [e.target.name]: e.target.value });
  };
  const handleEdit = (id) => {
    setTodoList((preState) =>
      preState?.map((todo) =>
        todo.id === id
          ? {
              title: title,
              description: description,
              dueDate: dueDate,
              piority: piority,
              complete: complete,
            }
          : todo
      )
    );
    handleIsEdit();
  };
  return (
    <>
      <div className="todo">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            type="checkbox"
            className="done"
            checked={todo.complete}
            defaultChecked={todo.complete}
            onClick={() => handleCheckbox(todo.id)}
          />
          <p>{todo.title}</p>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <button className="detail" onClick={() => handleIsEdit()}>
            Detail
          </button>
          <button className="remove" onClick={() => handleDelete(todo.id)}>
            Remove
          </button>
        </div>
      </div>
      {isEdit && (
        <div className="edit">
          <input
            type="text"
            placeholder="Add new task..."
            name="title"
            value={title}
            onChange={handleOnChangeEdit}
          />
          <textarea
            name="description"
            id=""
            cols="20"
            rows="7"
            value={description}
            onChange={handleOnChangeEdit}
          ></textarea>
          <div style={{ display: "flex", gap: "20px " }}>
            <div style={{ width: "100%" }}>
              <label id="dueDate">Due Date</label>
              <input
                name="dueDate"
                type="date"
                value={dueDate}
                onChange={handleOnChangeEdit}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label id="piority">Piority</label>
              <select
                value={piority}
                name="piority"
                onChange={handleOnChangeEdit}
              >
                <option value="normal" selected>
                  normal
                </option>
                <option value="abc">abc</option>
              </select>
            </div>
          </div>
          <button className="add" onClick={() => handleEdit(todo.id)}>
            Update
          </button>
        </div>
      )}
    </>
  );
};

export default Todo;
