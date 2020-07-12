<template>
    <div class="index-swapper">
        <banner />
        <flash-sale />
        <home-banner :img-data="imgData"/>
        <box-phone-info />
        <home-banner img-data="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1533&h=150&f=webp&q=90"/>
        <box-phone-info />
        <home-banner img-data="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dbfe3412ac1575cadb07ae134f4770ff.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <box-phone-info />
        <home-banner img-data="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9880db34d227b6c1df5b45cb7df4f465.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
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
