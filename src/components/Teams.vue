<template>
    <div >
        <div v-if="status.errored">
            <p>We couldn't fetch data. Please check the links.</p>
        </div>
        <div id="teamscomp">
            <div v-if="status.loading">
                <img src="../assets/ajax-loader.gif" alt="loader" id="loader">
            </div>
            <div class="cards" v-else>
                <team
                v-for="team of teams"
                :key="team._id"
                :team="team"
                :projects="projects"
                :employees="employees"
            />
            </div>
        </div>
    </div>
</template>

<script>
import { sortBy } from 'lodash'
import getData from "../fetchData"
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
        var allData;
        try{
            this.status.loading = true;
            allData = await getData();
            this.teams = sortBy(await allData.teams,item=>item._id);
            this.employees = sortBy(await allData.employees, emp=>emp.FirstName);
            this.projects = sortBy( await allData.projects, proj=>proj._id);
            this.status.loading = false;
        } catch(error){
            this.status.errored = true;
            this.makeToast(error);
        }     
    },
    methods: {
        makeToast: function(message){
            this.$bvToast.toast(`${message}`,{
                title: 'Message',
                autoHideDelay: 5000,
                appendToast: true
            })
        }
    }
}
</script>

<style scoped>

.cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2%;
}

</style>
