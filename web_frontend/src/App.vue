<template>
  <div>
    <div> username: {{ username }}</div>
  </div>
  <router-view/>
</template>

<script>

import $ from 'jquery';
import { ref } from 'vue';

export default {
  name:"App",
  setup() {
    let username = ref("");

    $.ajax({
      url : "http://127.0.0.1:8081/try/get/",
      type : "get",
      success: resp => {
        //console.log(resp);
        username.value=resp;
      }
    });
    return {username}
  },
}
</script>


<style>

</style>
