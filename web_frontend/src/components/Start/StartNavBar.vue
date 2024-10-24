<template>
  <div class="navbarContainer">
    <div class="logoContainer"></div>
    <div class="nameContainer">
      <div class="name">SweetHome</div>
    </div>
    <div class="navContainer">
      <div class="navItemContainer">
        <div class="navItem">Start</div>
      </div>
      <div class="navItemContainer">
        <div class="navItem">Login</div>
      </div>
      <div class="navItemContainer">
        <div class="navItem">About</div>
      </div>
    </div>
  </div>
</template>
  

<script>

export default {
  name: 'NavBar'
}

</script>

<style scoped>
/* 导航栏容器 */
.navbarContainer {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
}

/* Logo 容器 */
.logoContainer {
  height: 30px;
  width: 30px;
}


/* 名称容器 */
.nameContainer {
  height: 30px;
  width: 100px;
}
.name {
  height: 30px;
  width: 100px;
  font-weight: bold;
}

/* 导航容器 */
.navContainer {
  position: absolute; /* 绝对定位 */
  right: 0; /* 吸附在右侧 */
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 600px;
}

/* 导航项 */
.navItemContainer {
  height: 30px;
  width: 200px;
}
</style>