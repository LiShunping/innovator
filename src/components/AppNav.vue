 <template>
  <div class="navigation">
    <!-- <el-menu :default-active="$route.path" router>
      <el-menu-item v-for="item in navs" :key="item.path" :index="item.path"></el-menu-item>
    </el-menu> -->
  </div>
</template>

<script>
import navs from '@/router/map';

export default {
  props: {},

  data() {
    return {
      navs: [],
    };
  },

  mounted() {
    this.navs = navs;
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
  .el-menu {
    padding-top: 30px;
    background-color: #fafafa;
  }

  hr {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }

  .el-menu-item {
    height: 60px;
    line-height: 60px;
    padding-left: 26px !important;
    padding-right: 0;
    color: #616865;
    font-size: 18px;

    &:hover,
    &:active,
    &.is-active,
    &.is-active:hover {
      background-color: #f4f4f4;
    }

    &.is-active,
    &:active,
    &.is-active:hover {
      &::before {
        display: inline-block;
        float: left;
        content: "";
        width: 4px;
        height: 100%;
        margin-left: -26px;
        background-color: #4285f4;
      }
    }

    &:focus {
      outline: none;
    }

    &.is-active {
      color: #4285f4;
    }

    i.iconfont {
      vertical-align: middle;
      margin-right: 12px;
      font-size: 26px;
      line-height: 60px;
    }
  }
</style>
