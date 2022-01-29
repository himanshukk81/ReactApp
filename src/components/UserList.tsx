import { useEffect } from "react";
import { Table ,Button } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { useAppSelector } from "../redux/reduxHooks";
import { fetchUsers } from "../redux/usersReducer";
import { map} from "lodash"

export function UserList(){
    const dispatch = useDispatch();

    const {data} = useAppSelector((state)=> state.users.users);

    console.log('data',data );
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
    return <div>
              <Button  variant="outline-primary">
                    Add User
              </Button>  
              <Table striped bordered hover size="sm" responsive="sm">
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
                                <td><Button>Update Details</Button> </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    </Table>
           </div>
}