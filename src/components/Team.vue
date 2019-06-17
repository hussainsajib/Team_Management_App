<template>
    <div id="teamcard">
        <b-card 
            :title="team.TeamName" 
            class="mb-2"
                
        >
            <b-card-text>
                <team-lead :teamLead="teamLead" :allEmployees="employees" />
                <team-members :key="teamMembers._id" :teamMembers="teamMembers" />
                <projects :projects="team.Projects" />
            </b-card-text>
        </b-card>
    </div>
</template>

<script>


import getEmployeeData from '../employees'

import Projects from './Projects'
import TeamLead from './TeamLead'
import TeamMembers from './TeamMembers'
import employees from '../employees';

export default {
    name: 'Team',
    data: function(){
        return {
            status: {
                loading: false,
                errored: false
            },
            teamLead: null,
            teamMembers: null,
            teamProjects:null,
            teamName: null,            
        }
    },
    props: [ 'team', 'projects', 'employees'],
    components:{
        Projects,
        TeamLead,
        TeamMembers
    },
    created: async function(){
        await setTeamLead();
        await setTeamMembers();
    },
    mehtods:{
        setTeamLead: async function(){
            console.log(employees);
            this.teamLead = await this.employees.find(employee=>employee._id == this.team.TeamLead);
        },
        setTeamMembers: async function(){
            console.log(this.teamMembers);
            this.setTeamMembers = await this.team.Employees.map(member=>this.employees.find(employee=>employee._id == member));
        }
    }
}
</script>

<style scoped>
#teamcard{
    margin-bottom: 5%;
    width: 15rem;
}

</style>
