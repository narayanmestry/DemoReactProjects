import { useSelector,useDispatch } from "react-redux"
import { toggleTheme } from "./store/slices/themeSlices";
import { fetchUsers } from "./store/slices/userSlice";
import { AppDispatch,RootState } from "./store/store";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state:RootState)=>state.theme.mode)
  const userData = useSelector((state:RootState)=>state.user)
  console.log(userData);
  
  console.log("Current theme:",theme);
  return (
    <div className="App" style={{
      background:theme==="light"?"#fff":"#333",
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <button onClick={()=>dispatch(toggleTheme())}>{theme==="light"?"Dark":"Light"}</button>

      <button onClick={()=>dispatch(fetchUsers())}>Get Data</button>
      {/* Loading */}
      {userData.loading && <h3>Loading.....</h3>}

      {/* Error */}
      {userData.error && <h3>Error : {userData.error}</h3>}
      <br />
      {/* Show Data */}
      <ul>
        {
          userData.data.map((item)=>(
            <>
            <li>{item?.name}</li>
            </>
          ))
        }
      </ul>
    </div>
  )
}

export default App