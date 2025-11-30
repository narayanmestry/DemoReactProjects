import "./App.css";
import { useSelector, useDispatch } from "react-redux";
//actions
import { toggleColor } from "./redux/action";
import { fetchUser } from "./redux/action";

function App() {
  const toggle = useSelector((state) => state.toggleR.toggle);
  const { loading, users, error } = useSelector((state) => {
    console.log(state);
    return state.userR;
  });

  const dispatch = useDispatch();
  console.log(users);

  return (
    <>
      <h1 style={{ color: toggle ? "red" : "white" }}>Toggle color </h1>
      <div>{toggle}</div>
      <button
        onClick={() => {
          dispatch(toggleColor());
        }}
      >
        Toggle
      </button>
      <hr />

      <button
        onClick={() => {
          dispatch(fetchUser());
        }}
      >
        Fetch UserList
      </button>
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </>
  );
}

export default App;
