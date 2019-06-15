const teams_raw_url = 'https://glacial-beyond-73904.herokuapp.com/teams-raw';

export default function(){
    return fetch(teams_raw_url)
        .then(response =>{
            return response.json();
        })
        .catch(error=>{
            return error;
        })
}