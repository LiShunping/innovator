<template>
  <div class="page-login">
    <div class="header clearfix">
      <div class="logo"></div>
      <div class="title"><span>会员登录</span></div>
    </div>

    <div class="main">
      <div class="wrap-content">
        <div class="title">养老智能培训教育平台</div>
        <div class="wrap-form">
          <el-form label-position="right">
            <el-form-item label="">
              <el-input placeholder="请输入用户名" v-model="userName">
                <template slot="prepend"><i class="iconfont icon-my"></i></template>
              </el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input placeholder="请输入密码" type="password" v-model="password">
                <template slot="prepend"><i class="iconfont icon-command"></i></template>
              </el-input>
            </el-form-item>
            <el-form-item label="" class="wrap-form-item-verify">
              <el-input placeholder="请输入验证码" type="password" v-model="verifyCode">
                <template slot="prepend"><i class="iconfont icon-edit"></i></template>
              </el-input>
              <div class="verify-code"></div>
            </el-form-item>
            <el-form-item label="" class="wrap-form-item-submit">
              <el-button type="primary">登  录</el-button>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="sence"></div>
      <div>天津茵诺医疗科技有限公司</div>
      <div>版权所有 侵权必究</div>
      <div>Copyright © 2018-2019 Tianjin Innovator Medical</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      userName: '',
      password: '',
      verifyCode: '',
      rememberPassword: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.page-login {
  .header,
  .footer {
    width: 100%;
    color: #000;
    background: #fff;
  }
  .header {
    font-size: 2.5em;
    height: 1em;
    line-height: 1em;
    padding: 0.5em 0;
    .logo,
    .gap,
    .title {
      height: 100%;
      vertical-align: middle;
      float: left;
    }
    .logo {
      width: 2em;
    }
    .title {
      left: 0;
      z-index: 1;
      width: 4em;
      padding-left: 0.5em;
      border-left: 2px solid #000;
      span {
        display: block;
        vertical-align: middle;
        line-height: 100%;
      }
    }
  }

  .main {
    height: 578px;
    background-color: #31758d;
    .wrap-content {
      position: relative;
      width: 1080px;
      height: 100%;
      margin: 0 auto;
      .title {
        position: absolute;
        top: 50%;
        margin-top: -1.5em;
        width: 10em;
        color: #fff;
        font-size: 3em;
        line-height: 3em;
        font-weight: bold;
        text-align: center;
      }
      .wrap-form {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        right: 0;
        width: 360px;
        height: 360px;
        padding: 60px 36px 0;
        margin-top: -180px;
        background-color: #fff;
        .wrap-form-item-verify {
          .el-input {
            width: 60%;
          }
          .verify-code {
            float: right;
            width: 7.2em;
            height: 40px;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            background-color: #fff;
            box-sizing: border-box;
          }
        }
        .wrap-form-item-submit {
          margin-bottom: 10px;
          .el-button {
            width: 100%;
          }
        }
      }
    }
  }

  .footer {
    position: fixed;
    z-index: 1;
    width: 100%;
    bottom: 0;
    padding-bottom: 20px;
    font-size: 0.7em;
    text-align: center;
  }
}
</style>
