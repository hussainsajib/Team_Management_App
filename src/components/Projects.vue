<template>
    <div>
        <b-dropdown 
            size="sm"
            variant="info"
            name="projects" 
            id="projects" 
            text="Project List"
            class="m-md-2"
        >
            <b-dropdown-item 
                v-for="project of projectObjectList"
                :key="project._id"
                :project="project"
                :value="project.ProjectName"
            >{{project.ProjectName}}
            </b-dropdown-item>
        </b-dropdown>
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
            projectObjectList: []
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
            this.projects.forEach(project=> this.projectObjectList.push(list.find(item=> item._id == project)))
        }
        
    }

}
</script>

<style>

</style>
