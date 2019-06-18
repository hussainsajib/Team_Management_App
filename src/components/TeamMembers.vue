<template>
  <div class="teammembers">
    <div v-if="status.errored">
      <p>TeamMembers is in error</p>
    </div>
    <div v-else>
      <div v-if="status.loading">
        <p>TeamMembers is loading</p>
      </div>
      <div v-else>
        <multiselect 
        v-model="value"
        :options="options"
        :id="value._id"
        :key="value._id"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :internalSearch="true"
        :preserveSearch="true"
        :custom-label="createLabel"
        @close="changeMember"
        trackBy="_id"
        selectLabel="Sel"
        deselectLabel="Rem"
        placeholder="Select Members"
        >
          <template 
            slot="selection" 
            slot-scope="{ values, search, isOpen }"
          > <span 
                class="multiselect__single" 
                v-if="values.length 
                &amp;&amp; 
                !isOpen">
                {{ values.length }} of {{options.length}} Selected
            </span>
          </template>
        </multiselect>
      </div>

    </div>

    
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'


export default {
  name: 'TeamMembers',
  props: [ 'teamMembers', 'allEmployees' ],
  components: {
    Multiselect
  },
  data:function(){
    return {
      value: null,
      options: null,
      memberObjects: null,
      status:{
        loading: false,
        errored: false,
      }
    }
  },
  created: function(){
    this.status.loading = true;
    this.options = this.allEmployees;
    this.value = this.teamMembers;
    this.status.loading = false;
  },
  methods: {
    changeMember: function(member){
      this.$emit('click',this.value);
    },
    createLabel: function({FirstName, LastName}){
        return `${FirstName} ${LastName}`;
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
