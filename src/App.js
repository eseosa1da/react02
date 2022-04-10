import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newUser) => {

    setUsersList ((prevUsers) => {
      return [...prevUsers, newUser] });
  }


  return (
    <>

      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>

    </>
  );
}

export default App;
