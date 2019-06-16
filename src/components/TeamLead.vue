<template>
    <div>
        <b-dropdown 
            size="sm"
            class="m-md-2"
            variant="info" 
            :text="teamLead.FirstName+' '+teamLead.LastName" 
            name="teamlead" 
            id="teamlead"
        >
                <b-dropdown-item
                    :member="teamLead"
                    :value="teamLead.FirstName"
                    :class="menu-item"
                >{{teamLead.FirstName}} {{teamLead.LastName}}
                </b-dropdown-item>
        </b-dropdown>
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
