<template>
    <div id="teamcard">
        <b-card 
            :title="team.TeamName" 
            class="mb-2"
                
        >
            <b-card-text>
                <team-lead :teamLead="teamLead" />
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

export default {
    name: 'Team',
    data: function(){
        return {
            status: {
                loading: false,
                errored: false
            },
            employees: null,
            teamLead: null,
            teamMembers: []            
        }
    },
    props: [ 'team' ],
    components:{
        Projects,
        TeamLead,
        TeamMembers
    },
    created:function(){
        getEmployeeData()
            .then(employeeData=>{
                this.employees = employeeData;
            })
            .then(()=>{
                this.teamLead = this.employees.find(employee=>employee._id == this.team.TeamLead)
            })
            .then(()=>{
                this.team.Employees.forEach(member=>this.teamMembers.push(this.employees.find(employee=>employee._id == member)))
            })
            .catch(error=>{
                this.errored = true;
            })
    }
}
</script>

<style scoped>
#teamcard{
    margin-bottom: 5%;
    width: 15rem;
}

</style>
