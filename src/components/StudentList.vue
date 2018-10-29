<template>
  <div class="view-student-list view-main">
    <div class="header">
      <span class="title">学生列表</span>
    </div>

    <ol class="student-list clearfix">
      <li class="student" v-for="item in students">
        <span class="name">{{item.name}}</span>
        <i class="iconfont icon-mail"></i>
        <span class="emails-num">({{item.emailsNum}})</span>
        <el-button type="primary" size="mini">互动</el-button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      students: [{
        id: 1,
        name: '李顺平',
        emailsNum: 2,
      }, {
        id: 1,
        name: '李顺平',
        emailsNum: 2,
      }, {
        id: 1,
        name: '李顺平',
        emailsNum: 2,
      }, {
        id: 1,
        name: '李顺平',
        emailsNum: 2,
      }],
    };
  },
};
</script>

<style lang="scss" scoped>
.view-student-list {
  .student-list {
    background-color: #fff;
    padding: 1.6em 3em;
    border-radius: 4px;
    margin: 0;
    li {
      width: 33.3%;
      height: 2em;
      line-height: 2em;
      margin: 0.5em 0;
      float: left;
      span, i {
        margin-right: 0.5em;
      }
    }
  }
}
</style>
