<template>
    <div class="phone-header-item">
        <div class="view-all" v-if="headerType === 3">
            <span>查看全部</span>
            <div class="view-icon">
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="shop-category" v-else>
            <ul>
                <li
                        v-for="(item, index) in shopCategoryList" :key="index"
                        @mouseenter="removeStyle(index)"
                        :class="{hoverlinumber:index === hoverLi }"
                >
                    <span>{{item}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PhoneHeaderItem',
  props: {
    shopCategoryList: {
      type: Array,
      default: () => [],
    },
    headerType: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      hoverLi: 0,
    };
  },
  methods: {
    removeStyle(index) {
      this.hoverLi = index;
      console.log(index);
    },
  },
};
</script>

<style lang="scss" scoped>
    .phone-header-item{
        .view-all{
            display: flex;
            align-items: center;
            span{
                font-size: $fontI;
                color: $colorL;
            }
            .view-icon{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #b0b0b0;
                text-align: center;
                margin-left: 10px;
                // z-index: 9;
                i{
                    text-align: center;
                    line-height: 20px;
                    color: $colorG;
                    font-size: $fontJ;
                    font-weight: 800;
                }
            }
        }
        .shop-category{
            ul{
                @include flex();
                li{
                    margin-right: 30px;
                    &:last-child{
                        margin-right: 0;
                    }
                    span{
                        font-size: $fontI;
                    }
                }
            }
        }
    }
    .hoverlinumber{
        color: $colorA;
        span{
            padding-bottom: 5px;
            border-bottom: 2px solid $colorA;
        }
    }
</style>
