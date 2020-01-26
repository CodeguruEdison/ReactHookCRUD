import React, { FC, ChangeEvent,useState, FormEvent,useEffect } from 'react';
import { IUser } from './userApi';

export interface IUserEdit {
    currentUser:IUser,
    updateUser(id:number,user:IUser):void;
    setEditing(value:boolean):void;
    editing:boolean
}

export const EditUser:FC<IUserEdit> = (props) => {
    const{currentUser,updateUser,setEditing,editing} = props;
    const[user,setUser] = useState<IUser>(currentUser);
    useEffect(()=>{
        setUser(currentUser);
    },[props])
    const handleInputChange =(e:ChangeEvent<HTMLInputElement>) =>{
        const {name,value} =e.target;
        setUser({...user,[name]:value});
    }
    const handleOnSubmit =(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        updateUser(user.id,user);
    }
    return (
        <form onSubmit={handleOnSubmit}>
        <label>First Name</label>
        <input type="text" name="first_name" value={user.first_name} onChange={handleInputChange}></input>
        <label>Last Name</label>
        <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange}></input>
        <label>Email</label>
        <input type="text" name="email" value={user.email} onChange={handleInputChange}></input>
        <button>Update User</button>
        <button onClick={()=>setEditing(false)} className="button muted-button">Cancel</button>
    </form>
    )
}
export default EditUser;
