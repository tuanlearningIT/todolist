import React, { useEffect, useRef } from "react";

const NewTask = ({ addNewTask, initState, handleOnChange, inputRef }) => {
  let { title, description, dueDate, piority, complete } = initState;

  return (
    <div className="new-task">
      <form onSubmit={addNewTask}>
        <h3>New Task</h3>
        <input
          type="text"
          placeholder="Add new task..."
          name="title"
          value={title}
          ref={inputRef}
          onChange={handleOnChange}
        />
        <textarea
          name="description"
          id=""
          cols="20"
          rows="7"
          value={description}
          onChange={handleOnChange}
        ></textarea>
        <div style={{ display: "flex", gap: "20px " }}>
          <div style={{ width: "100%" }}>
            <label id="dueDate">Due Date</label>
            <input
              name="dueDate"
              type="date"
              value={dueDate}
              onChange={handleOnChange}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label id="piority">Piority</label>
            <select value={piority} name="piority" onChange={handleOnChange}>
              <option value="normal" selected>
                normal
              </option>
              <option value="abc">abc</option>
            </select>
          </div>
        </div>

        <button className="add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTask;
