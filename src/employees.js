const emloyees_url = 'https://glacial-beyond-73904.herokuapp.com/employees';

export default function(){
    return fetch(employees_url)
        .then(response =>{
            return response.json();
        })
        .catch(error=>{
            return error;
        })
}