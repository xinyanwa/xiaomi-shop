<template>
    <div>
        <NavTabHeader/>
    </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import NavTabHeader from '../components/NavTabHeader';

export default {
  name: 'Index',
  components: { NavTabHeader },
  mounted() {
    this.axios.get('/user/login')
      .then((res) => {
        window.console.log(res);
      });
  },
};
</script>

<style lang="scss" scoped>
</style>
