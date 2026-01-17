import { useEffect, useState } from "react";
import "./App.css";
import type { User } from "./Interface/UserInterface";


function App() {
  const [userData, setUserData] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const url = "https://jsonplaceholder.typicode.com/users";

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("..", e.target.value);
    setSearchInput(e.target.value)
  }

  // fetch user data
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      <h1>Search Data Using Filter...</h1>
      <input type="text" name="searchInput" onChange={handleSearch} />
      <p style={{color:'white'}}>{searchInput}</p>

      <ul>
        {
          userData.map((user)=>{
            return(
              <>
                <li style={{listStyle:'none',textAlign:'left'}}>{user.name}</li>
              </>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;
