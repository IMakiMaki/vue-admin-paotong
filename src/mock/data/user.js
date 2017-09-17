import Mock from 'mockjs';
const LoginUsers = [
    {
      id: 1,
      username: 'admin',
      password: '123456',
      avatar: 'https://avatars0.githubusercontent.com/u/18737872?v=4&s=460',
      name: '管理员'
    },
    {
        id: 2,
        username: 'admin2',
        password: '123456',
        avatar: 'https://avatars0.githubusercontent.com/u/18737872?v=4&s=460',
        name: '管理员'
    }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
