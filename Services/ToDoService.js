import { ApiService } from "./ApiService";//para trazer os GET, POST, DELETE

const endpoint = 'ToDoList';

export const ToDoService ={
    //metodo para criar uma lista
    lista(){
        return ApiService.get(endpoint);
    },

    //metodo que ira fazer o botão funcionar de Delete
    create (item){
        return ApiService.post(endpoint, item);
    },

    //metodo utilizado para chamar nosso itens da lista
    remove(id){
        return ApiService.delete(endpoint, id);
    }
}