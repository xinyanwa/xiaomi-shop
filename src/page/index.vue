<template>
    <div class="index-swapper">
        <banner />
        <flash-sale />
        <home-banner :img-data="imgData"/>
        <box-phone-info />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import FlashSale from '../components/FlashSale.vue';
import HomeBanner from '../components/HomeBanner.vue';
import BoxPhoneInfo from '../components/BoxPhoneInfo.vue';

export default {
  name: 'Index',
  data() {
    return {
      imgData: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17ae6ffbdd4156119e41dec7d85ebced.jpeg?thumb=1&w=1533&h=150&f=webp&q=90',
    };
  },
  computed: {
  },
  components: {
    BoxPhoneInfo,
    HomeBanner,
    FlashSale,
    Banner,
  },
  directives: {
  },
  mounted() {
    this.axios.get('/user/login')
      .then((res) => {
        window.console.log(res);
      });
  },
};
</script>

<style lang="scss" scoped>
    .index-swapper{
    }
</style>
