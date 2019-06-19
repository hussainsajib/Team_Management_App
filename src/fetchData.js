import axios from 'axios'

const teams_raw_url = 'https://glacial-beyond-73904.herokuapp.com/teams-raw';
const emplpoyees_url = 'https://glacial-beyond-73904.herokuapp.com/employees';
const projects_url = 'https://glacial-beyond-73904.herokuapp.com/projects';

export default async function(){
    var allData = {
        teams: null,
        employees: null,
        projects: null,
    }
    let data = await getEmployee();
    if(data == 1){
        throw new Error("Unable to fetch Employee data");
    } else {
        allData.employees = data;
    }

    data = await getProjects();
    if(data == 1){
        throw new Error("Unable to fetch Project data");
    } else {
        allData.projects = data;
    }

    data = await getTeams();
    if(data == 1){
        throw new Error("Unable to fetch Team data");
    } else {
        allData.teams = data;
    }
    return await allData;

}
async function getEmployee() {
    try {
      const response = await axios.get(emplpoyees_url);
      const data = await response.data;
      return data;
    } catch (error) {
      return 1;
    }
}

async function getProjects() {
    try {
      const response = await axios.get(projects_url);
      const data = await response.data;
      return data;
    } catch (error) {
      return 1;
    }
}

async function getTeams() {
    try {
      const response = await axios.get(teams_raw_url);
      const data = await response.data;
      return data;
    } catch (error) {
      return 1;
    }
}
