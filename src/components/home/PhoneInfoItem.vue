<template>
    <div class="wrapper">
        <div class="phone-info" v-if="phoneInfoItem.typeId === 1">
            <div class="phone-info-wrapper">
                <div class="phone-img">
                    <img :src="phoneInfoItem.img" alt="">
                </div>
                <h3 class="phone-title">{{phoneInfoItem.title}}</h3>
                <p class="phone-desc">{{phoneInfoItem.desc}}</p>
                <p class="phone-price">
                    <span class="now-price">{{phoneInfoItem.price.oldPrice}}元起</span>
                    <del class="old-price">{{phoneInfoItem.price.nowPrice}}元</del>
                </p>
            </div>
        </div>
        <div class="info-wrapper" v-else>
            <div class="info-top">
                <div class="info-top-left">
                    <p class="info-top-title">{{phoneInfoItem.title}}</p>
                    <p class="info-top-price">{{phoneInfoItem.price}}</p>
                </div>
                <div class="info-top-right">
                    <div class="info-top-img">
                        <img alt=""
                             :src="phoneInfoItem.img">
                    </div>
                </div>
            </div>
            <div class="info-bottomm">
                <div class="info-bottom-left">
                    <p class="info-bottom-title">浏览更多</p>
                    <p class="info-bottom-info">{{phoneInfoItem.category}}</p>
                </div>
                <div class="info-bottom-right">
                    <div class="info-bottom-icon">
                        <i class="el-icon-d-arrow-right
"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PhoneInfoItem',
  props: {
    phoneInfoItem: {
      type: Object,
      default: () => {
      },
    },
  },
};
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        .phone-info {
            width: 100%;
            height: 100%;
            background: $colorG;
            transform-style: preserve-3d;
            transition: all .2s linear;

            &:hover{
                z-index: 2;
                box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                transform: translate3d(0, -2px, 0);
            }

            .phone-info-wrapper {
                text-align: center;
                padding: 20px 0;

                .phone-img {
                    @include flex(center);
                    margin-bottom: 18px;

                    img {
                        width: 160px;
                        height: 160px;
                    }
                }

                .phone-title {
                    margin-bottom: 2px;
                    @include textHidden();
                    font-size: $fontJ;
                    color: $colorB;
                }

                .phone-desc {
                    margin-bottom: 10px;
                    @include textHidden();
                    font-size: $fontK;
                    color: #b0b0b0;
                }

                .phone-price {
                    padding-bottom: 14px;
                    font-size: $fontJ;

                    .now-price {
                        color: $colorA;
                    }

                    .old-price {
                        color: #b0b0b0;
                    }
                }
            }
        }

        .info-wrapper {
            height: 300px;
            display: flex;
            flex-direction: column;

            .info-top {
                height: 145px;
                background: $colorG;
                @include flex(space-around);
                transform-style: preserve-3d;
                transition: all .2s linear;
                &:hover{
                    z-index: 2;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                    transform: translate3d(0, -2px, 0);
                }

                .info-top-left {
                    @include flex(space-between, start);
                    flex-direction: column;

                    .info-top-title {
                        max-width: 90px;
                        font-size: $fontJ;
                        color: $colorB;
                        font-weight: 500;
                        // text-wrap: inherit;
                    }

                    .info-top-price {
                        margin-top: 5px;
                        color: $colorA;
                        font-size: $fontJ;
                    }
                }

                .info-top-right {
                    .info-top-img {
                        img {
                            width: 80px;
                            height: 80px;
                        }
                    }
                }
            }

            .info-bottomm {
                height: 145px;
                margin-top: 14px;
                background-color: $colorG;
                @include flex(space-around, center);
                transform-style: preserve-3d;
                transition: all .2s linear;
                &:hover{
                    z-index: 2;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                    transform: translate3d(0, -2px, 0);
                }
                .info-bottom-left{
                    margin-left: 10px;
                    .info-bottom-title{
                        font-size: $fontH;
                        color: $colorB;
                    }
                    .info-bottom-info{
                        margin-top: 2px;
                        font-size: 12px;
                        color: #757575;
                    }
                }
                .info-bottom-right{
                    margin-left: 40px;
                    .info-bottom-icon{
                        color: $colorA;
                        font-size: 48px;
                    }
                }
            }
        }
    }
</style>
