import React from 'react';

const UsersList = ({ userList, selectUsers, deleteUser }) => {
  return (
    <div className="cards">
      <ul>
        {
          userList.map(users => (
            <li key={users.id}>
              <h2>{users.first_name}</h2>
              <h3><i class="fa-solid fa-envelope"></i> {users.email}</h3>
              <p><i class="fa-solid fa-cake-candles"></i> {users.birthday}</p>
              <button onClick={() => selectUsers(users)}><i class="fa-solid fa-user-pen"></i></button>
              <button onClick={() => deleteUser(users.id)}><i class="fa-solid fa-trash"></i></button>
            </li>
          ))
        }
      </ul>
    </div>

  );
};

export default UsersList;