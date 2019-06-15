<template>
    <div class="Teams">
        <team
            v-for="team of teams"
            :key="team._id"
            :team="team"
         />

    </div>
</template>

<script>
import getTeamData from "../teams_raw"
import getEmloyeeData from "../employees"
import getProjectData from "../Projects"
import Team from "./Team"
import employees from '../employees';

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
    created: function(){
        getTeamData()
            .then(teams=>this.teams = teams)
            .then(()=>{
                getEmloyeeData()
                    .then(employees=>this.employees = employees)
                    .then(getProjectData()
                                .then(projects => this.projects = projects)
                                .catch(error => this.status.errored = true)
                                )
                    .catch(error => this.status.errored = true)
            })
            .catch(error => this.status.errored = true)
    },
}
</script>

<style>

</style>
