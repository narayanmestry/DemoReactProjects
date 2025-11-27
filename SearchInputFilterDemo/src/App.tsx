import "./App.css";
import { useEffect, useState, type ChangeEvent } from "react";
import type { User } from "./Interface/UserInterface";
function App() {
const [users, setUsers] = useState<User[]>([]);
const [inputValue,setInputValue] = useState<string>("");

const url = "https://jsonplaceholder.typicode.com/users";

useEffect(() => {
  const fetchUser = async()=>{
    try{
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setUsers(data)
    }catch(error){
      console.error("Error fetching users:", error);
    }
  }

  fetchUser();
},[]);

const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  setInputValue(e.target.value);
}

const filteredUsers = users.filter((user) => 
  user.name.toLowerCase().includes(inputValue.toLowerCase())
);

console.log("----",filteredUsers);

  return (
    <div className="App">
      <input type="text" name="inputValue" value={inputValue} onChange={handleInput} />

      <ul>
        {
        filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
