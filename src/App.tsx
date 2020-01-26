import React, { useState, useEffect } from 'react';

import './App.css';
import UserTable from './tables/UserTables';
import { getUsers, IUser } from './userApi';
import AddUserForm from './AddUser';
import EditUser from './EditUser';

interface IBookState {
  title:string,
  available:boolean
}
const App: React.FC = () => {
  /*const initialBookState: IBookState = {
    title:'',
    available:false
  }*/
  
  const [users, setUsers] = useState<IUser[]>([])
  const[editing,setEditing] = useState<boolean>(false);
  const initialFormState ={} as IUser;
  const[currentUser,setCurrentUser]=useState<IUser>(initialFormState);

  useEffect(() => {
    getUsers().then(data=>{
       //console.log(data.data);
      setUsers(data.data)
    }
      ,()=>{console.log(users)});
    //console.log(users);
    //setUsers(usersList);
     //setUsers(getUsers());
  }, []);

  const editUser =(user:IUser):void =>{
    setEditing(true);
    
    setCurrentUser(user);
  }

  const addUser =(user:IUser):void =>{
     user.id = users.length+1

     setUsers([...users,user]);
  }
  const deleteUser= (id:number) =>{
    setEditing(false);
     setUsers(users.filter(user=>user.id !==id));
  }
  const updateUser = (id:number,updatedUser:IUser):void =>{
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser  : user )))
   
  }

  //console.log(users);
  //const [book, setBook] = useState(initialBookState);
  
  /*const updateBook =(book:IBookState)=>{
     setBook({title:book.title,available:book.available});
  }*/
  return (
    <div className="container">
      <h1>CRUD APP with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ?(
            <div>
              <h2>Edit User</h2>
              <EditUser  editing={false} 
              setEditing={setEditing} 
              updateUser={updateUser} 
              currentUser={currentUser} ></EditUser>
            </div>
          ):
          (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} ></AddUserForm>
            </div>
          )
        
        }
         
        </div>
         <div className="flex-large">
           <h2>View User</h2>
          
           <UserTable users={users} deleteUser={deleteUser} editUser={editUser}  ></UserTable>
         </div>
      </div>
    </div>
  );
}

export default App;
