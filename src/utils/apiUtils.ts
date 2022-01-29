import axios from "axios";
import { IApiObject } from "../modals/apiUtils";
import { IUser } from "../redux/usersReducer";

export function getApiObject<T>(
        // data: T = undefined,  // need to resolve
        data: any = undefined, 
        isUpdating = false,
        isFetching =false, 
        isError= false, 
        errorMessage ='', 
        // error : Error = null, // need to resolve error thing
        error : any = null,

): IApiObject<T>{
    return {
        data,
        isFetching,
        isError,
        errorMessage,
        error,
        isUpdating
    }
}   

export async function getUserList(){
    const userResponse = await axios.get('https://reqres.in/api/users')
    return userResponse;
}

export async function updateUserDetails(user: IUser){
    const userResponse = await axios.put(`https://reqres.in/api/users/${user.id}`)
    return userResponse;
}