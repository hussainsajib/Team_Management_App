<template>
    <div>
        <h2>{{team.TeamName}}</h2>
        <projects 
            :projects="team.Projects" 
        />
        <team-lead
            :key="teamLead._id" 
            :teamLead="teamLead"
        />

    </div>
</template>

<script>
import getEmployeeData from '../employees'

import Projects from './Projects'
import TeamLead from './TeamLead'

export default {
    name: 'Team',
    data: function(){
        return {
            status: {
                loading: false,
                errored: false
            },
            employees: null,
            teamLead: null            
        }
    },
    props: [ 'team' ],
    components:{
        Projects,
        TeamLead
    },
    created:function(){
        getEmployeeData()
            .then(employeeData=>{
                this.employees = employeeData;
            })
            .then(()=>{
                this.teamLead = this.employees.find(employee=>employee._id == this.team.TeamLead)
            })
            .catch(error=>{
                this.errored = true;
            })
    }
}
</script>

<style>

</style>
