<template>
  <div>
    <div> TryGetusername: {{ TryGetusername }}</div>
    <div> TryPostusername: {{ TryPostusername }}</div>
  </div>
  <router-view/>
</template>

<script>

import { ref } from 'vue';
import tryService from './services/TryService'; '@/services/TryService/index.js'

export default {
  name:"App",
  setup() {
    let TryGetusername = ref("");
    let TryPostusername = ref("");

    tryService.tryGet().then((res) =>{
      console.log(res);
      TryGetusername.value = res;
    });
    tryService.tryPost({req:"Hertz"}).then((res) =>{
      console.log(res);
      TryPostusername.value = res.ans;
    });
    return {TryGetusername,TryPostusername}
  },
}
</script>


<style>

</style>
