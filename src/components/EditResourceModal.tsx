import { useEffect, useState } from "react";
import { Modal,Button, Form } from "react-bootstrap";
import { IResource } from "../modals/apiUtils";

interface IProps{
    show:boolean;
    handleClose:()=>void;
    onSave:(resource:Partial<IResource>)=>void;
    resource:Partial<IResource>;
    mode:string;
}

export const ResourceModal = (props:IProps)=>{
    const [resource , setResource] = useState(props.resource) ;


    useEffect(()=>{
        setResource(props.resource); 
    },[props.resource]);

    const onChangeValue =(event:any)=>{
        setResource({
            ...resource,
            title:event.target.value
        })
    }

    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.mode} Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            

            <Form>
                <Form.Group >
                    <Form.Label>Resource</Form.Label>
                    <Form.Control onChange={onChangeValue} value={resource?.title ?? ''}  />
                </Form.Group>
            </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>props.onSave(resource)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}