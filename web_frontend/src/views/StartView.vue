<template>
  <div class="BigContainer">
    <StartNavBar></StartNavBar>
    <StartHeader></StartHeader>
  </div>
</template>

<script>
import StartNavBar from '@/components/Start/StartNavBar.vue';
import StartHeader from '@/components/Start/StartHeader.vue';

export default {
  name: 'StartView',
  components: {
    StartNavBar,StartHeader
  }
}

</script>

<style scoped>
.BigContainer{
  display: flex;
  flex-direction: column;
}
</style>