
import React,{ FC, useState, ChangeEventHandler, ChangeEvent, FormEvent } from 'react'
import { IUserAdd,IUser } from './userApi'



const AddUserForm:FC<IUserAdd> = (props) => {
    //const {first_name} = props;
    const initialFormState:IUser = {id:0,first_name:"",last_name:"",email:"",avatar:""};
     const [user, setUser] = useState<IUser>(initialFormState)
     const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
         console.log(e.target.name);
        const {name,value} =e.target;
        setUser({...user,[name]:value})
     }
     const handleOnSubmit =(e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if(!user.first_name || !user.last_name  ||!user.email) return;
        props.addUser(user);
        setUser(initialFormState);

     }
  return (
    <form onSubmit={handleOnSubmit}>
        <label>First Name</label>
        <input type="text" name="first_name" value={user.first_name} onChange={handleInputChange}></input>
        <label>Last Name</label>
        <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange}></input>
        <label>Email</label>
        <input type="text" name="email" value={user.email} onChange={handleInputChange}></input>
        <button>Add new User</button>
    </form>
  )
}

export default AddUserForm
