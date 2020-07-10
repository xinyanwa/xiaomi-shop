<template>
    <div class="home-banner-wrapper">
        <div class="banner-wrapper">
            <img :src="imgData" alt="" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    imgData: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
    .home-banner-wrapper{
        background: $colorM;
        padding: 22px 0;
        .banner-wrapper{
            @include container();
            img{
                width: 100%;
            }
        }
    }
</style>
