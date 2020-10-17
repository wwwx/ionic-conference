### TODO

- 【会议预定】缓存输入后的筛选条件
- 添加代码自动格式化配置 prettier

### Bug

- 点击返回按钮，返回到上一页时 页面的返回按钮丢失 (IonBackButton 添加 defaultHref 属性)
- package.json 无法显示新增的npm包（dayjs react-tabs @types/react-tabs）

### Improve

- 选一个合适的处理日期的工具库：date-fns / dayjs
- tabs 实现方案优化(目前的实现方式感觉不太好)

```
ionic-conference
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ ionic.config.json
├─ ionic.starter.json
├─ package.json
├─ public
│  ├─ assets
│  │  ├─ icon
│  │  │  ├─ favicon.png
│  │  │  └─ icon.png
│  │  └─ shapes.svg
│  ├─ images
│  │  ├─ close.png
│  │  ├─ eglass-arrow-right.png
│  │  ├─ icon_call@2x.png
│  │  ├─ icon_empty@2x.png
│  │  ├─ icon_schedule@2x.png
│  │  ├─ icon_scheduled@2x.png
│  │  ├─ mine2x.png
│  │  └─ summary@2x.png
│  ├─ index.html
│  └─ manifest.json
├─ README.md
├─ src
│  ├─ App.scss
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ components
│  │  ├─ AppHeader.tsx
│  │  ├─ BackHome.scss
│  │  ├─ BackHome.tsx
│  │  ├─ Calendar.scss
│  │  ├─ Calendar.tsx
│  │  ├─ Common.scss
│  │  ├─ Common.tsx
│  │  ├─ ExploreContainer.css
│  │  ├─ ExploreContainer.tsx
│  │  ├─ Loading.scss
│  │  ├─ Loading.tsx
│  │  ├─ Modal.scss
│  │  ├─ Modal.tsx
│  │  ├─ TimePicker.scss
│  │  └─ TimePicker.tsx
│  ├─ custom-bootstrap
│  │  ├─ index.scss
│  │  ├─ mixins
│  │  │  ├─ _clearfix.scss
│  │  │  └─ _text-truncate.scss
│  │  ├─ utilities
│  │  │  ├─ _border.scss
│  │  │  ├─ _clearfix.scss
│  │  │  ├─ _display.scss
│  │  │  ├─ _flex.scss
│  │  │  ├─ _float.scss
│  │  │  ├─ _font.scss
│  │  │  ├─ _spacing.scss
│  │  │  └─ _text.scss
│  │  ├─ _mixins.scss
│  │  ├─ _utilities.scss
│  │  └─ _variable.scss
│  ├─ hooks
│  │  └─ useFetch.ts
│  ├─ index.tsx
│  ├─ mock
│  │  ├─ home.js
│  │  └─ index.js
│  ├─ pages
│  │  ├─ home
│  │  │  ├─ Butler.tsx
│  │  │  ├─ Home.tsx
│  │  │  ├─ MySchedule.tsx
│  │  │  ├─ Profile.tsx
│  │  │  ├─ Schedule.tsx
│  │  │  └─ ScheduleList.tsx
│  │  ├─ mine
│  │  │  ├─ Card
│  │  │  │  ├─ Card.tsx
│  │  │  │  ├─ ConferenceFinishedCard.tsx
│  │  │  │  ├─ ConferenceHasNotStartCard.tsx
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ InviteCard.tsx
│  │  │  │  └─ type.ts
│  │  │  ├─ Conference.tsx
│  │  │  ├─ Invite.tsx
│  │  │  └─ Mine.tsx
│  │  ├─ reservation
│  │  │  ├─ Reservation.tsx
│  │  │  ├─ SearchByAddress.tsx
│  │  │  └─ SearchByTime.tsx
│  │  └─ room
│  │     ├─ AvailableRoom.tsx
│  │     ├─ images
│  │     │  ├─ room1.jpg
│  │     │  ├─ room2.jpg
│  │     │  └─ room3.jpg
│  │     └─ RoomDetail.tsx
│  ├─ react-app-env.d.ts
│  ├─ service
│  │  ├─ api-service.ts
│  │  ├─ base-service.ts
│  │  ├─ enum.ts
│  │  └─ mine.model.ts
│  ├─ serviceWorker.ts
│  ├─ setupTests.ts
│  ├─ theme
│  │  └─ variables.css
│  └─ utils
│     └─ commonFunctions.ts
└─ tsconfig.json

```