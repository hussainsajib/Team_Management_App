const projects_url = 'https://glacial-beyond-73904.herokuapp.com/projects';

export default function(){
    return fetch(projects_url)
        .then(response =>{
            return response.json();
        })
        .catch(error=>{
            return error;
        })
}