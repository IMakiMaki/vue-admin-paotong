<template>
	<section class="chart-container">
		<el-row>
			<el-col :span="12">
				<div id="newUserLine" style="width:100%; height:400px;"></div>
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
	import {dayIncrease, lastFiftyDays, userApply, notApply} from '../mock/data/user'

    export default {
        data() {
            return {
                newUserLine: null,
                newUserLotPie: null,
                newUserApplyLine: null,
                newUserApplyPie: null
            }
        },
        methods: {
            drawNewUserLineChart() {
                this.newUserLine = echarts.init(document.getElementById('newUserLine'));
                this.newUserLine.setOption({
                    title: {
                        text: '每日新用户走势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['用户增量']
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
                        type: 'value',
						min: 100
                    },
                    series: [
                        {
                            name: '用户增量',
                            type: 'line',
                            stack: '总量',
                            data: dayIncrease
                        }
                    ]
                });
            },
            drawNewUserApplyPieChart() {
                this.newUserApplyLine = echarts.init(document.getElementById('newUserApplyPie'));
                this.newUserApplyLine.setOption({
                    title: {
                        text: '新增用户借款申请情况',
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
                        data: ['已提交申请', '未提交申请']
                    },
                    series: [
                        {
                            name: '新增用户借款申请情况',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: userApply[userApply.length - 1], name: '已提交申请' },
                                { value: notApply[notApply.length - 1], name: '未提交申请' }
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
                        text: '新增用户借款申请走势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['未申请', '申请']
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
                            name: '未申请',
                            type: 'line',
                            stack: '总量',
                            data: notApply
                        },
                        {
                            name:'申请',
                            type:'line',
                            stack: '总量',
                            data: userApply
                        }
                    ]
				})
			},
            drawCharts() {
                this.drawNewUserLineChart()
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