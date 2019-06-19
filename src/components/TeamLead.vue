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
                :key="value._id"
                :id="value._id"
                :options="options"
                :close-on-select="true"
                :clear-on-select="false"
                :preselect-first="true"
                :allow-empty="false"
                :custom-label="createLabel"
                @select="emitEvent"
                trackBy="_id"
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
        }
    },
    created: function(){
        this.status.loading = true;
        this.options = this.allEmployees;
        this.value = this.teamLead;
        this.status.loading = false;
    },
    methods:{
        emitEvent: function(itemName,itemID){
            this.$emit('click', itemName._id);
        },
        createLabel: function({FirstName, LastName}){
            return `${FirstName} ${LastName}`;
        }
    }
    
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>

<style scoped>


</style>
