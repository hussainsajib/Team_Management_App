<template>
    <div>
        <div v-if="status.errored">
            <p>Project is errored</p>
        </div>
        <div v-else>
            <div v-if="status.loading">
                <p>The projects are loading</p>
            </div>
            <div v-else>
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
    </div>
</template>

<script>
import getProjectData from "../Projects"
import Vue from 'vue'
import Multiselect from 'vue-multiselect'

export default {
    name: 'Projects',
    props: [ 'teamProjects', 'allProjects' ],
    components:{
        Multiselect
    },
    data: function(){
        return {
            status:{
                loading: false,
                errored: false,
            },
            value: null,
            options: null,
        }
    },
    
    created: function(){
        this.status.loading = true;
        this.projectList = getProjectData();
        this.options = this.allProjects.map(item=>item.ProjectName);
        this.value = this.teamProjects.map(teamProject=>this.allProjects.find(project=>teamProject == project._id).ProjectName);
        this.status.loading = false;
    }

}
</script>

<style>

</style>
