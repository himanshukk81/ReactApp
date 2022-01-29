import { useState } from "react";
import { Modal,Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { IUser } from "../redux/usersReducer";

interface IProps{
    show:boolean;
    mode:string;
    onClose:()=> void;
    onSave?:()=>void;
    userInfo: IUser;
}

export function UserEditModal(props: IProps){

    const {show,mode,onClose,userInfo} =props;

    const [userInfoState, setUserInfoState]= useState(userInfo);
    
    const dispatch = useDispatch();

    const onSaveModal = ()=>{
        if(mode=='edit'){
            dispatch(updateUser(userInfoState))
        }
        else{

        }
    }

    const onChangeValue = (fieldName:string,value:string) =>{
        setUserInfoState({
           ...userInfoState,
           [fieldName]:value
        })
    }
    return(

        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" value={userInfo.first_name} 
                        onChange={(event)=>onChangeValue('first_name',event.target.value)} 
                    />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={userInfo.last_name} 
                     onChange={(event)=>onChangeValue('last_name',event.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userInfo.email} 
                     onChange={(event)=>onChangeValue('email',event.target.value)} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>  
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onSaveModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

       
    )
}