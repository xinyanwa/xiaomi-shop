<template>
  <div>
    <div class="footer-wrapper">
        <div class="footer-header">
          <ul>
            <li v-for="(item,index) in headerInfo" :key="index">
              <div class="hover">
                <i :class="item.icon"></i>
                <div>
                  <span>{{item.title}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer-info">
          <div class="footer-footer-info">
            <dl v-for="(item, index) in footerInfo" :key="index">
              <dt>{{item.title}}</dt>
              <dd v-for="(info, sum) in item.info" :key="sum">
                <a href="javascript:void(0);">{{info}}</a>
              </dd>
            </dl>
            <div class="about-info">
              <p class="phone">400-xxx-5678</p>
              <p>8:00-18:00（仅收市话费）</p>
              <a href="">
                <div class="services">
                  <i class="el-icon-s-comment"></i>
                  <span>人工服务</span>
                </div>
              </a>
              <div class="wechat">
                <span class="attention">关注小米:</span>
                <i class="el-icon-ice-cream-round"></i>
                <i class="el-icon-lollipop"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="site-info">
      <div class="site-wrapper">
        <div class="log"></div>
        <div class="text-info">
          <p>
            <a href="" v-for="(item, index) in siteInfo" :key="index">
              <span>{{item}}</span>
              <span class="text-segmentation">|</span>
            </a>
          </p>
        </div>
        <div class="link-info">
          <p v-for="(item, index) in siteRecord" :key="index">
            <a href="" v-for="(info, index) in item" :key="index">
              <span>{{info}}</span>
            </a>
          </p>
          <div class="site-link">
            <a href="" v-for="(item, index) in siteLink" :key="index">
              <img :src="item" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="bg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavTabFooter',
  data() {
    return {
      headerInfo: [
        { icon: 'el-icon-set-up', title: '预约维修服务' },
        { icon: 'el-icon-warning-outline', title: '七天无理由退货' },
        { icon: 'el-icon-help', title: '15天免费更换' },
        { icon: 'el-icon-present', title: '满99元包邮' },
        { icon: 'el-icon-location-information', title: '520余家售后网点' },
      ],
      footerInfo: [
        { title: '帮助中心', info: ['账户管理', '购物指南', '订单操作'] },
        { title: '服务支持', info: ['售后政策', '自助服务', '相关下载'] },
        { title: '线下门店', info: ['小米之家', '服务网点', '授权体验店'] },
        { title: '关于小米', info: ['了解小米', '加入小米', '投资者关系', '企业社会责任', '廉洁举报'] },
        { title: '关注我们', info: ['新浪微博', '官方微信', '联系我们', '公益基金会'] },
        { title: '特色服务', info: ['F 码通道', '礼物码', '防伪查询'] },
      ],
      siteInfo: ['小米商城', 'MIUI', '米家', '米聊', '多看', '游戏', '路由器', '米粉卡', '政企服务', '小米天猫店', '小米集团隐私政策', '小米商城隐私政策', '小米商城用户协议', '问题反馈'],
      siteRecord: [
        [
          'mi.com', '京ICP证110507号', '京ICP备10046444号', '京公网安备11010802020134号', '京网文[2020]0276-042号',
        ],
        [
          '（京）网械平台备字（2018）第00005号', '互联网药品信息服务资格证 (京) -非经营性-2014-0090', '营业执照', '医疗器械公告',
        ],
        [
          '增值电信业务许可证', '网络食品经营备案（京）【2018】', 'WLSPJYBAHF-12', '食品经营许可证',
        ],
        [
          '违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试',
        ],
      ],
      siteLink: [
        'https://i1.mifile.cn/f/i/17/site/truste.png', 'https://s01.mifile.cn/i/v-logo-2.png', 'https://s01.mifile.cn/i/v-logo-1.png', 'https://s01.mifile.cn/i/v-logo-3.png', 'https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-wrapper{
  .footer-header{
    @include container();
    height: 80px;
    border-bottom: 1px solid #e0e0e0;
    ul{
      list-style: none;
      height: 100%;
      @include flex();
      li{
        font-size: $fontI;
        width: 100%;
        border-right: 1px solid #e0e0e0;
        &:last-child{
          border: none;
        }
        .hover{
          @include flex(center);
          &:hover{
            i,span{
              color: $colorA;
            }
          }
          i{
          font-size: $fontE;
          color: #616161;
          margin-right: 5px;
          transition: color .2s;
          }
          span{
            color: #616161;
            transition: color .2s;
          }
        }
      }
    }
  }
  .footer-info{
    .footer-footer-info{
      @include flex( space-between, '');
      @include container();
      padding: 20px 0;
      dl{
        dt{
          font-size: $fontJ;
          margin-bottom: 26px;
        }
        dd{
          margin-top: 10px;
          a{
            color: #757575;
          }
          &:hover{
            a{
              color: $colorA;
            }
          }
        }
      }
      .about-info{
        width: 244.4px;
        height: 100%;
        text-align: center;
        border-left: 1px solid #e0e0e0;
        .phone{
          font-size: $fontF;
          color: $colorA;
        }
        p{
          margin: 0 0 5px 0;
        }
        a{
          display: inline-block;
          width: 100%;
          color: $colorA;
          .services{
            margin: 0 auto;
            width: 118px;
            height: 28px;
            border: 1px solid $colorA;
            transition: .4s;
            span{
              line-height: 28px;
              margin-left: 5px;
            }
            &:hover{
              background: $colorA;
              color: $colorG;
            }
         }
        }
        .wechat{
          margin-top: 10px;
          @include flex(center);
          .attention{
            line-height: 24px;
          }
          i{
            font-size: $fontE;
            margin-left: 10px;
            margin-right: 5px;
            &:last-child{
              margin: 0;
            }
            &:hover{
              color: $colorA;
            }
          }
        }
      }
    }
  }
}
.site-info{
  background: #fafafa;
  height: 170px;
  padding: 30px 0;
  .site-wrapper{
    @include container();
    position: relative;
    .log{
      @include bgPosition(57px,57px,0,0,'','https://s01.mifile.cn/i/logo-footer.png?v2')
    }
    .text-info{
      margin-left: 67px;
      a{
        color: #757575;
        &:hover{
          color: $colorA;
          .text-segmentation{
            color: #757575;
          }
        }
      }
      .text-segmentation{
        margin: 0 3px;
      }
    }
    .link-info{
      margin-left: 67px;
      p{
        a{
          color: #b0b0b0;
          span{
            margin-right: 5px !important;
            &:last-child{
              margin: 0;
            }
          }
          &:hover{
            color: $colorA;
          }
        }
      }
      .site-link{
        img{
          height: 28px;
        }
      }
    }
  }
  .bg{
    margin-top: 30px;
    width: 100%;
    height: 19px;
    background: url(https://cnbj1.fds.api.xiaomi.com/staticsfile/global/slogan2020.png) no-repeat center 0;
  }
}
</style>
