<template>
    <div>
        <select name="projects" id="projects">
            <option 
                v-for="project of projectNameList"
                :key="project._id"
                :project="project"
                :value="project.ProjectName"
            >{{project.ProjectName}}</option>
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
            projectList: null,
            projectNameList: []
        }
    },
    props: [ 'projects' ],
    created: function(){
        getProjectData()
            .then(projectData=>{
                this.projectList = projectData;
                this.generateNameList(this.projectList);
            })
            .catch(error => this.status.errored = true)
    },
    methods: {
        generateNameList: function(list){
            this.projects.forEach(project=> this.projectNameList.push(list.find(item=> item._id == project)))
        }
        
    }

}
</script>

<style>

</style>
