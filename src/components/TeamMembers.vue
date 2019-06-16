<template>
  <div>
    <select name="team-members" id="team-membes">
      <option 
        v-for="member of teamMembers"
        :key="member._id"
        :member="member"
        :value="member.FirstName"
      >{{ member.FirstName }} {{ member.LastName }}</option>
    </select>
  </div>
    
</template>

<script>
export default {
  name: 'TeamMembers',
  props: [ 'teamMembers' ],
}
</script>

<style>

</style>
