<template>
    <div>
        <pre>{{users}}</pre>
    </div>
</template>

<script setup lang="ts">
const store = useUsersStore();
const {users} = storeToRefs(store)
store.getUsers();
</script>

<style scoped>

</style>