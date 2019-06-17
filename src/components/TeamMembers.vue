<template>
  <div class="teammembers">
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
        placeholder="Select Members" 
      ></multiselect>
    </div>
  </div>
    
</template>

<script>
import Vue from 'vue'
import Multiselect from 'vue-multiselect'


export default {
  name: 'TeamMembers',
  props: [ 'teamMembers' ],
  components: {
    Multiselect
  },
  data:function(){
    return {
      value: null,
      options: null,
      status:{
        loading: false,
        errored: false,
        show: true
      }
    }
  },
  created: function(){
    this.options = this.teamMembers.map(item=>`${item.FirstName} ${item.LastName}`);
    
  }
}
</script>



<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>
<style scoped>
div *{
  font-size: .9em;
}
</style>
