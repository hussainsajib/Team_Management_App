<template>
    <div>
        <div v-if="status.show">
            <multiselect
                v-model="value"
                :options="options"
                :close-on-select="false"
                :clear-on-select="false"
                :preselect-first="true"
                selectLabe="Sel"
                deselectLabel="Rem"
            ></multiselect>

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
                show: true
            },
            value: null,
            options: []
        }
    },
    created: function(){
        this.generateEmployeeList();
        this.employeeSelected();
    },
    methods: {
        generateEmployeeList: function(){
            this.options = this.allEmployees.map(employee=>`${employee.FirstName} ${employee.LastName}`)
        },
        employeeSelected: function(){
            this.value = this.options.find(employee=>employee.toLowerCase() == this.teamLead.FirstName.concat(' ').concat(this.teamLead.LastName).toLowerCase())
        }
    }
    
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>

<style scoped>
div *{
    font-size: .9em;
}

</style>
