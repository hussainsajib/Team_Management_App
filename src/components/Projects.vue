<template>
    <div>
        <div v-if="status.show">
            <multiselect 
            v-model="value" 
            :options="options"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :internalSearch="true"
            :preserveSearch="true"
            selectLabel="Sel"
            deselectLabel="Rem"
            placeholder="Select Projects"
        >
        </multiselect>
        </div>
        
    </div>
    
</template>

<script>
import getProjectData from "../Projects"
import Vue from 'vue'
import Multiselect from 'vue-multiselect'

export default {
    name: 'Projects',
    props: [ 'projects' ],
    components:{
        Multiselect
    },
    data: function(){
        return {
            status:{
                loading: false,
                errored: false,
                show: false
            },
            projectList: null,
            projectObjectList: [],
            value: null,
            options: null
        }
    },
    
    created: function(){
        getProjectData()
            .then(projectData=>{
                this.projectList = projectData;
                this.generateNameList(this.projectList);
            })
            .then(()=>this.options = this.projectObjectList.map(item=>item.ProjectName))
            .then(()=>this.status.show = true)
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
