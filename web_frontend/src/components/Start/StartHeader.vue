<template>
    <div class="HeaderContainer">
      <div class="HeaderCenterContainer">
        <div class="HeaderCenter">
          <div class="HeaderCenterText">这里暂时先不做了</div>
        </div>
        <button type="button" class="Start_Button" @click="onClick">开始</button>
      </div>
    </div>
</template> 

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

export default{
    name:"StartHeader",
    data(){
        return{
            
        }
    },
    methods:{
        onClick(){
            this.$router.push({path: '/home'});
        }
    }
};
</script>

<style scoped>
.HeaderContainer{
    display: flex;
    flex-direction: column;
    height: 2000px;
    width: 100%;
    background-color: yellow;
}
.HeaderCenter{
    display: flex;
    width: 100%;
    height: 1000px;
    background-color: blue;
    align-items: center; /* 垂直居中 */
    justify-content: center;
}
.HeaderCenterText{
  height: 20px;
  width: 300px;
  color: #ffffff;
}

.Start_Button{
    display: flex;
    width: 200px;
    height: 50px;
    justify-content: center;
}
</style>
