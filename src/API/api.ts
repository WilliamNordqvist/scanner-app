import axios from "axios"
import { APIStoreObj } from "../hooks/useHook"


 export const saveToDb = (data: APIStoreObj[]) => {
    console.log(JSON.stringify(data))
   axios.post(
     "https://script.google.com/macros/s/AKfycbz4aDhum4mrkMVMnsIgE9yGPEa-gXpoOGD_UGjM4EKIr5whLlBeThgO1vhHnXFNfZnzjw/exec",
     JSON.stringify(data)
   );
 };
 
