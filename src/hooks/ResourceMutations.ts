import { useMutation, UseMutationOptions } from "react-query";
import { deleteResource, IDeleteResourcePayload } from "../utils/apiUtils";

export function useDeleteResources(options?:UseMutationOptions <void, Error, IDeleteResourcePayload >){
    return useMutation(deleteResource ,{
        ...options
    }); 
}