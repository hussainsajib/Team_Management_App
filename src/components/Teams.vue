<template>
    <div class="Teams">
        <team
            v-for="team of teams"
            :id="team._id"
            :team="team"
         />

    </div>
</template>

<script>
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
            teams: null
        }
    },
    components: {
        Team
    },
    created: function(){
        getTeamData()
            .then(teams=>this.teams = teams)
            .catch(error => this.teams = error)
    },
}
</script>

<style>

</style>
