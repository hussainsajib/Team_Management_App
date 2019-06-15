<template>
    <div>
        <select name="projects" id="projects">
            <option 
                v-for="project of projects"
                :key="project"
                :project="project"
                :value="project"
            >{{project}}</option>
        </select>
    </div>
    
</template>

<script>
import getProjectData from "../Projects"
export default {
    name: 'Projects',
    data: function(){
        return {
            status:{
                loading: false,
                errored: false
            },
            projectList: null
        }
    },
    props: [ 'projects' ],
    created: function(){
        getProjectData()
            .then(projectData=>this.projectList = projectData)
            .catch(error => this.status.errored = true)
    }

}
</script>

<style>

</style>
