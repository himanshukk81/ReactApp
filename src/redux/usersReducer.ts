
import { createSlice, PayloadAction ,combineReducers } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { IApiObject } from '../modals/apiUtils';
import { getApiObject, getUserList } from '../utils/apiUtils';
export interface IUser {
    first_name:string;
    id:string;
    last_name:string;
    email:string;
    avator:string;
}
export interface IUserListState {
    users: IApiObject<IUser[]>
}

export const defaultState: IUserListState ={
    users:getApiObject([]), 
}

export const usersReducer = createSlice({
    name: 'userList',
    initialState:defaultState,
    reducers:{
        setUserList:(state, action: PayloadAction<IApiObject<IUser[]>>)=>{
            // console.log({actionPayload:action.payload});
            state.users = action.payload
        }
    }
})

export const {setUserList} = usersReducer.actions;

export const fetchUsers = () => async(dispatch: Dispatch<any>):Promise<void> => {
    
    try{
        dispatch(setUserList(getApiObject([], true)));
        const userResponse = await getUserList();

        console.log({defaultState});

        dispatch(setUserList(getApiObject(userResponse.data.data)));
    }
    catch(error){
        // dispatch(setUserList(getApiObject([],false,true, error?.message,error))); // error in error.message

        console.log({error});
        dispatch(setUserList(getApiObject([],false,true, '',error))); 
    }   

}

export default usersReducer.reducer;