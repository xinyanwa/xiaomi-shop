<template>
    <div class="box-phone-info">
        <div class="box-wrapper">
            <div class="head-text">
                <h2 class="title">手机</h2>
            </div>
            <div class="box-phone">
                <div class="left-phone">
                    <ul>
                        <li
                                :class="item.length === 0 ? '' : 'left-botton-li'"
                                :key="index"
                                v-for="(item, index) in leftImgData"
                        >
                            <a :class="item.length === 0 ? '' : 'left-a-img'" href="">
                                <div class="phone-img">
                                    <img :src="item" alt="">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="right-phone">
                    <div :key="index" class="phone-item" v-for="(item, index) in phoneInfo">
                        <a href="">
                            <phone-info-item :phone-info-item="item"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PhoneInfoItem from './PhoneInfoItem.vue';

export default {
  name: 'BoxPhoneInfo',
  components: { PhoneInfoItem },
  data() {
    return {
      leftImgData: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=293&h=375&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e22cf675726deb5eb728f2ccd4cbeafd.jpg?thumb=1&w=293&h=375&f=webp&q=90',
      ],
      leftImg: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90',
      ],
      phoneInfo: [
        {
          typeId: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: {
            oldPrice: 2099,
            nowPrice: 1899,
          },
        },
        {
          typeId: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: {
            oldPrice: 2099,
            nowPrice: 1899,
          },
        },
        {
          typeId: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: {
            oldPrice: 2099,
            nowPrice: 1899,
          },
        },
        {
          typeId: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: {
            oldPrice: 2099,
            nowPrice: 1899,
          },
        },
        {
          typeId: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: {
            oldPrice: 2099,
            nowPrice: 1899,
          },
        },
        {
          typeId: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: {
            oldPrice: 2099,
            nowPrice: 1899,
          },
        },
        {
          typeId: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90',
          title: '小米10 青春版 5G',
          desc: '50倍潜望式变焦 / 轻薄5G手机',
          price: {
            oldPrice: 2099,
            nowPrice: 1899,
          },
        },
        {
          typeId: 2,
          title: '小米壁画电视65英寸',
          price: '6999元',
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=125&h=125&f=webp&q=90',
          category: '电视影音',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    .box-phone-info {
        background: $colorM;

        .box-wrapper {
            @include container();

            .head-text {
                .title {
                    @include headTitle();
                }
            }

            .box-phone {
                @include flex(start, '');

                .left-phone {
                    ul {
                        @include flex(space-between, start);
                        flex-direction: column;

                        li {
                            a {
                                display: inline-block;
                                width: 234px;
                                height: 614px;

                                .phone-img {
                                    width: 100%;
                                    height: 100%;

                                    img {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                }

                .right-phone {
                    margin-left: 14px;
                    width: 992px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .phone-item {
                        width: 230px;
                        height: 300px;
                        margin-bottom: 17px;
                    }
                }
            }
        }
    }

    .left-botton-li {
        padding-bottom: 14px;

        &:last-child {
            padding-bottom: 0;
        }
    }

    .left-a-img {
        height: 300px !important;
    }
</style>
