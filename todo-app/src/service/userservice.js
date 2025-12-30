import AxiosInstance from "./AxiosInstance";


export const getAllTodos = async() =>{
    try{
        const response = await AxiosInstance.get("/todos");
        return response.data;
    }catch(error){
        console.error("Error fetching todos:", error);
        throw error;
    }
}