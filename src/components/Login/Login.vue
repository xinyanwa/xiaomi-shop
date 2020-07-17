<template>
    <div class="login-header-wrapper">
        <div class="header-wrapper">
            <header>
                <img alt=""
                     src="https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png">
            </header>
        </div>
        <div class="bgimg">
            <div class="login-form">
                <el-form class="form">
                    <div class="select-mode">
                        <span @click="colorMode = true">
                            <a href="" class="mode" :class="colorMode ? 'color-mode' : ''">账号登录</a>
                        </span>
                        <span class="split-line"></span>
                        <span @click="colorMode = false">
                            <a
                                    href="javascript:void(0);"
                                    class="mode" :class="colorMode ? '' : 'color-mode'"
                            >
                                扫码登录
                            </a>
                        </span>
                    </div>
                    <div class="userInfo">
                        <el-input
                                class="userName"
                                v-model="userName"
                                placeholder="邮箱/手机号码/小米ID"></el-input>
                        <el-input
                                class="password"
                                v-model="password"
                                placeholder="密码"
                        />
                    <el-button class="submit-button" :type="colorButton">登录</el-button>
                    </div>
                    <p class="phone-mode">
                        <span><a href="">手机短信登录</a></span>
                        <span>/</span>
                        <span><a href="">注册</a></span>
                    </p>
                    <p class="sign-up">
                        <span><a href="">立即注册</a></span>
                        <span class="split-line">|</span>
                        <span><a href="">忘记密码?</a></span>
                    </p>
                    <div class="login-mode">
                        <fieldset>
                            <legend align="center">其他方式登录</legend>
                            <div class="login-icon">
                                <a href="">
                                    <i class="we-chat el-icon-watermelon"></i>
                                </a>
                                <a href="">
                                    <i class="wei-bo el-icon-cherry"></i>
                                </a>
                                <a href="">
                                    <i class="alipay el-icon-pear"></i>
                                </a>
                                <a href="">
                                    <i class="qq el-icon-goblet-square-full"></i>
                                </a>
                            </div>
                        </fieldset>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="login-footer">
            <div class="font-mode">
                <ul>
                    <li v-for="(item, index) in loginFooterInfo" :key="index">
                        <a href="">
                            <span>
                                {{item}}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <p>
                小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Logining',
  data() {
    return {
      userName: '',
      password: '',
      colorMode: true,
      colorButton: 'primary',
      loginFooterInfo: [
        '简体',
        '繁体',
        'English',
        '常见问题',
        '隐私权限',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    .login-header-wrapper {
        .header-wrapper {
            @include container();

            header {
                img {
                }
            }
        }
        .bgimg{
            width: 100%;
            height: 600px;
            position: relative;
            background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aece569d6689b4c461bb53efd9eea9c7.jpg");
            background-position: top center;
            background-repeat: no-repeat;
            .login-form{
                @include container();
                display: flex;
                justify-content: flex-end;
                .form{
                    margin-top: 30px;
                    width: 410px;
                    background: $colorG;
                    .select-mode{
                        padding: 40px 0 40px 0;
                        font-size: $fontE;
                        text-align: center;
                        .split-line{
                            width: 1px;
                            height: 24px;
                            border: 1px solid #e0e0e0;
                            margin: 0 35px 0 35px;
                        }
                        a{
                            color: $colorC;
                        }
                        .mode:hover{
                            color: $colorA;
                        }
                    }
                    .userInfo{
                        width: 360px;
                        margin: 0 auto;
                        .userName{
                        }
                        .password{
                            margin-top: 14px;
                            margin-bottom: 24px;
                        }
                        .submit-button{
                            width: 360px;
                            margin-bottom: 14px;
                            background-color: $colorA;
                            border-color: $colorA;
                        }
                    }
                    .phone-mode{
                        text-align: center;
                        margin-bottom: 30px;
                        a{
                            font-size: $fontJ;
                            color: $colorA;
                        }
                    }
                    .sign-up{
                        text-align: center;
                        margin-bottom: 126px;
                        a{
                            font-size: $fontJ;
                            color: $colorD;
                        }
                        a:hover{
                            color: $colorA;
                        }
                        .split-line{
                            color: $colorD;
                            padding-left: 5px;
                            padding-right: 5px;
                        }
                    }
                    .login-mode{
                        height: 92px;
                        fieldset{
                            border-top: 1px solid #e0e0e0;
                            border-bottom: none;
                            border-left: none;
                            border-right: none;
                            legend{
                                font-size: 14px;
                                color: #bbb;
                            }
                            .login-icon{
                                padding: 20px 40px;
                                @include flex(space-around);
                                font-size: 30px;
                                a{
                                    .we-chat{
                                        color: #00d20d;
                                    }
                                    .wei-bo{
                                        color: #d32f2f;
                                    }
                                    .alipay{
                                        color: #0ae;
                                    }
                                    .qq{
                                        color: #0288d1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .login-footer{
            padding-top: 100px;
            text-align: center;
            .font-mode{
                ul{
                    @include flex(center);
                    li{
                        padding: 0 10px;
                        border-right: 1.2px solid #757575;
                        &:last-child{
                            border-right: 0px;
                        }
                        a{
                            font-size: 14px;
                            color: #757575;
                        }
                        &:hover{
                            a{
                                color: $colorB;
                            }
                        }
                    }
                }
            }
            p{
                font-size: $fontJ;
                color: #757575;
                padding: 10px 0;
            }
        }
    }
    .color-mode{
        color: $colorA !important;
    }
</style>
