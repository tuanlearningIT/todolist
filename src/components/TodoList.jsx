import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, handleDelete, handleCheckbox, setTodoList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const todo = {};
  const [todoEdit, setTodoEdit] = useState(todo);
  let { title, description, dueDate, piority, complete } = todoEdit;
  //const [listSearch, setListSearch] = useState(todoList);
  const [inputSearch, setInputSearch] = useState("");
  const handleIsEdit = (id) => {
    setIsEdit(!isEdit);
  };
  const listSearch = todoList.filter((todo) => {
    return todo.title.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1;
  });
  const handleDone = () => {
    setTodoList((pre) =>
      pre.map((todo) => {
        return { ...todo, complete: true };
      })
    );
  };
  const RemoveAll = () => {
    setTodoList([]);
  };
  const handleOnChangeEdit = () => {
    //setTodoList([]);
  };

  return (
    <>
      <div className="todo-list">
        <div className="todo-list-top">
          <h3>To Do List</h3>
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          {listSearch?.map((todo) => (
            <>
              <Todo
                id={todo.id}
                key={todo.id}
                todo={todo}
                handleIsEdit={handleIsEdit}
                isEdit={isEdit}
                handleDelete={handleDelete}
                handleCheckbox={handleCheckbox}
                setTodoList={setTodoList}
              />
            </>
          ))}
        </div>

        <div className="bulk-action">
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p>Bulk Action:</p>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <button className="detail" onClick={handleDone}>
              Done
            </button>
            <button className="remove" onClick={RemoveAll}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
