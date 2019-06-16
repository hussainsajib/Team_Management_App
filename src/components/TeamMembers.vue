<template>
  <div>
    <b-dropdown
      size="sm"
      variant="info"
      name="team-members" 
      id="team-membes"
      text="Team Members"
    >
      <b-dropdown-item 
        v-for="member of teamMembers"
        :key="member._id"
        :member="member"
        :value="member.FirstName"
      >{{ member.FirstName }} {{ member.LastName }}
      </b-dropdown-item>
    </b-dropdown>
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
