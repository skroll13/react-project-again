import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addUser } from './features/Users'

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)
  const [name, setName] = useState("")
  const [username, setUsername] = useState("");
  
  return (
    <div className='App'>
      {" "}
      <div className='addUser'>
        <input 
        type="text" 
        placeholder="Name..." 
        onChange={(event) => 
        setName(event.target.value)}
        />
        <input 
        type="text" 
        placeholder="Username..." 
        onChange={(event) => 
          setUsername(event.target.value)}
        />
        <button onClick={dispatch(addUser({id: 1, name, username}))}>Add User</button>
      </div>
      <div className='displayUsers'></div>
      {userList.map((user) =>{
        return (
        <div>
        <h1> {user.name} </h1>
        <h2> {user.username} </h2>
        </div>
        )
      })}
    </div>
  );
}

export default App;
