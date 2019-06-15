<template>
    <div>
        <h2>{{team.TeamName}}</h2>
        <projects 
            
            :projects="team.Projects" 
        />
    </div>
</template>

<script>
import Projects from './Projects'

export default {
    name: 'Team',
    props: [ 'team' ],
    components:{
        Projects
    }
}
</script>

<style>

</style>
