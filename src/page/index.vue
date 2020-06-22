<template>
    <div>
        首页
    </div>
</template>

<script>

export default {
  name: 'Index',
  mounted() {
    this.axios.get('/mock/user.json').then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
