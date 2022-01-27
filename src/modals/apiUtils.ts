export interface IApiObject<T>  {
    data: any; 
    isFetching: boolean , 
    isError:boolean, 
    errorMessage:string, 
    error : any,
}