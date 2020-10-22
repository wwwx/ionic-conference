### TODO

- 【会议预定】缓存输入后的筛选条件
- 添加代码自动格式化配置 prettier （已添加）

### Bug

- 点击返回按钮，返回到上一页时 页面的返回按钮丢失 (已解决，IonBackButton 添加 defaultHref 属性)
- package.json 无法显示新增的 npm 包（dayjs react-tabs @types/react-tabs）
- 会议室预定，选择日期时间不能小于当前时间
- 某些浏览器中 IonSelect 组件的箭头 icon 写了隐藏样式但是还是显示出来了

### Improve

- 选一个合适的处理日期的工具库：date-fns / dayjs
- tabs 实现方案优化(已优化)
- 查看详情按钮的点击范围扩大到当前这个 item
- mock 使用方法改造，使用官网提供的方法模拟数据
- textarea 输入文字超出初始高度时，高度自适应
