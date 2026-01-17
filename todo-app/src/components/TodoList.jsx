import { useEffect, useState } from "react";
import { getAllTodos } from "../service/userservice";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [editText, setEditText] = useState("");

  // fetch all todos from json server
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  // delete the todo
  const deleteTodo = (id) => {
    console.log("Delete todo with id:", id);
    setTodos((prev) => {
      return prev.filter((data) => {
        return data.id !== id;
      });
    });
  };

  // handle complete task
  const handleCompleteTask = (id) => {
    setTodos((prev) =>
      prev.map((data) => (data.id === id ? { ...data, completed: true } : data))
    );
  };

  return (
    <div>
      <h4>Pending Task ..</h4>
      <ul className="todolist">
        {todos
          .filter((data) => data.completed === false)
          .map((todo) => {
            return (
              <li key={todo.id}>
                {editId === todo.id ? (
                  <>
                    <input
                      type="text"
                      defaultValue={todo.title}
                      onChange={(e) => setEditText(e.target.value)}
                    />

                    <button
                      onClick={(e) => {
                        setEditId(-1);
                        setTodos((prev) =>
                          prev.map((data) =>
                            data.id === editId
                              ? { ...data, title: editText }
                              : data
                          )
                        );
                      }}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <div>{todo.title}</div>
                )}

                <button onClick={() => setEditId(todo.id)}>Edit</button>
                <button onClick={(e) => deleteTodo(todo.id)}>X</button>
                <button onClick={() => handleCompleteTask(todo.id)}>
                  done
                </button>
              </li>
            );
          })}
      </ul>

      <h4>Completed Task</h4>
      <ul className="todolist">
        {todos
          .filter((todo) => {
            return todo.completed === true;
          })
          .map((todo) => {
            return (
              <li key={todo.id}>
                <div>{todo.title}</div>
              <button onClick={(e) => deleteTodo(todo.id)}>X</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TodoList;
