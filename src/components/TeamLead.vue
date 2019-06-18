<template>
    <div class="team-leader">
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
                :key="valueObject._id"
                :id="valueObject._id"
                :options="options"
                :close-on-select="true"
                :clear-on-select="false"
                :preselect-first="true"
                :allow-empty="false"
                @close="emitEvent"
                selectLabel="Sel"
                deselectLabel="Rem"
                ></multiselect>
            </div>
        </div>
    </div>
</template>

<script>
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
            options: null,
            valueObject: null

        }
    },
    created: function(){
        this.status.loading = true;
        this.options = this.allEmployees.map(employee=>`${employee.FirstName} ${employee.LastName}`)
        this.valueObject = this.allEmployees.find(employee=>employee._id == this.teamLead._id);
        this.value = `${this.valueObject.FirstName} ${this.valueObject.LastName}`
        this.status.loading = false;
    },
    methods:{
        emitEvent: function(itemName){
            this.changeValueObject(itemName);
            this.$emit('click',this.valueObject._id);
        },
        changeValueObject: function(name){
            this.valueObject = this.allEmployees.find(employee=>employee.FirstName.concat(' ').concat(employee.LastName).toLowerCase() == name.toLowerCase());
        }
    }
    
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>

<style scoped>
.team-leader *{
    font-size: .9em;
}

</style>
