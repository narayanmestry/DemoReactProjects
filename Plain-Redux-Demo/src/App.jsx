import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { toggleColor } from "./redux/action";
function App() {

  const toggle = useSelector((state)=>state.toggle);
  const dispatch = useDispatch();
  console.log(toggle)
  return (
    <>
    <h1 style={{color:toggle?"red":"white"}}>Toggle color </h1>
    <div>{toggle}</div>
    <button onClick={()=>{dispatch(toggleColor())}}>
      Toggle</button>

    </>
  );
}

export default App;
