<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="auditSchedulePie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="alreadyAuditPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="grantMoneyPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="grantMoneyCountPie" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    import mapElement from './map.vue'
    import {
        dayIncrease,
        lastFiftyDays,
        userApply,
        notApply,
        grantCount,
        dayIncreaseFrom,
        typeArr,
        totalRejectObj,
        sexData,
        ageData
    } from '../../mock/data/data'
    export default {
        components:{
            mapElement
        },
        data() {
            return {
                auditSchedulePie: null,
                alreadyAuditPie: null,
                grantMoneyPie: null,
                newUserAgePie: null,
                grantMoneyCountPie: null
            }
        },
        methods: {
            drawAuditSchedulePieChart() {
                this.auditSchedulePie = echarts.init(document.getElementById('auditSchedulePie'));
                this.auditSchedulePie.setOption({
                    title: {
                        text: '客户审批进度统计',
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
                        data: ['自动化审核', '人工审核']
                    },
                    series: [
                        {
                            name: '客户审批进度统计',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 200, name: "自动化审核" },
                                { value: 135, name: "人工审核" }
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
            drawAlreadyAuditPieChart() {
                this.alreadyAuditPie = echarts.init(document.getElementById('alreadyAuditPie'));
                this.alreadyAuditPie.setOption({
                    title: {
                        text: '已审核案件统计',
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
                        top: 30,
                        data: ['人工通过', '自动通过', '人工拒绝', '自动拒绝']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],
                            center: ['50%', '60%'],
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
                                {value: 21515, name: '审核通过'},
                                {value: 6500, name:  '审核拒绝'}
                            ]
                        },
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['40%', '55%'],
                            center: ['50%', '60%'],
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
                                {value: 8592, name: '人工通过'},
                                {value: 12923, name: '自动通过'},
                                {value: 4205, name: '人工拒绝'},
                                {value: 2295, name: '自动拒绝'}
                            ]
                        }
                    ]
                });
            },
            drawGrantMoneyPieChart() {
                this.grantMoneyPie = echarts.init(document.getElementById('grantMoneyPie'));
                this.grantMoneyPie.setOption({
                    title: {
                        text: '放款数量统计',
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
                        data: ['已放款', '待放款']
                    },
                    series: [
                        {
                            name: '放款数量统计',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: sexData.male, name: '已放款' },
                                { value: sexData.female, name: '待放款' }
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
            drawGrantMoneyCountPieChart() {
                this.grantMoneyCountPie = echarts.init(document.getElementById('grantMoneyCountPie'));
                this.grantMoneyCountPie.setOption({
                    title: {
                        text: '放款金额统计',
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
                        data: ["已放款", '待放款']
                    },
                    series: [
                        {
                            name: '放款金额统计',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 131205000, name: "已放款" },
                                { value: 10251000, name: '待放款' }
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
                })
            },
            drawCharts() {
                this.drawAuditSchedulePieChart()
                this.drawAlreadyAuditPieChart()
                this.drawGrantMoneyPieChart()
                this.drawGrantMoneyCountPieChart()
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
        >div{
            margin-bottom: 35px;
        }
    }
</style>