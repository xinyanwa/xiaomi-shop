<template>
    <div>
        首页
    </div>
</template>

<script>

export default {
  name: 'Index',
  mounted() {
    this.axios.get('/user/login').then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
