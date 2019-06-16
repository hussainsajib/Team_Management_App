<template>
    <div>
        <b-card
            :title="team.TeamName"
            class="mb-2"
        >
            <b-card-text>


            </b-card-text>

        </b-card>


        <h2>{{team.TeamName}}</h2>
        <team-lead :teamLead="teamLead" />
        <team-members :key="teamMembers._id" :teamMembers="teamMembers" />
        <projects :projects="team.Projects" />

    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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

<style>

</style>
