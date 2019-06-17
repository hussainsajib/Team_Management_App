<template>
    <div id="teamcard">
        <div v-if="status.errored">
            <p>Team comp in error</p>
        </div>
        <div v-else>
            <div v-if="status.loading">
                <h2>Still loading team</h2>
            </div>
            <div v-else>
                <b-card 
                :title="team.TeamName" 
                class="b-card"
                >
                    <b-card-text>
                        <team-lead :teamLead="teamLead" :allEmployees="employees" />
                        <team-members :key="teamMembers._id" :teamMembers="teamMembers" />
                        <projects :teamProjects="teamProjects" :allProjects="projects" />
                    </b-card-text>
                </b-card>
            </div>
        </div>

        
        
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
    created: function(){
        this.status.loading = true;
        this.setTeamLead();
        this.setTeamMembers();
        this.teamProjects = this.team.Projects;
        this.teamName = this.team.TeamName;
        this.status.loading = false;
    },
    methods:{
        setTeamLead: function(){
            this.teamLead = this.employees.find(employee=>employee._id == this.team.TeamLead);
        },
        setTeamMembers: function(){
            this.teamMembers = this.team.Employees.map(member=>this.employees.find(employee=>employee._id == member));
        },
        setProjects: function(){
            this.teamProjects = this.team
        }

    }
}
</script>

<style scoped>
.b-card{
    margin-bottom: 5%;
    width: 15rem;
}

</style>
