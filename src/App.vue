<template>
  <div id="app" class="app-root">
    <login v-if="isLoginPage"></login>

    <div v-if="!isLoginPage" class="header clearfix">
      <div class="left">
        <div class="logo"></div>
        <div class="title">天津茵诺医疗科技有限公司</div>
      </div>
      <div class="right">
        <div class="name">用户名</div>
        <div class="wrap-msg">
          消息(
          <span></span>
          )
        </div>
        <div class="btn-login-out">退出</div>
      </div>
    </div>

    <div v-if="!isLoginPage" class="app-main">
      <app-nav :identity="identity"></app-nav>
      <router-view/>
    </div>

    <div v-if="!isLoginPage" class="footer">
      <div class="">天津茵诺医疗科技有限公司</div>
      <div class="">版权所有 侵权必究</div>
      <div>Copyright © 2018-2019 Tianjin Innovator Medical</div>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav';
import Login from '@/components/Login';

export default {
  data() {
    return {
      identity: {
        role: 'teacher',
      },
    };
  },

  name: 'App',

  mounted() {
  },

  components: {
    AppNav,
    Login,
  },

  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    },
  },
};
</script>

<style lang="scss" scoped>
  .app-root {
    .header,
    .footer {
      box-sizing: border-box;
      position: fixed;
      left: 0;
      z-index: 1;
      width: 100%;
      padding: 0.5em 1em;
      color: #fff;
      background: #31758d;
    }
    .header {
      top: 0;
      height: 48px;
      font-size: 1.2em;
      .left,
      .right {
        display: inline-block;
        height: 100%;
        div {
          height: 32px;
          line-height: 32px;
        }
      }
      .left {
        float: left;
        div {
          font-size: 1.3em;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .right {
        float: right;
        .name,
        .wrap-msg,
        .btn-login-out {
          display: inline-block;
          vertical-align: middle;
          margin-left: 0.5em;
        }
      }
    }

    .footer {
      bottom: 0;
      font-size: 0.7em;
      text-align: center;
    }

    .app-main {
      width: 1080px;
      margin: 72px auto 108px;
    }
  }
</style>
