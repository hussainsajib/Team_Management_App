<template>
    <div>
        <div v-if="status.errored">
            <p>Team comp in error</p>
        </div>
        <div v-else>
            <div v-if="status.loading">
                <h2>Still loading team</h2>
            </div>
            <div v-else>
                <b-card
                class="b-card"
                style="max-width: 20rem"
                >
                    <h4 slot="header">{{team.TeamName}}</h4>
                    <img src="../assets/save.png" alt="save" slot="header" v-if="status.enableSave" class="save-icon" @click="saveTeam">
                    <b-card-text>
                        <team-lead :teamLead="teamObject.teamLead" :allEmployees="employees" @click="leaderSelected" />
                        <team-members :key="teamObject.teamMembers._id" :teamMembers="teamObject.teamMembers" :allEmployees="employees" @click="memberChanged"/>
                        <projects :teamProjects="teamObject.teamProjects" :allProjects="projects" @click="projectsChanged"/>
                    </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import Projects from './Projects'
import TeamLead from './TeamLead'
import TeamMembers from './TeamMembers'

export default {
    name: 'Team',
    data: function(){
        return {
            status: {
                loading: false,
                errored: false,
                enableSave: false
            },
            teamObject: {
                teamName: null,
                teamProjects:null,
                teamMembers: null,
                teamLead: null,
            }          
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
        this.setTeamLead(this.team.TeamLead);
        this.setTeamMembers();
        this.teamObject.teamProjects = this.team.Projects;
        this.teamObject.teamName = this.team.TeamName;
        this.status.loading = false;
    },
    methods:{
        setTeamLead: function(leaderID){
            this.teamObject.teamLead = this.employees.find(employee=>employee._id == leaderID);
        },
        setTeamMembers: function(){
            this.teamObject.teamMembers = this.team.Employees.map(member=>this.employees.find(employee=>employee._id == member));
        },
        setProjects: function(){
            this.teamProjects = this.team;
        },
        leaderSelected: function(item){
            this.status.enableSave = true;
            this.setTeamLead(item);
        },
        saveTeam: function(){
            this.uploadData();
            this.status.enableSave = false;
        },
        memberChanged: function(list){
            this.status.enableSave = true;
            this.teamObject.teamMembers = list;
        },
        projectsChanged: function(list){
            this.status.enableSave = true;
            this.teamObject.teamProjects = list;
        },
        uploadData: async function(){
            axios.put(`https://glacial-beyond-73904.herokuapp.com/team/${this.team._id}`,{
                TeamName: this.teamObject.teamName,
                Projects: this.teamObject.teamProjects,
                Employees: this.teamObject.teamMembers,
                TeamLead: this.teamObject.teamLead
            }).then(response=>window.alert(response.data.message))
            .catch(error=>console.log(error));

        }

    }
}
</script>

<style scoped>
.b-card{
    margin-bottom: 5%;
    width: 15rem;
    padding: 0;
}

.card-header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0;
}

.save-icon{
    height: 20%;
    width: 12%;
    cursor: pointer;
}

</style>
