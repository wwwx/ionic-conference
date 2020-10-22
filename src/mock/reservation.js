import Mock from 'mockjs';

Mock.setup({
  timeout: 300,
});

/**
 * 获取会议详情
 *
 *
 */
Mock.mock('/api/conference-detail', 'get', function () {
  return {
    type: 1,
    title: '系统测评上线风暴沟通会',
    address: '由由职场1号楼18F',
    room: '共赢会议室',
    recorder: 2,
    remind: '30min',
    datetime: '2020-10-19 13:00~14:00',
    host: '黄海波 战略与人力资源',
    isHost: true,
    content:
      '系统测评上线风暴沟通会系统测评上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线，风暴沟通会议系统上线',
    members: [
      {
        id: 1,
        role: 'host',
        name: 'Husky',
        dept: '战略与人力资源中心',
        email: 'ssh3333@jiayinfintech.net',
      },
      {
        id: 2,
        role: 'recorder',
        name: 'Teddy',
        dept: '技术中心',
        email: 'ssh3333@jiayinfintech.net',
      },
      {
        id: 3,
        role: '',
        name: 'King Kong',
        dept: '极融事业部',
        email: 'ssh3333@jiayinfintech.net',
      },
    ],
  };
});

/**
 * 获取参会人员
 *
 *
 */
Mock.mock('/api/participants', 'get', function () {
  return [
    {
      id: 1,
      role: 'host',
      name: 'Husky',
      dept: '战略与人力资源中心',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 2,
      role: 'recorder',
      name: 'Teddy',
      dept: '技术中心',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 3,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 4,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 5,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 6,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 7,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 8,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 9,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
    {
      id: 10,
      role: '',
      name: 'King Kong',
      dept: '极融事业部',
      email: 'ssh3333@jiayinfintech.net',
    },
  ];
});
