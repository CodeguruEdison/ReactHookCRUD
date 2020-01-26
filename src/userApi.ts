//import { IUser } from './userApi';

import axios from "axios";
export interface IUser {
    id:number,
    email:string,
    first_name:string,
    last_name:string
    avatar?:string
    
}
export interface IUserAdd  {
 addUser(user: IUser):void;
 
}
export interface IUserEdit {
    deleteUser(Id:number):void;
    editUser(user:IUser):void;
}
export const  getUsers = async()=>{
    try{
     let res= await axios.get("https://reqres.in/api/users");
     // console.log(res);
     const data =   res.data;
     return data;
    }
    catch(error){
        console.log(error);
    }
}