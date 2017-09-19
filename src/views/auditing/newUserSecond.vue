<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="newUserFrom" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="newUserApplyPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="newUserLotPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="newUserApplyLine" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    import {
        dayIncrease,
        lastFiftyDays,
        userApply,
        notApply,
        grantCount,
        dayIncreaseFrom,
        typeArr
    } from '../../mock/data/user'
console.log(typeArr)
    export default {
        data() {
            return {
                newUserFrom: null,
                newUserLotPie: null,
                newUserApplyLine: null,
                newUserApplyPie: null
            }
        },
        methods: {
            drawNewUserFromChart() {
                this.newUserFrom = echarts.init(document.getElementById('newUserFrom'));
                this.newUserFrom.setOption({
                    title: {
                        text: '新用户来源',
                        subtext: '',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        top: 30,
                        data: typeArr
                    },
                    series: [
                        {
                            name: '新用户来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: dayIncreaseFrom[0], name: typeArr[0] },
                                { value: dayIncreaseFrom[1], name: typeArr[1] },
                                { value: dayIncreaseFrom[2], name: typeArr[2] },
                                { value: dayIncreaseFrom[3], name: typeArr[3] },
                                { value: dayIncreaseFrom[4], name: typeArr[4] }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            drawNewUserApplyPieChart() {
                this.newUserApplyLine = echarts.init(document.getElementById('newUserApplyPie'));
                this.newUserApplyLine.setOption({
                    title: {
                        text: '新用户拒单原因',
                        subtext: '',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直达', selected:true},
                                {value:679, name:'营销广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        },
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['40%', '55%'],
                            label: {
                                normal: {
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            lineHeight: 22,
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 16,
                                            lineHeight: 33
                                        },
                                        per: {
                                            color: '#eee',
                                            backgroundColor: '#334455',
                                            padding: [2, 4],
                                            borderRadius: 2
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'直达'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1048, name:'百度'},
                                {value:251, name:'谷歌'},
                                {value:147, name:'必应'},
                                {value:102, name:'其他'}
                            ]
                        }
                    ]
                });
            },
            drawNewUserLotPieChart() {
                this.newUserLotPie = echarts.init(document.getElementById('newUserLotPie'));
                this.newUserLotPie.setOption({
                    title: {
                        text: '新增用户占比',
                        subtext: '',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        top: 30,
                        data: ['今日新增用户', '已有用户']
                    },
                    series: [
                        {
                            name: '新增用户占比',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: dayIncrease[dayIncrease.length - 1], name: '今日新增用户' },
                                { value: 75671, name: '已有用户' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            newUserApplyLineChart() {
                this.newUserApplyLine = echarts.init(document.getElementById('newUserApplyLine'));
                this.newUserApplyLine.setOption({
                    title: {
                        text: '新增用户放款数走势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['已放款']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: lastFiftyDays
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '已放款',
                            type: 'line',
                            stack: '总量',
                            data: grantCount
                        }
                    ]
                })
            },
            drawCharts() {
                this.drawNewUserFromChart()
                this.drawNewUserApplyPieChart()
                this.drawNewUserLotPieChart()
                this.newUserApplyLineChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }

</script>

<style lang="scss" scoped>
    .chart-container{
        padding: 30px 10px 0px;
        div{
            margin-bottom: 35px;
        }
    }
</style>