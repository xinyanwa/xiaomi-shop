<template>
    <div class="index-swapper">
        <Banner />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  name: 'Index',
  data() {
    return {
      swiperImg: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e472d8648df665bc0b2047252685cef0.jpg?w=2452&h=920',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01ece47410667e21e9d6ff879d8448b5.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd53d3541a73e3c5efb500d611a988ad.jpeg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad9c1cb79a2eeb2d5ccf54dfa9782032.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ef43cf9f138a7fc3a39273d7e3d13b6.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
      ],
    };
  },
  computed: {
  },
  components: {
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
        width: $min-width;
        margin: 0 auto;
        .swiper-img{
            height: 460px;
        }
    }
</style>
