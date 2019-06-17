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
    props: ['teamLead'],
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
        this.options.push(`${this.teamLead.FirstName} ${this.teamLead.LastName}`)
    }
    
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>

<style scoped>
div *{
    font-size: .9em;
}

</style>
