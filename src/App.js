import logo from "./logo.svg";
import "./App.css";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [initState, setinitState] = useState({
    title: "",
    description: "",
    dueDate: "",
    piority: "normal",
    complete: "",
  });
  const inputRef = useRef(null);
  let { title, description, dueDate, piority, complete } = initState;

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodoList(JSON.parse(todos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addNewTask = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate || !piority) {
      return;
    }
    setTodoList([
      ...todoList,
      {
        id: v4(),
        title: title,
        description: description,
        dueDate: dueDate,
        piority: piority,
        complete: completed,
      },
    ]);
    setinitState({
      title: "",
      description: "",
      dueDate: "",
      piority: "normal",
    });
    inputRef.current.focus();
  };

  const handleOnChange = (e) => {
    setinitState({ ...initState, [e.target.name]: e.target.value });
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleCheckbox = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              complete: !completed,
            }
          : todo
      )
    );
    setCompleted(!completed);
  };

  return (
    <div className="App">
      <NewTask
        addNewTask={addNewTask}
        initState={initState}
        handleOnChange={handleOnChange}
        inputRef={inputRef}
      />
      <TodoList
        initState={initState}
        todoList={todoList}
        handleDelete={handleDelete}
        handleCheckbox={handleCheckbox}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
