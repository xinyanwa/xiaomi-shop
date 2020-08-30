<template>
    <div class="register-main">
        <div class="register">
            <div class="register-wrapper">
                <div class="register-header">
                    <div class="register-color"></div>
                    <div class="register-header-img">
                        <img alt=""
                             src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png">
                    </div>
                    <div class="register-header-title">
                        <h4>注册小米账号</h4>
                    </div>
                </div>
                <div class="register-from">
                    <el-form :rules="register">
                        <div class="register-from-region">
                            <h4 class="region-title">国家/地区</h4>
                            <el-select class="register-region" filterable v-model="value">
                                <el-option-group
                                        :key="index"
                                        :label="item.label"
                                        v-for="(item, index) in countryData"
                                >
                                    <el-option
                                            :key="number"
                                            :label="info.lable"
                                            :value="info.full_cname"
                                            v-for="(info, number) in item.opacity"
                                    />
                                </el-option-group>
                            </el-select>
                            <p class="register-success-title">成功注册账号后，国家/地区将不能被修改</p>
                        </div>
                        <div class="register-from-phone">
                            <h4 class="phone-title">手机号码</h4>
                            <el-form-item prop="phone">
                                <el-input placeholder="请输入手机号码" v-model="phoneNumber">
                                    <el-select
                                            class="phone-select"
                                            placeholder="+86"
                                            slot="prepend"
                                            v-model="phoneChine"
                                    >
                                        <el-option-group
                                                :key="index"
                                                :label="item.label"
                                                v-for="(item, index) in countryData"
                                        >
                                            <el-option
                                                    :key="number"
                                                    :label="info.lable"
                                                    :value="info.full_cname"
                                                    v-for="(info, number) in item.opacity"
                                            />
                                        </el-option-group>
                                    </el-select>
                                </el-input>
                            </el-form-item>
                        </div>
                        <el-button
                                @click="nowRegister"
                                class="register-submit"
                                type="primary"
                        >
                            立即注册
                        </el-button>
                    </el-form>
                </div>
                <div class="msg">
                    <p>
                        已阅读并同意： 小米
                        <span><a class="register-title-bold" href="">用户协议</a></span>
                        和
                        <span><a class="register-title-bold" href="">隐私政策</a></span>
                    </p>
                </div>
            </div>
            <div class="register-footer">
                <div class="register-footer-language">
                    <ul>
                        <li :key="index" v-for="(item, index) in footerLanguage">
                            <span>
                                <a href="">
                                    {{item}}
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="register-footer-copy-info">
                    <p>
                        小米公司版权所有-京ICP备1xxx46444-京公网安备11010xxxx2020134号-京ICP证110507号
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      countryData: [],
      value: '中国',
      phoneNumber: '',
      phoneChine: '',
      footerLanguage: [
        '简体',
        '繁体',
        'English',
        '常见问题',
      ],
      register: {
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    getCountryData() {
      this.axios.get('/user/register')
        .then((res) => {
          // window.console.log(res);
          this.countryData = res.data.data.countryData;
        });
    },
    nowRegister() {
      this.$message({
        type: 'success',
        message: '注册成功',
      });
      this.$router.push('/');
    },
  },
  mounted() {
    this.getCountryData();
  },
};
</script>

<style lang="scss" scoped>
    .register-main {
        background: #f9f9f9;

        .register {
            background: #f9f9f9;

            .register-wrapper {
                @include container();
                background-color: $colorG;

                .register-header {
                    text-align: center;

                    .register-color {
                        width: 100%;
                        height: 80px;
                        background: #f9f9f9;
                    }

                    .register-header-img {
                        margin: 0 auto;
                        width: 50px;
                        height: 50px;

                        img {
                            width: 100%;
                        }
                    }

                    .register-header-title {
                        h4 {
                            font-size: 30px;
                            font-weight: normal;
                            padding: 40px 0;
                        }
                    }
                }

                .register-from {
                    width: 300px;
                    margin: 0 auto;

                    .register-from-region {
                        .region-title {
                            font-size: 14px;
                            color: $colorB;
                            padding-bottom: 10px;
                            font-weight: normal;
                        }

                        .register-region {
                            width: 100%;
                        }

                        .register-success-title {
                            margin: 15px 0;
                            font-size: $fontJ;
                        }
                    }

                    .register-from-phone {
                        .phone-title {
                            font-size: 14px;
                            color: $colorB;
                            padding-bottom: 10px;
                            font-weight: normal;
                        }

                        .phone-select {
                            width: 80px;
                            text-wrap: normal;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }

                    .register-submit {
                        width: 100%;
                        margin-top: 30px;
                    }
                }

                .msg {
                    margin-top: 50px;
                    padding-bottom: 30px;
                    text-align: center;

                    p {
                        color: #9d9d9d;
                        font-size: 14px;

                        span {
                            .register-title-bold {
                                color: $colorB;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }

            .register-footer {
                padding-top: 30px;
                height: 80px;

                .register-footer-language {
                    margin-top: 10px;

                    ul {
                        @include flex(center, center);

                        li {
                            height: 20px;
                            padding: 0 10px;
                            border-right: 1px solid #757575;
                            line-height: 20px;

                            &:last-child {
                                padding-right: 0;
                                border-right: none;
                            }

                            &:hover {
                                span {
                                    a {
                                        color: $colorB;
                                    }
                                }
                            }

                            span {
                                a {
                                    color: #757575;
                                    font-size: $fontJ;
                                }
                            }
                        }
                    }
                }

                .register-footer-copy-info {
                    text-align: center;

                    p {
                        padding: 10px;
                        color: #d9d9d9;
                        font-size: $fontJ;
                    }
                }
            }
        }
    }
</style>
