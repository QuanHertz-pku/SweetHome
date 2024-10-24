<template>
    <div class="BigContainer">
        <HomeDirectory></HomeDirectory>
    </div>
</template>

<script>
import HomeDirectory from '../components/Home/HomeDirectory.vue';

export default{
    name: 'HomeView',
    components: {
        HomeDirectory
    }
};
</script>
<style scoped>
.BigContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
}
</style>