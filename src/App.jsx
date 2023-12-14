import { useState } from 'react';
import User from './compo/user/User'
import { useEffect } from 'react';
import AddUser from './compo/user/AddUser';
function App() {
  let [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((usr) => {
        let rawUsers = usr.results;
        let filterUsers = rawUsers.map((u) => {
          return {
            uuid: u.login.uuid,
            name: `${u.name.title} ${u.name.first} ${u.name.last}`,
            phone: u.phone,
            cell: u.cell,
            image: u.picture.thumbnail,
          };
        });
        setUsers(filterUsers);
      })
      .catch((err) => console.log(err));
  }, [])

  const handleShowForm = () => {
    setShowForm(!showForm);
  }

  const removeUser = (uuid) => {
    let filterUsers = users.filter((usr) => usr.uuid != uuid);
    setUsers(filterUsers);
  } 

  const addUserHandler = (user) => {
    let newUser = [user, ...users];
    setUsers(newUser);
  }

  return (
    <div
      className="container mx-auto mt-5"
      style={{
        width: "40%",
      }}
    >
      <button className="btn btn-primary mb-3" onClick={handleShowForm}>
        Add User
      </button>
      {showForm && <AddUser addUserData={addUserHandler} />}
      {users.map((usr) => (
        <User userData={usr} key={usr.uuid} remove={removeUser} />
      ))}
    </div>
  );
}

export default App
