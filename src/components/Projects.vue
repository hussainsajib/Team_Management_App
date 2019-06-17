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
    
    created: async function(){
        this.projectList = await getProjectData()
        await this.generateNameList(this.projectList);
        this.options = await this.projectObjectList.map(item=>item.ProjectName);
        this.status.show = true;

        /*
            .then(()=>this.options = this.projectObjectList.map(item=>item.ProjectName))
            .then(()=>this.status.show = true)
            .catch(error => this.status.errored = true)
        */
    },
    methods: {
        generateNameList: async function (list){
            await this.projects.forEach(project=> this.projectObjectList.push(list.find(item=> item._id == project)))
        }
    }

}
</script>

<style>

</style>
