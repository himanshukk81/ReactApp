import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useAppSelector } from "../redux/reduxHooks";
import { fetchUsers } from "../redux/usersReducer";

export function UserList(){
    const dispatch = useDispatch();

    const data = useAppSelector((state)=> state);

    console.log('data',data );
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
    return <div>
                User List
           </div>
}