<template>
    <div>
        <div v-if="status.errored">
            <p>TeamLead is in error</p>
        </div>
        <div v-else>
            <div v-if="status.loading">
                <p>TeamLead Data is loading</p>
            </div>
            <div v-else>
                <multiselect
                v-model="value"
                :options="options"
                :close-on-select="true"
                :clear-on-select="false"
                :preselect-first="true"
                selectLabe="Sel"
                deselectLabel="Rem"
                ></multiselect>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Multiselect from 'vue-multiselect'

export default {
    name: 'TeamLead',
    props: ['teamLead', 'allEmployees'],
    components:{
        Multiselect
    },
    data: function(){
        return {
            status:{
                loading: false,
                errored: false
            },
            value: null,
            options: null
        }
    },
    created: function(){
        this.status.loading = true;
        this.options = this.allEmployees.map(employee=>`${employee.FirstName} ${employee.LastName}`)
        this.value = this.options.find(employee=>employee.toLowerCase() == this.teamLead.FirstName.concat(' ').concat(this.teamLead.LastName).toLowerCase());
        this.status.loading = false;
    }
    
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>

<style scoped>
div *{
    font-size: 1em;
}

</style>
