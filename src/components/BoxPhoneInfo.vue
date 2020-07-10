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
                                v-for="(item, index) in leftImgData"
                                :key="index"
                                :class="item.length === 0 ? '' : 'left-botton-li'"
                        >
                            <a href="" :class="item.length === 0 ? '' : 'left-a-img'">
                                <div class="phone-img">
                                    <img :src="item" alt="">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="right-phone"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BoxPhoneInfo',
  data() {
    return {
      leftImgData: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=293&h=375&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e22cf675726deb5eb728f2ccd4cbeafd.jpg?thumb=1&w=293&h=375&f=webp&q=90',
      ],
      leftImg: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.box-phone-info{
    background: $colorM;
    .box-wrapper{
        @include container();
        .head-text {
            .title {
                @include headTitle();
            }
        }
        .box-phone{
            @include flex(start);
            .left-phone{
                ul{
                    @include flex( space-between, start);
                    flex-direction: column;
                    li{
                        a{
                            display: inline-block;
                            width: 234px;
                            height: 614px;
                            .phone-img{
                                width: 100%;
                                height: 100%;
                                img{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
            .right-phone{
                padding-left: 14px;
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
