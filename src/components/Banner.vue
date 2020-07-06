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
                   <li class="category-item" v-for="(item, index) in categoryList" :key="index">
                       <a href="">
                           <span>{{item}}</span>
                           <i class="el-icon-arrow-right"></i>
                       </a>
                       <div class="childer">
                           <ul v-for="(item, index) in childer" :key="index">
                               <li v-for="(info, number) in item" :key="number">
                                   <a href="">
                                       <img :src="info.img" alt="">
                                       <span>{{info.title}}</span>
                                   </a>
                               </li>
                           </ul>
                       </div>
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
      childer: [
        [
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
          { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90', title: 'Readmi9' },
        ],
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
    .banner-wrapper{
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
                        .childer{
                            position: absolute;
                            @include flex();
                            margin-left: 460px;
                            ul{
                                @include flex();
                                flex-direction: column;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
