<template>
    <div class="DirectoryContainer">
        <div class="DirectoryHeader">
            这里做头
        </div>
        <div class="DirectoryBody">
            这里做身体
        </div>
        <div class="DirectoryFooter">
            这里做尾
        </div>
    </div>
</template>

<script>
export default{
    name: 'HomeDirectory'
};
</script>

<style scoped>
    .DirectoryContainer{
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 150px;
        background-color: rebeccapurple;
    }
    .DirectoryHeader{
        height: 10vh;
    }
    .DirectoryBody{
        height: 80vh;
    }
    .DirectoryFooter{
        height: 10vh;
    }
</style>