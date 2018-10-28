 <template>
  <div class="navigation">
    <el-menu
      :default-active="$route.path"
      :router="true"
      mode="horizontal"
      background-color="#31758d"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="item in navs"
        v-if="~item.meta.auth.indexOf(identity.role)"
        :key="item.path"
        :index="item.path">
        {{item.meta.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import navs from '@/router/map';

export default {
  props: {
    identity: {
      type: Object,
      default() {
        return {
          role: 'student',
        };
      },
    },
  },

  data() {
    return {
      navs: [],
    };
  },

  mounted() {
    this.navs = navs;
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
  .navigation {
    .el-menu {
      padding: 0 60px;
      border-radius: 6px;
      background-color: #31758d;
    }

    .el-menu-item {
      height: 48px;
      line-height: 48px;
      font-size: 1em;
    }
  }
</style>
