
import { createSlice, PayloadAction ,combineReducers } from '@reduxjs/toolkit';
import { map } from 'lodash';
import { Dispatch } from 'react';
import { IApiObject } from '../modals/apiUtils';
import { getApiObject, getUserList, updateUserDetails } from '../utils/apiUtils';
import { IStateReduced } from './store';
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

// fetch user list
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
        dispatch(setUserList(getApiObject([],false))); 
    }   

}

// 
export const updateUser = (userDetails:IUser) => async(dispatch: Dispatch<any>,getState:() => IStateReduced):Promise<void> => {
    try{

        const existingData = getState()?.users?.users?.data;

        dispatch(setUserList(getApiObject([],false,true)));
        const userResponse = await updateUserDetails(userDetails);

        const newSelection = map(existingData, (e)=>{
            if(e.id === userDetails.id){
                return userResponse.data;
            }else{
                return e;
            }
        })
        dispatch(setUserList(getApiObject(userResponse.data.data)));
    }
    catch(error){
        // dispatch(setUserList(getApiObject([],false,true, error?.message,error))); // error in error.message
        console.log({error});
        dispatch(setUserList(getApiObject([],false,true))); 
    }   

}

export default usersReducer.reducer;