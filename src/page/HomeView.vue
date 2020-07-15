<template>
    <div>
        <NavTabHeader />
        <router-view />
        <NavTabFooter />
    </div>
</template>

<script>
import NavTabHeader from '../components/home/NavTabHeader.vue';
import NavTabFooter from '../components/home/NavTabFooter.vue';

export default {
  name: 'HomeView',
  components: {
    NavTabHeader,
    NavTabFooter,
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>

</style>
