import Mock from 'mockjs';
const LoginUsers = [
    {
      id: 1,
      username: 'admin',
      password: '123456',
      avatar: 'https://avatars0.githubusercontent.com/u/18737872?v=4&s=460',
      name: '管理员'
    }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
      id: Mock.Random.integer(1,999999),
      name: Mock.Random.cname(),
      addr: Mock.mock('@county(true)'),
      'age|18-60': 1,
      tel: /^1[3-8][0-9]{9}$/,
      overdue: Mock.Random.integer(1, 100),
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1)
  }));
}

let totalUser = 80000;//总用户数
let days = 600;//总天数
let totalGrant = 60000;//总放款量
const dayIncrease = [];//每天的增长数
const dayIncreaseFrom = [];//当天新用户来源
const averageCount = [];//历史平均每日注册用户
const lastFiftyDays = [];//过去50天的日期
const userApply = [];//申请的用户数
const notApply = [];//没有申请的用户数
const grantCount = [];//每日已放款的用户数
const averageGrantCount = [];//历史平均放款新用户
const type = {0: '微信推广', 1: '电话营销', 2: '老用户推荐', 3: '广告点击', 4: '直达'};//客户来源数组
const typeArr = [];//将类型对象转换成数组传给echarts
const totalRejectObj = {};
const sexData = {};//新增用户性别
const ageData = {};//新增用户年龄分布
const backPoint = [];//每日回款率数组
const last300Days = [];//过去300天日期
const financingData = {};

//财务报表相关
(()=>{
    let now = new Date();
    let itemDay = 1000 * 3600 * 24;
    financingData.days = [];
    financingData.months = [];
    financingData.weeks = [];

    for (let i = 1; i < 7; i++) {
        let item = new Date(now.getTime() - itemDay * (i + 1));
        financingData.days.unshift(`${item.getMonth()+1}月${item.getDate()+1}日`)
    }
    financingData.days.push('今日');

    let nowMonth = now.getMonth() + 1;
    for (let i = 3; i < nowMonth + 1; i ++) {
        financingData.months.push(i+'月')
    }

    //计算当前周
    let date2=new Date(now.getFullYear(), 0, 1);
    let day1=now.getDay();
    if(day1===0) day1=7;
    let day2=date2.getDay();
    if(day2===0) day2=7;
    let d = Math.round((now.getTime() - date2.getTime()+(day2-day1)*(24*60*60*1000)) / 86400000);
    let nowWeeks = Math.ceil(d /7)+1;

    for (let i = nowWeeks; i > nowWeeks - 7; i --) {
        financingData.weeks.unshift(`第${i}周`);
    }

    financingData.dayData = {};
    financingData.dayData.creditCount = [159, 169, 148, 168, 198, 162, 169];
    financingData.dayData.creditMoney = [15900, 16900, 14800, 16800,19800, 16200, 16900];
    financingData.dayData.receivedCount = [139, 149, 152, 164, 189, 202, 219];
    financingData.dayData.receivedMoney = [13900, 14900, 15200, 16400, 18900, 20200, 21900];
    financingData.dayData.overdueCount = [390, 490, 520, 640, 590, 592, 500];
    financingData.dayData.overdueMoney = [7800, 9800, 10400, 12800, 11800, 11840, 10000];
    financingData.dayData.renewalCount = [39, 49, 52, 64, 89, 20, 19];
    financingData.dayData.renewalMoney = [4680, 5880, 6240, 7680, 10680, 2400, 2280];

    financingData.weekData = {};
    financingData.weekData.creditCount = financingData.dayData.creditCount.map((item)=>item*7);
    financingData.weekData.creditMoney = financingData.dayData.creditMoney.map((item)=>item*7);
    financingData.weekData.receivedCount = financingData.dayData.receivedCount.map((item)=>item*7);
    financingData.weekData.receivedMoney = financingData.dayData.receivedMoney.map((item)=>item*7);
    financingData.weekData.overdueCount = financingData.dayData.overdueCount.map((item)=>item*7);
    financingData.weekData.overdueMoney = financingData.dayData.overdueMoney.map((item)=>item*7);
    financingData.weekData.renewalCount = financingData.dayData.renewalCount.map((item)=>item*7);
    financingData.weekData.renewalMoney = financingData.dayData.renewalMoney.map((item)=>item*7);

    financingData.monthData = {};
    financingData.monthData.creditCount = financingData.dayData.creditCount.map((item)=>item*30);
    financingData.monthData.creditMoney = financingData.dayData.creditMoney.map((item)=>item*30);
    financingData.monthData.receivedCount = financingData.dayData.receivedCount.map((item)=>item*30);
    financingData.monthData.receivedMoney = financingData.dayData.receivedMoney.map((item)=>item*30);
    financingData.monthData.overdueCount = financingData.dayData.overdueCount.map((item)=>item*30);
    financingData.monthData.overdueMoney = financingData.dayData.overdueMoney.map((item)=>item*30);
    financingData.monthData.renewalCount = financingData.dayData.renewalCount.map((item)=>item*30);
    financingData.monthData.renewalMoney = financingData.dayData.renewalMoney.map((item)=>item*30);
})();

console.log(financingData);
//客户来源数组
for(let i in type) {
    typeArr.push(type[i]);
}
console.log(typeArr)
//随机产生每天新增用户（需const换成let）
for (let i = 0; i < 50; i++) {
    dayIncrease.push(Math.floor(130 + Math.random()* 15))
}

//模拟来源信息
(()=>{
    let todayUser = dayIncrease[dayIncrease.length - 1];
    let num = 0;
    for (let i = 0; i < typeArr.length - 1; i++) {
        let item = Math.floor(Math.random() * 10 + 20);
        num += item;
        dayIncreaseFrom.push(item);
        console.log(item)
    }
    dayIncreaseFrom.push(dayIncrease[dayIncrease.length - 1] - num);
})()
// console.log(dayIncreaseFrom, dayIncrease[dayIncrease.length - 1])

//随机生成历史平均每日注册量
for (let i = 0; i < 50;i++){
    totalUser = totalUser + dayIncrease[i];
    let item = Math.round(totalUser / (i + days));
    averageCount.push(item);
}
// console.log(averageCount)

//随机生成每天提交数量以及未提交数量
for (let i = 0; i < dayIncrease.length; i++) {
    let is  = dayIncrease[i] - Math.floor(5 + Math.random() * 20);
    let not = dayIncrease[i] - is;
    userApply.push(is);
    notApply.push(not);
    console.log(is + not === dayIncrease[i]);
}

//生成每日放款量
for (let i = 0; i < userApply.length; i++) {
    let item = Math.floor(userApply[i] - 20 - Math.random() * 10);
    grantCount.push(item);
}

// 随机生成每日新用户平均放款量
for (let i = 0; i < 50; i++){
    totalGrant = totalGrant + grantCount[i];
    let item = Math.round(totalGrant / (i + days));
    averageGrantCount.push(item);
}
// console.log(averageGrantCount)

//生成50天的日期
(()=>{
    let now = new Date();
    let itemDay = 1000 * 3600 * 24;
    for (let i = 1; i < 51; i++) {
        let item = new Date(now.getTime() - itemDay * i);
        lastFiftyDays.unshift(`${item.getMonth()+1}月${item.getDate()+1}日`)
    }
    // console.log(dayIncrease, userApply, notApply, grantCount);、
})();

//生成每日拒单原因
(()=>{
    let rejectObj = {};//当日拒单原因
    let autoReason = ['年龄', '地域', '黑名单'];
    let manReason = ['收入', '客户拒绝', '虚假信息'];
    let total = userApply[userApply.length - 1] - grantCount[grantCount.length - 1];//当天拒单人数
    let auto = Math.floor(10 + Math.random() * 5);
    let man = total - auto;

    let autoNum = 0;
    rejectObj['auto'] = {};
    rejectObj['man'] = {};
    totalRejectObj['autoValue'] = [];
    totalRejectObj['manValue'] = [];
    for (let i = 0; i < autoReason.length - 1 ; i++) {
        let item = Math.floor(Math.random() * 2 + 3);
        rejectObj['auto'][autoReason[i]] = item;
        autoNum += item;
        totalRejectObj['autoValue'].push(item);
    }
    totalRejectObj['autoValue'].push(auto - autoNum);
    console.log(rejectObj)

    let manNum = 0;
    for (let i = 0; i < manReason.length - 1 ; i++) {
        let item = Math.floor(Math.random() * 2 + 3);
        rejectObj['man'][manReason[i]] = item;
        manNum += item;
        totalRejectObj['manValue'].push(item);
    }
    totalRejectObj['manValue'].push(man - manNum);

    //整合拒单数据
    totalRejectObj['man'] = man;
    totalRejectObj['auto'] = auto;
    totalRejectObj['manData'] = manReason;
    totalRejectObj['autoData'] = autoReason;
    totalRejectObj['data'] = manReason.concat(autoReason);
})();
console.log(totalRejectObj);

//新增用户性别数据模拟
(()=>{
    let total = dayIncrease[dayIncrease.length - 1];
    let male = Math.floor(total * (Math.random() * 2 + 6) / 10);
    let female = total - male;
    sexData.male = male;
    sexData.female = female;
})();

//新增用户年龄分布模拟
(() => {
    let item = dayIncrease[dayIncrease.length - 1];
    ageData['ageData'] = ['18~24岁', '24~30岁', '30~36岁', '36~42岁', '42~48岁', '48~54岁', '54~60岁'];
    ageData['ageValue'] = [10, item - (10+20+32+20+18+10), 20, 18, 20, 18, 10];
})();

//模拟每日回款率
(()=>{
    for (let i = 0; i < 300; i++) {
        backPoint.push(Number((Math.random()*0.03 + 0.94).toFixed(3)));
    }
})();

//生成300天的日期
(()=>{
    let now = new Date();
    let itemDay = 1000 * 3600 * 24;
    for (let i = 1; i < 301; i++) {
        let item = new Date(now.getTime() - itemDay * i);
        last300Days.unshift(`${item.getFullYear()}年${item.getMonth()+1}月${item.getDate()+1}日`)
    }
    // console.log(dayIncrease, userApply, notApply, grantCount);、
})();

console.log(backPoint)
export {
    LoginUsers,
    Users,
    dayIncrease,
    lastFiftyDays,
    userApply,
    notApply,
    grantCount,
    averageCount,
    averageGrantCount,
    dayIncreaseFrom,
    typeArr,
    totalRejectObj,
    sexData,
    ageData,
    backPoint,
    last300Days,
    financingData
};
