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

const dayIncrease = [];//每天的增长数
const lastFiftyDays = [];//过去50天的日期
const userApply = [];//申请的用户数
const notApply = [];//没有申请的用户数
const grantCount = [];//每日已放款的用户数
//随机产生每天新增用户（需const换成let）
for (let i = 0; i < 50; i++) {
    dayIncrease.push(Math.floor(130 + Math.random()* 15))
}
//随机生成每天提交数量以及未提交数量
for (let i = 0; i < dayIncrease.length; i++) {
    let is  = dayIncrease[i] - Math.floor(5 + Math.random() * 20);
    let not = dayIncrease[i] - is;
    userApply.push(is);
    notApply.push(not);
    console.log(is + not === dayIncrease[i]);
}

for (let i = 0; i < userApply.length; i++) {
    let item = Math.floor(userApply[i] - 5 - Math.random() * 10);
    grantCount.push(item);
}

let now = new Date();
let itemDay = 1000 * 3600 * 24;
for (let i = 1; i < 51; i++) {
    let item = new Date(now.getTime() - itemDay * i);
    lastFiftyDays.unshift(`${item.getMonth()+1}月${item.getDate()+1}日`)
}
console.log(dayIncrease, userApply, notApply, grantCount);
export { LoginUsers, Users, dayIncrease, lastFiftyDays, userApply, notApply, grantCount};
