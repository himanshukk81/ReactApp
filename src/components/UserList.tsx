import { useEffect, useState } from "react";
import { Table ,Button } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { useAppSelector } from "../redux/reduxHooks";
import { fetchUsers } from "../redux/usersReducer";
import { map} from "lodash"
import { UserEditModal } from "./UserEditModal";


export const Mode = {
    NEW:'New',
    EDIT:'Edit'
}
export function UserList(){
    const dispatch = useDispatch();

    const {data} = useAppSelector((state)=> state.users.users);

    const [mode, setMode] = useState(Mode.EDIT);

    const [showModal , setShowModal] = useState(false);

    const [userData , setUserData] = useState(null);

    const onUpdateModal = (data:any) =>{
        setMode(Mode.EDIT);
        setUserData(data);
        setShowModal(true);
    }

    const onClose = () =>{
        setShowModal(false);
    }
    console.log('data',data );
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
    return <div>
              <Button  variant="outline-primary">
                    Add User
              </Button>  
              <Table striped bordered hover size="sm" responsive="sm"  className="tableSize">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>

                        {map(data, (d)=>(
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.first_name}</td>
                                <td>{d.last_name }</td>
                                <td>{d.email }</td>
                                <td><Button onClick={onUpdateModal}>Update Details</Button> </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    </Table>

                    <UserEditModal mode={mode} userInfo={userData} show={showModal} onClose={onClose} />
           </div>
}

