const projects_url = 'https://glacial-beyond-73904.herokuapp.com/projects';

export default async function(){
    const res = await fetch(projects_url);
    const data = await res.json();
    return data;
        // .then(response =>{
        //     return response.json();
        // })
        // .catch(error=>{
        //     return error;
        // })
}