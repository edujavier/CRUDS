
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  const[userSelected, setUserSelected]=useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUserList(res.data));
  }, [])
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUserList(res.data));
  }
  const deselectUser = () => {
    setUserSelected(null);
  }
  const selectUsers = (users) => {
    //alert(users.first_name);
    setUserSelected(users)
  }
const deleteUser = (id) => {
const filteredUsers = userList.filter(
  user => user.id !== id
)
setUserList(filteredUsers);
}
  
  console.log(userList)
  return (
    <div className="App">
      <UsersList userList={userList}  selectUsers={selectUsers} deleteUser={deleteUser}/>
      <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser}/>
    </div>
  )
}

export default App
