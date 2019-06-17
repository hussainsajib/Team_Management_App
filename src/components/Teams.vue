<template>
    <div id="teams">
        <team
            v-for="team of teams"
            :key="team._id"
            :team="team"
         />

    </div>
</template>

<script>
import { sortBy } from 'lodash'

import getTeamData from "../teams_raw"
import Team from "./Team"

export default {
    name: "Teams",
    data: function(){
        return {
            status: {
                loading: false,
                errored: false
            },
            teams: null,
            employees: null,
            projects: null
        }
    },
    components: {
        Team
    },
    created: async function(){
        /*
        getTeamData()
            .then(teams=> this.teams = sortBy(teams,(team)=>team.TeamName))
            .catch(error => this.status.errored = true)
        */
        var allData;
        try{
            allData = await getTeamData();
            this.teams = await allData.teams;
            this.employees = await allData.employees;
            this.projects = await allData.projects;
            //console.log(await allData.employees);
        } catch(error){
            console.log(error);
        }     
    },
}
</script>

<style>
#teams{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
