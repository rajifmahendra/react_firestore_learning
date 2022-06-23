import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleetDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })))
      // console.log(data)
    }
    
    getUser()
  }, []);
  return (
    <div className="App">
      <form></form>
      <input 
        placeholder="Name"
        onChange={(event) => {
          setNewName(event.target.value)
        }}
      />
      <input 
        type="number"
        placeholder="Age"
        onChange={(event) => {
          setAge(event.target.value)
        }}
      />

      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  { user.name }
                </th>
                <th>
                  { user.age }
                </th>
                <th>
                  <button className="btn btn-warning" onClick={() => {updateUser(user.id, user.age)}}>
                    Update
                  </button>
                  <button className="btn btn-danger" onClick={() => {deleteUser(user.id)}}>
                  Delete
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
          </>
        );
      })}
    </div>
  );
}

export default App;
