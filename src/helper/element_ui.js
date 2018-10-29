/**
 * 按需引入ElementUI组件
 * 具体引用方式查看 http://element.eleme.io/#/zh-CN/component/quickstart
 */
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/element_ui.scss';

import {
  Menu, MenuItem,
  Tag,
  Table, TableColumn, Pagination,
  Tabs, TabPane,
  // Dialog, Message, Notification, Popover, Tooltip, Loading,
  Form, FormItem,
  Button,
  Input, InputNumber,
  Select, Option,
  Checkbox, CheckboxGroup, CheckboxButton, Radio, RadioButton, RadioGroup,
  DatePicker,
  Slider,
} from 'element-ui';

const components = [
  Menu, MenuItem,
  Tag,
  Table, TableColumn, Pagination,
  Tabs, TabPane,
  // Dialog, Message, Notification, Popover, Tooltip, Loading,
  Form, FormItem,
  Button,
  Input, InputNumber,
  Select, Option,
  Checkbox, CheckboxGroup, CheckboxButton, Radio, RadioButton, RadioGroup,
  DatePicker,
  Slider,
];

components.forEach((item) => {
  Vue.use(item);
});

// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message
