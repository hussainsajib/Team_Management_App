<template>
    <div>
        <select name="teamlead" id="teamlead">
            <option
                :member="teamLead"
                :value="teamLead.FirstName"
            >{{teamLead.FirstName}} {{teamLead.LastName}}</option>
        </select>
    </div>

    
</template>

<script>
export default {
    name: 'TeamLead',
    props: ['teamLead']
}
</script>

<style>

</style>
