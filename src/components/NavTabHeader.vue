<template>
<div>
  <div class="nav-header-wrapper">
    <div class="header-wrapper">
      <div class="header-left">
        <a class="left-info" href="javascript:void(0);" v-for="(item,index) in left" :key="index">
          <span>{{item}}</span>
        </a>
      </div>
      <div class="header-right">
        <a href="javascript:void(0);">
          <span>登录</span>
        </a>
        <a href="javascript:void(0);">
          <span>注册</span>
        </a>
        <a href="javascript:void(0);">
          <span>消息通知</span>
        </a>
        <a href="javascript:void(0);" class="shop-wrapper">
          <i class="el-icon-shopping-cart-2 shop-icon"></i>
          <span class="shop-font">
            购物车 ({{shopNumber}})
          </span>
          <!-- <span>({{shopNumber}})</span> -->
          <div class="shopcart">
            <div class="shop-cart-info">
              购物车里还没有东西，赶紧选购吧！
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="header-tab">
    <div class="tab-icon">
      <a href="/" class="icon-info">
      </a>
    </div>
    <div class="tab-tab">
      <ul>
        <li
        v-for="(item,index) in tabInfo"
        :key="index"
        @mouseleave="hindList(index)" @mouseenter="showList(index)"
        >
          <a href=""><p>{{item}}</p></a>
        </li>
      </ul>
    </div>
    <div class="tab-search">
      <form action="/">
        <input type="search" name="search" id="search" />
        <div class="search-info">
          <i class="el-icon-search"></i>
          <input type="submit" value=""/>
        </div>
      </form>
    </div>
  </div>
  <div>
    <div class="childer" :class="showShopList?'childer-animation-show':'.childer-animation-hidden'"
    @mouseenter="showList(0)" @mouseleave="hindList(0)">
        <ul>
          <li v-for="(item, index) in tabChilder" :key="index">
            <div class="childer-img">
              <img :src="item.img" alt="">
            </div>
            <div class="childer-info">
              <span>{{item.info}}</span>
            </div>
            <div class="childer-mony">
              <span>{{item.mony}}</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavTabHeader',
  data() {
    return {
      showShopList: false,
      left: ['小米商城', 'MIUI', '云服务', '金融'],
      tabInfo: ['小米手机', 'Redmi红米', '电视', '笔记本'],
      tabChilder: [
        { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=100&h=69&f=webp&q=90', info: '小米10 青春版 5G', mony: '2099起' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90', info: '小米10 青春版 5G', mony: '2099起' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=200&h=138&f=webp&q=90', info: '小米10 青春版 5G', mony: '2099起' }, { img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=200&h=138&f=webp&q=90', info: '小米10 青春版 5G', mony: '2099起' }, { img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=200&h=138', info: '小米10 青春版 5G', mony: '2099起' }, { img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png?thumb=1&w=200&h=138', info: '小米10 青春版 5G', mony: '2099起' },
      ],
    };
  },
  props: {
    shopNumber: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    showList(index) {
      if (index === 0) {
        this.showShopList = true;
      }
      window.console.log(index);
    },
    hindList(index) {
      if (index === 0) {
        this.showShopList = false;
      }
      window.console.log(index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin.scss';
@import '../assets/css/config.scss';

.nav-header-wrapper {
  font-size: $fontK;
  background: $colorB;
  .header-wrapper {
    @include flex();
    width: 1226px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    .header-left {
      .left-info {
        margin-right: 10px;
        color: #b0b0b0;
      }
    }
    .header-right {
      a{
        margin-left: 10px;
        color: #b0b0b0;
      }
      .shop-wrapper{
        width: 120px;
        height: 40px;
        position: relative;
        display: inline-block;
        text-align: center;
        background: $colorL;
        .shop-icon{
          font-size: $fontG;
          vertical-align: -4px
        }
        .shop-font{
          margin: 0 4px;
        }
        &:hover{
          i,span{
            color: $colorA;
          }
          &{
            background: $colorG;
          }
          .shopcart{
            opacity: 1;
            visibility: visible;
            height: 100px;
            color: $colorL;
            z-index: 999;
            transition: .3s;
          }
        }
        .shopcart{
          position: absolute;
          visibility: hidden;
          right: 0;
          top: 40px;
          width: 316px;
          height: 0px;
          color: $colorG;
          background: $colorG;
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
          transition: .3s;
          .shop-cart-info{
            line-height: 100px;
            text-align: center;
          }
        }
      }
    }
  }
}
.header-tab{
  display: flex;
  position: relative;
  width: 1226px;
  height: 100px;
  margin: 0 auto;
  .tab-icon{
    display: flex;
    align-content: center;
    .icon-info{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 55px;
      height: 55px;
      background: $colorA;
      &:hover{
        &::after{
          left: 0;
          visibility: visible;
        }
        &::before{
          left: -55px;
        }
      }
      &::before{
        @include bgPosition(55px, 55px, 0,0,'','https://s02.mifile.cn/assets/static/image/mi-logo.png');
        transition: .3s;
      }
      &::after{
          @include bgPosition(55px, 55px, 0,55px,'','https://s02.mifile.cn/assets/static/image/mi-home.png');
        visibility: hidden;
        transition: .3s;
      }
    }
  }
  .tab-tab{
    width: 100%;
    ul{
      padding-left: 30px;
      padding-top: $fontK;
      display: flex;
      height: 88px;
      font-size: $fontJ;
      color: $colorB;
      li{
        padding: 26px 10px 38px 10px;
        text-align: center;
        line-height: $fontE;
        a{
          p{
            color: $colorB;
          }
        }
        &:hover{
          a{
            p{
              color: $colorA;
            }
          }
        }
      }
    }
  }
  .tab-search{
    @include flex(center,'');
    form{
      @include flex('',center);
      position: relative;
      #search{
        width: 223px;
        height: 43px;
        border: 1px solid #e0e0e0;
        border-right: none;
        &:focus{
          border: 1px solid $colorA;
          input[type="submit"]{
            border: 1px solid $colorA;
          }
        }
      }
      .search-info{
        i{
        position: absolute;
        top: 38px;
        left: 230px;
        font-size: $fontE;
        }
        input[type="submit"]{
          width: 38px;
          height: 43px;
          background: $colorG;
          box-shadow: none;
          border: 1px solid #e0e0e0;
        }
        &:hover{
          input[type="submit"]{
            background: $colorA;
          }
          i{
            color: $colorG;
          }
        }
      }
    }
  }
}
.childer{
  position: absolute;
  visibility: hidden;
  left: 0;
  top: 140px;
  width: 100%;
  border-top: 1px solid $colorF;
  overflow: hidden;
  box-shadow: 0 2px 0px rgba(0,0,0,.15);
  animation: .5s;
  ul{
    @include flex(space-around);
    list-style: none;
    width: $min-width;
    margin: 0 auto;
    padding: 20px 0 10px 0;
    li{
      text-align: center;
      .childer-img{
        border-right:1px solid $colorF;
        width: 160px;
        img{
          width: 100%;
        }
      }
      .childer-info{
        margin-top: 10px;
        span{
          color: #757575;
        }
      }
      .childer-mony{
        margin: 10px;
        span{
          color: $colorA;
        }
      }
      &:last-child{
        .childer-img{
          border-right: none;
        }
      }
    }
  }
}
.childer-animation-show{
  visibility: visible;
  animation: mymove .5s linear;
}
@keyframes mymove {
  0% {height: 0;}
  100% {height: 205px;}
}
.childer-animation-hidden{
  animation: myleve .5s linear;
}
@keyframes myleve {
  0% {height: 205px;}
  100% {height: 0;}
}
a{
  span:hover{
    color: $colorG;
  }
}
</style>
