import Mock from 'mockjs';

Mock.setup({
  timeout: 300,
});

/**
 * 获取我的会议邀请列表
 *
 */
Mock.mock(new RegExp('/api/invite-list.*'), 'get', function (options) {
  // return null;
  return [
    {
      type: 1,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
    },
  ];
});

/**
 * 获取我的会议列表
 *
 */
Mock.mock(new RegExp('/api/conference-list.*'), 'get', function (options) {
  // return null;
  return [
    {
      type: 2,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: true,
    },
    {
      type: 0,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: false,
    },
    {
      type: 0,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: true,
    },
    {
      type: 1,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: true,
      content:
        '系统测评上线风暴沟通会系统测评上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线',
      members: [
        {
          role: 'host',
          name: '张晓明',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: 'recorder',
          name: 'Jerry',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '889992',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '22333',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
      ],
    },
  ];
});

/**
 * 获取会议纪要列表
 *
 */
Mock.mock(new RegExp('/api/record-list.*'), 'get', function (options) {
  // return null;
  return [
    {
      type: 2,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: true,
    },
    {
      type: 2,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: true,
    },
    {
      type: 0,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: false,
    },
    {
      type: 0,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: false,
    },
    {
      type: 1,
      title: '系统测评上线风暴沟通会',
      address: '由由职场1号楼18F',
      datetime: '2020-10-19 13:00~14:00',
      host: '黄海波 战略与人力资源',
      isHost: true,
      content:
        '系统测评上线风暴沟通会系统测评上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线',
      members: [
        {
          role: 'host',
          name: '张晓明',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: 'recorder',
          name: 'Jerry',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '889992',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '22333',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
        {
          role: '',
          name: '222222',
          dept: '战略与人力资源中心',
          email: 'ssh3333@jiayinfintech.net',
        },
      ],
    },
  ];
});
