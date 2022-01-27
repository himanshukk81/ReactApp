 import { find, map } from "lodash";
import { useState } from "react";
import { ListGroup, Spinner ,Button } from "react-bootstrap";
import { useAddNewResources, useDeleteResources, useEditResources } from "../hooks/ResourceMutations";
import { useGetResource } from "../hooks/ResourcesQuery"
import { IResource } from "../modals/apiUtils";
import { ResourceModal } from "./EditResourceModal";
import { ToastNotification } from "./ToastNotification";


const Mode = {
    NEW :'New',
    EDIT:'Edit'
}
export const Resources = ()=>{

    const {data ,isLoading , isError ,refetch } =useGetResource();
    console.log('data', data);

    const deleteMutate = useDeleteResources();
    const [mode, setMode] = useState(Mode.EDIT);
    const [showModal, setShowModal] = useState(false);
    const [resource ,setResource] = useState<Partial<IResource>>({});
    const addNewMutate = useAddNewResources();
    const editMutate = useEditResources();

    // close modal
    const handleClose = ()=>{
        setShowModal(false);
        setResource({});
    }
    // show Modal
    const handleShow = (id:number | undefined, mode:string) =>{
        setShowModal(true);
        setResource(id === undefined ? {}: find(data, d=> d.id===id) || {});
        setMode(mode);
    }

    // save or update resources.
    const onSave = async (res:Partial<IResource>)=>{
        console.log("save");
        console.log({res});
        console.log({resource});

        if(mode === Mode.EDIT){
            await editMutate.mutateAsync({resource:res});
            handleClose();
            refetch();
            ToastNotification.addSuccessMessage('Edited Successfully');
        }
        else{
            await addNewMutate.mutateAsync({resource:res});
            handleClose();
            refetch(); 
            ToastNotification.addSuccessMessage('Added New Resource');
        }
    }

    // delete resources.
    const deleteResource = async (id:number) =>{
        try{
            await deleteMutate.mutateAsync({
                id:id
            });
            refetch();

            ToastNotification.addSuccessMessage('Successfully Deleted Resources');
        }
        catch(e){
            ToastNotification.addErrorMessage('Error In Deleting Resource');
        }
    }


    if(isLoading){
        return <Spinner animation="border" />
    }
    else if(isError){
        return <div>Data Fetching Error</div>
    }

    // render buttons 
    const renderButtons = (id: number) =>{
        return(
            <div>
                <Button variant="outline-primary" onClick={()=> handleShow(id, Mode.EDIT)  }>Edit</Button>
                <Button variant="outline-primary" onClick={()=>deleteResource(id)} >Delete</Button>
            </div>
        )
    }
    return(
        <div className="mt-2" > 
            <Button className="mb-4" onClick={()=> handleShow(undefined, Mode.NEW)} variant="primary" size="lg">
                Add Resource
            </Button>
           <div>
                {map(data, (d) =>
                    <ListGroup key={d.id} horizontal="sm">
                        <ListGroup.Item>{d.id}</ListGroup.Item>
                        <ListGroup.Item>{d.title}</ListGroup.Item>
                        {renderButtons(d.id || 0)}
                    </ListGroup>
                )}
            </div>    
            <ResourceModal mode={mode} 
                           show={showModal}  
                           handleClose={handleClose}
                           onSave={onSave}  
                           resource={resource}              
            />
        </div>
    )
}