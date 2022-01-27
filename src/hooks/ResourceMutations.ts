import { useMutation, UseMutationOptions } from "react-query";
import { addNewResource, deleteResource, editResource, IDeleteResourcePayload, IResourcePayload } from "../utils/apiUtils";

export function useDeleteResources(options?:UseMutationOptions <void, Error, IDeleteResourcePayload >){
    return useMutation(deleteResource ,{
        ...options
    }); 
}

export function useEditResources(options?:UseMutationOptions <void, Error, IResourcePayload >){
    return useMutation(editResource  ,{
        ...options
    }); 
}

export function useAddNewResources(options?:UseMutationOptions <void, Error, IResourcePayload >){
    return useMutation(addNewResource ,{
        ...options
    }); 
}