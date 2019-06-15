const teams_raw_url = 'https://glacial-beyond-73904.herokuapp.com/teams-raw';
//const emplpoyees_url = 'https://glacial-beyond-73904.herokuapp.com/employees';
//const projects_url = 'https://glacial-beyond-73904.herokuapp.com/projects';
/*
const allData = {
    teams: null,
    employees: null,
    projects: null
}
*/

export default function (){
    return fetch(teams_raw_url)
        .then(response =>{
            return response.json();
        })
        .catch(error=>{
            return error;
        })
}

/*
export default function(){
    fetchData(teams_raw_url)
        .then(teams => allData.teams = teams)
        .then(fetchData(emplpoyees_url)
                    .then(employees => allData.employees = employees)
                    .then(fetchData(projects_url)
                                .then(projects => allData.projects = projects)
                                .then(()=> allData)
                                .catch(error=>"Unable to fetch Projects data"))
                    .catch(error=> "Unable to fetch Employee data"))
        .catch(error=> "Unable to fetch Team data")
}


*/