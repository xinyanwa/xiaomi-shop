<template>
    <div>
        首页
    </div>
</template>

<script>
import storage from '../storage/index';

export default {
  name: 'Index',
  mounted() {
    // storage.setItem('userName', { a: 1 }, 'user');
    storage.clear('a', 'user');
  },
};
</script>

<style lang="scss" scoped>

</style>
