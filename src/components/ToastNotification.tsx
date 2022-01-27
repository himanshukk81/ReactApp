import { toast } from "react-toastify";

export class ToastNotification{
    public static addErrorMessage(message: string){
        return toast.error(message);
    }
    public static addSuccessMessage(message: string){
        return toast.success(message);
    }
    public static addWarningMessage(message: string){
        return toast.warning(message);
    }
    public static clearAll(){
        return toast.dismiss();
    }
}