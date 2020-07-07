<template>
   <div class="banner-wrapper">
       <div class="banner-carousel">
           <swiper :options="swiperOptions">
               <swiper-slide v-for="(item, index) in swiperImg" :key="index">
                   <img class="banner-img" :src="item" alt="">
               </swiper-slide>
               <div class="swiper-pagination" slot="pagination"></div>
           </swiper>
           <div class="category-list">
               <ul>
                   <li class="category-item"
                       v-for="(item, index) in categoryList" :key="index"
                       @mouseenter="showChilderList(index)"
                       @mouseleave="hideChilderList(index)">
                       <a href="">
                           <span>{{item}}</span>
                           <i class="el-icon-arrow-right"></i>
                       </a>
                   </li>
               </ul>
           </div>
           <div class="childer" v-show="showChilder"
                @mouseenter="showChildershow"
                @mouseleave="hideChildershow">
               <ul v-for="(item, index) in childer" :key="index">
                   <li v-for="(info, number) in item" :key="number">
                       <a href="">
                           <img :src="info.img" alt="">
                           <span>{{info.title}}</span>
                       </a>
                   </li>
               </ul>
           </div>
       </div>
       <div class="hero-sub">
           <div class="function-menu">
               <ul>
                   <li v-for="(item, index) in menuList" :key="index">
                       <a href="">
                           <img :src="item.img" alt="">
                           <span>{{item.title}}</span>
                       </a>
                   </li>
               </ul>
           </div>
           <div class="shop-info">
               <ul>
                   <li v-for="(item, index) in shopInfoImg" :key="index">
                       <a href="">
                           <img :src="item" alt="" />
                       </a>
                   </li>
               </ul>
           </div>
       </div>
   </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  data() {
    return {
      swiperOptions: {
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: true,
        speed: 1000,
        setWrapperSize: true,
        autoHeight: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      swiperImg: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e472d8648df665bc0b2047252685cef0.jpg?w=2452&h=920',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01ece47410667e21e9d6ff879d8448b5.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd53d3541a73e3c5efb500d611a988ad.jpeg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad9c1cb79a2eeb2d5ccf54dfa9782032.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ef43cf9f138a7fc3a39273d7e3d13b6.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
      ],
      categoryList: [
        '手机 电话卡',
        '电视 盒子',
        '笔记本 显示器 平板',
        '家电 插线板',
        '出行 穿戴',
        '智能 路由器',
        '电脑 配件',
        '健康 儿童',
        '耳机 音响',
        '生活 箱包',
      ],
      childer: [],
      childerList: [
        [
          [
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          ],
          [
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          ],
          [
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          ],
        ],
        [
          [
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
            { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          ],
        ],
      ],
      showChilder: false,
      menuList: [
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48', title: '小米秒杀' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48', title: '企业团购' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48', title: 'F码通道' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48', title: '米粉卡' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48', title: '以旧换新' },
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48', title: '花费充值' },
      ],
      shopInfoImg: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d158f243b54d5ec68dd2ac72bd24555d.jpg?w=632&h=340',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340',
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    showChilderList(index) {
      console.log(index);
      this.childer = this.childerList[index];
      this.showChilder = true;
    },
    showChildershow() {
      this.showChilder = true;
    },
    hideChildershow() {
      this.showChilder = false;
    },
    hideChilderList(index) {
      console.log(index);
      this.showChilder = false;
    },
  },
};
</script>

<style lang="scss" scoped>
    .banner-wrapper{
        padding-bottom: 26px;
        .banner-carousel{
            width: $min-width;
            margin: 0 auto;
            position: relative;
            .banner-img{
                 height: 460px;
                 width: 100%;
             }
            .category-list{
                padding: 20px 0;
                z-index: 99;
                position: absolute;
                top: 0;
                left: 0;
                width: 235px;
                height: 420px;
                background: rgba(105,101,101,.6);
                ul{
                    list-style: none;
                    height: 100%;
                    @include flex();
                    flex-direction: column;
                    li{
                        padding-left: 30px;
                        width: 100%;
                        box-sizing: border-box;
                        transition: color .3s;
                        &:hover{
                            background: $colorA;
                        }
                        a{
                            color: $colorG;
                            position: relative;
                            display: inline-block;
                            width: 100%;
                            height: 42px;
                            line-height: 42px;
                            span{
                                font-size: $fontJ;
                            }
                            i{
                                position: absolute;
                                top: 12px;
                                right: 20px;
                                font-size: 16px;
                                line-height: 16px;
                                color: #e0e0e0;
                            }
                        }
                    }
                }
            }
            .childer{
                position: absolute;
                top: 0;
                left: 235px;
                @include flex();
                max-width: 992px;
                height: 460px;
                z-index: 99;
                background: #fff;
                box-shadow: 0 10px 16px rgba(0,0,0,.18);
                // box-shadow:8px 8px 16px -8px rgba(0,0,0,.18),8px -8px 16px -8px  rgba(0,0,0,.18);
                ul{
                    @include flex();
                    flex-direction: column;
                    width: 248px;
                    height: 458px;
                    li{
                        @include flex();
                        width: 100%;
                        &:hover{
                            a{
                                span{
                                    color: $colorA;
                                }
                            }
                        }
                        a{
                            padding: 18px 20px;
                            color: $colorB;
                            width: 100%;
                            @include flex(flex-start, center);
                            img{
                                width: 40px;
                                height: 40px;
                                margin-right: 12px;
                            }
                            span{
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                font-size: $fontJ;
                            }
                        }
                    }
                }
            }
        }
        .hero-sub{
            padding-top: 14px;
            display: flex;
            .function-menu{
                width: 234px;
                background: #5f5750;
                ul{
                    @include flex();
                    flex-wrap: wrap;
                    li{
                        width: 70px;
                        height: 82px;
                        @include flex();
                        &:hover{
                            a{
                                span{
                                    opacity: 1;
                                }
                            }
                        }
                        a{
                            @include flex(center);
                            flex-direction: column;
                            text-align: center;
                            width: 100%;
                            height: 100%;
                            img{
                                width: 24px;
                                height: 24px;
                            }
                            span{
                                color: #fff;
                                opacity: .7;
                                margin-top: 5px;
                            }
                        }
                    }
                }
            }
            .shop-info{
                padding-left: 14px;
                ul{
                    @include flex();
                    width: 100%;
                    li{
                        width: 316px;
                        height: 170px;
                        margin-right: 15px;
                        &:last-child{
                            margin-right: 0;
                        }
                        a{
                            img{
                                width: 316px;
                                height: 170px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
