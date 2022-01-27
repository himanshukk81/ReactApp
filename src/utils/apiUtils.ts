import axios from "axios";
import { IApiObject } from "../modals/apiUtils";

export function getApiObject<T>(
        // data: T = undefined,  // need to resolve
        data: any = undefined, 

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
        error
    }
}   

export async function getUserList(){
    const userResponse = await axios.get('https://reqres.in/api/users')
    return userResponse;
}