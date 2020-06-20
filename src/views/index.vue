<template>
  <div>
    this is index page
  </div>
</template>

<script>
import storage from '../storage/index';

export default {
  name: 'index',
  mounted() {
    storage.setItem('a', 2);
  },
};
</script>

<style lang="scss" scoped>
</style>
