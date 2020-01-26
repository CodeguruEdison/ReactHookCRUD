import React from 'react';
import { IUser } from '../userApi';
export interface IUserList {
    users:IUser[];
    deleteUser(Id:number):void;
    editUser(user:IUser):void;
}

const UserTable:React.FC<IUserList> = (props) => {
    const {users,deleteUser,editUser}=props;
    
    return(
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          { users.length > 0 ? (
                users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>
                        <button className="button muted-button" onClick={()=>editUser(user)} >Edit</button>
                        <button className="button muted-button" onClick={()=>deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            ) 
            : (<tr>
                 <td colSpan={3}>No users</td>
            </tr> )
          }  

        {/*  { users.length > 0 ? (
            users.map(user=>(
                <tr>
                    <td>Name data</td>
                    <td>Username data</td>
                    <td>
                    <button className="button muted-button">Edit</button>
                    <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            ))
            }?(
                <tr>
                <td colSpan={3}>No users</td>
            </tr>
            )*/}
        </tbody>
      </table>
    );
}
export default UserTable;