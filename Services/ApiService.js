const url = '';

export const ApiService ={

    get(endpoint){
        return fetch(`${url} ${endpoint}`).then(Response => Response.json())//convertendo para json
    },

    
    post(endpoint, data){
        return fetch(`${url} ${endpoint}` ,{
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(Response => Response.json())
    },

    delete(endpoint, id){
        return fetch(`${url} ${endpoint}?id=${id}`, {
            method: 'DELETE'
        })
        .then(Response => Response.json())
    }

}
