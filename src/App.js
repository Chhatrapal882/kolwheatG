import './App.css';
import { formatUserName } from './utils';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Todo from './component/Todo'


function App() {
  const [users, setUsers] = useState([]);
  console.log('users', users)

  const myfunc = (value) => {
    console.log('fdf')
  }
  useEffect(() => {
   let mounted = true;

   const getUsers = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
     if(mounted) {
      setUsers(response.data);      
     }
   }

   getUsers()
  }, []);

  return (
    <div className="App">
      <p data-testid="para-id">to be the freta</p>
      {users && users.map(res=>{
        return <h1>{res.name} {formatUserName(res.username)}</h1>
      })}
      <Todo myfunc = {myfunc} />
    </div>
  );
}

export default App;
