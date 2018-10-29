import Login from '@/components/Login';
import StudentList from '@/components/StudentList';
import InterActiveTeacher from '@/components/InterActiveTeacher';
// import InterActiveStudent from '@/components/InterActiveTeacherStudent';
// import Home from '@/components/Home';
// import Profile from '@/components/Profile';
// import AddTeacher from '@/components/AddTeacher';
// import Progress from '@/components/Progress';
// import CourseList from '@/components/CourseList';
// import CourseDetail from '@/components/CourseDetail';

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      auth: ['teacher', 'student'],
    },
  },
  {
    path: '/student_list',
    name: 'StudentList',
    component: StudentList,
    meta: {
      title: '学生管理',
      auth: ['teacher'],
    },
  },
  {
    path: '/inter_active_teacher',
    name: 'InterActiveTeacher',
    component: InterActiveTeacher,
    meta: {
      title: '师生互动',
      auth: ['teacher'],
    },
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   meta: {
  //     title: '首页',
  //     auth: ['student']
  //   }
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: Profile,
  //   meta: {
  //     title: '个人中心',
  //     auth: ['student']
  //   }
  // },
  // {
  //   path: '/inter_active_student',
  //   name: 'InterActiveStudent',
  //   component: InterActiveStudent,
  //   meta: {
  //     title: '师生互动',
  //     auth: ['student']
  //   }
  // },
  // {
  //   path: '/add_teacher',
  //   name: 'AddTeacher',
  //   component: AddTeacher,
  //   meta: {
  //     title: '添加教授',
  //     auth: ['student']
  //   }
  // },
  // {
  //   path: '/progress',
  //   name: 'Progress',
  //   component: Progress,
  //   meta: {
  //     title: '进度',
  //     auth: ['student']
  //   }
  // },
  // {
  //   path: '/courses',
  //   name: 'Courses',
  //   component: Courses,
  //   meta: {
  //     title: '课程列表',
  //     auth: ['student']
  //   }
  // },
  // {
  //   path: '/course_list',
  //   name: 'CourseList',
  //   component: CourseList,
  //   meta: {
  //     title: '课程列表',
  //     auth: ['student']
  //   }
  // },
  // {
  //   path: '/course_detail',
  //   name: 'CourseDetail',
  //   component: CourseDetail,
  //   meta: {
  //     title: '课程列表',
  //     auth: ['student']
  //   }
  // },
];
