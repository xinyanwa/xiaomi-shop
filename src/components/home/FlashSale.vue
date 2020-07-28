<template>
    <div class="flash">
        <div class="sale-wrapper">
            <div class="head-text">
                <h2 class="title">小米闪购</h2>
            </div>
            <div class="flash-sale">
                <div class="flash-sale-count-down">
                    <div class="count-down">
                        <span>14:00</span><span>场</span>
                    </div>
                    <div class="count-down-img">
                        <img alt="" src="../../assets/img/count-down-img.png">
                    </div>
                    <div class="end-count-down">
                        <span>距离结束还有</span>
                    </div>
                    <div class="end-count-down-info">
                        <time-count-down date-number="2020-07-10 23:50:00"/>
                    </div>
                </div>
                <div class="flash-sale-info">
                    <swiper :options="swiperOptions">
                        <swiper-slide :key="index" v-for="(item, index) in saleShopInfo">
                            <a href="">
                                <div class="sale-main" :style="randomColor">
                                    <div class="sale-img">
                                        <img :src="item.img" alt="">
                                    </div>
                                    <h3 class="sale-title">
                                        {{item.title}}
                                    </h3>
                                    <p class="sale-desc">
                                        {{item.desc}}
                                    </p>
                                    <div class="price">
                                        <p class="sale-now-price">
                                            {{item.nowPrice}}元
                                        </p>
                                        <p class="sale-old-price">
                                            {{item.oldPrice}}元
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TimeCountDown from './TimeCountDown.vue';

export default {
  name: 'FlashSale',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
      },
      saleShopInfo: [
        {
          img: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528790321.27625165.png?thumb=1&w=250&h=250',
          title: '小米米家滤水壶',
          desc: '高效过滤，享安心好水',
          nowPrice: 99,
          oldPrice: 129,
        },
        {
          img: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528790321.27625165.png?thumb=1&w=250&h=250',
          title: '小米米家滤水壶',
          desc: '高效过滤，享安心好水',
          nowPrice: 99,
          oldPrice: 129,
        },
        {
          img: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528790321.27625165.png?thumb=1&w=250&h=250',
          title: '小米米家滤水壶',
          desc: '高效过滤，享安心好水',
          nowPrice: 99,
          oldPrice: 129,
        },
        {
          img: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528790321.27625165.png?thumb=1&w=250&h=250',
          title: '小米米家滤水壶',
          desc: '高效过滤，享安心好水',
          nowPrice: 99,
          oldPrice: 129,
        },
        {
          img: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528790321.27625165.png?thumb=1&w=250&h=250',
          title: '小米米家滤水壶',
          desc: '高效过滤，享安心好水',
          nowPrice: 99,
          oldPrice: 129,
        },
        {
          img: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1528790321.27625165.png?thumb=1&w=250&h=250',
          title: '小米米家滤水壶',
          desc: '高效过滤，享安心好水',
          nowPrice: 99,
          oldPrice: 129,
        },
      ],
      colorData: [
        '#fa5a5a',
        '#f0d264',
        '#82c8a0',
        '#7fccde',
        '#6698cb',
        '#cb99c5',
      ],
    };
  },
  components: {
    TimeCountDown,
  },
  computed: {
    randomColor() {
      console.log(Math.round((Math.random()) * 6));
      return `border-top-color: ${this.colorData[Math.round((Math.random()) * 6)]}`;
    },
  },
};
</script>

<style lang="scss" scoped>
    .flash {
        background: $colorM;
        // padding-bottom: 32px;

        .sale-wrapper {
            @include container();
            overflow: hidden;

            .head-text {
                .title {
                    @include headTitle();
                }
            }

            .flash-sale {
                @include flex(start);

                .flash-sale-count-down {
                    width: 314px;
                    @include flex();
                    flex-direction: column;
                    background: #f1eded;
                    border-top: 1px solid $colorA;

                    .count-down {
                        padding-top: 56px;
                        font-size: $fontF;
                        color: $colorA;
                    }

                    .count-down-img {
                        margin: 25px 0;
                    }

                    .end-count-down {
                        font-size: $fontI;
                        color: $colorD;
                    }

                    .end-count-down-info {
                        margin: 28px 30px 30px 30px;
                    }
                }

                .flash-sale-info {
                    margin-left: 14px;
                    width: 100%;

                    a {
                        display: block;
                        width: 234px;
                        height: 315px;
                        text-align: center;
                        background: $colorG;

                        .sale-main {
                            padding-top: 39px;
                            border-top: 1px solid;

                            .sale-img {
                                margin: 0 37px 22px 37px;

                                img {
                                    width: 100%;
                                }
                            }

                            .sale-title {
                                font-size: $fontJ;
                                margin: 0 20px 3px;
                                font-weight: 400;
                                @include textHidden();
                                color: #212121;
                            }

                            .sale-desc {
                                margin: 0 20px 12px;
                                font-size: $fontK;
                                color: #b0b0b0;
                                @include textHidden();
                            }

                            .price {
                                @include flex(center);
                                font-size: $fontJ;

                                .sale-now-price {
                                    color: $colorA;
                                }

                                .sale-old-price {
                                    color: $colorE;
                                    margin-left: 5px;
                                    text-decoration: line-through;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
