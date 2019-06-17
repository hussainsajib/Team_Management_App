const employees_url = 'https://glacial-beyond-73904.herokuapp.com/employees';

export default async function(){
    const res = await fetch(employees_url);
    const data = await res.json();
    return data;
        // .then(response =>{
        //     return response.json();
        // })
        // .catch(error=>{
        //     return error;
        // })
}