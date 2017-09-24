<template>
    <div class="financing">
        <el-row>
            <el-menu :default-active="activeIndex" class="el-menu-demo nav" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">日报</el-menu-item>
                <el-menu-item index="2">周报</el-menu-item>
                <el-menu-item index="3">月报</el-menu-item>
            </el-menu>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div id="creditLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="receivedPaymentsLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="overdueLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="renewalLine" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import { financingData } from '../../mock/data/data'
    export default {
        data() {
          return {
              activeIndex: '1',
              creditLine: null,
              receivedPaymentsLine: null,
              overdueLine: null,
              renewalLine: null,
              currentData: null,
              currentDate: [],
              dailyData: null,
              weekData: null,
              monthData: null
          }
        },
        methods: {
            handleSelect(key, keyPath) {
                if (key === '1') {
                    this.currentDate = financingData.days;
                    this.currentData = financingData.dayData;
                } else if(key === '2'){
                    this.currentDate = financingData.weeks;
                    this.currentData = financingData.weekData;
                } else if(key === '3'){
                    this.currentDate = financingData.months;
                    this.currentData = financingData.monthData;
                }
                this.drawCharts();
            },
            drawCreditLineChart() {
                this.creditLine = echarts.init(document.getElementById('creditLine'));
                this.creditLine.setOption({
                    title: {
                        text: '放款统计'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data:['金额', '笔数']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.currentDate,
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '金额(元)',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        },
                        {
                            type: 'value',
                            name: '笔数',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'金额',
                            type:'bar',
                            data: this.currentData.creditMoney
                        },
                        {
                            name:'笔数',
                            type:'line',
                            yAxisIndex: 1,
                            data: this.currentData.creditCount
                        }
                    ]
                });
            },
            drawOverdueLineChart() {
                this.overdueLine = echarts.init(document.getElementById('overdueLine'));
                this.overdueLine.setOption({
                    title: {
                        text: '逾期统计'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data:['金额', '笔数']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.currentDate,
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '金额(元)',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        },
                        {
                            type: 'value',
                            name: '笔数',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'金额',
                            type:'bar',
                            data: this.currentData.overdueMoney
                        },
                        {
                            name:'笔数',
                            type:'line',
                            yAxisIndex: 1,
                            data: this.currentData.overdueCount
                        }
                    ]
                });
            },
            drawRenewalLineChart() {
                this.renewalLine = echarts.init(document.getElementById('renewalLine'));
                this.renewalLine.setOption({
                    title: {
                        text: '续期统计'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data:['金额', '笔数']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.currentDate,
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '金额(元)',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        },
                        {
                            type: 'value',
                            name: '笔数',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'金额',
                            type:'bar',
                            data: this.currentData.renewalMoney
                        },
                        {
                            name:'笔数',
                            type:'line',
                            yAxisIndex: 1,
                            data: this.currentData.renewalCount
                        }
                    ]
                });
            },
            drawReceivedPaymentsLineChart() {
                this.receivedPaymentsLine = echarts.init(document.getElementById('receivedPaymentsLine'));
                this.receivedPaymentsLine.setOption({
                    title: {
                        text: '回款统计'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data:['金额', '笔数']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.currentDate,
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '金额(元)',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        },
                        {
                            type: 'value',
                            name: '笔数',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'金额',
                            type:'bar',
                            data: this.currentData.receivedMoney
                        },
                        {
                            name:'笔数',
                            type:'line',
                            yAxisIndex: 1,
                            data: this.currentData.receivedCount
                        }
                    ]
                });
            },
            drawCharts(){
                this.drawCreditLineChart();
                this.drawOverdueLineChart();
                this.drawReceivedPaymentsLineChart();
                this.drawRenewalLineChart();
            }
        },
        mounted: function () {
            this.currentData = financingData.dayData;
            this.currentDate = financingData.days;
            console.log(financingData);
            this.$nextTick(()=>{
                this.drawCharts();
            });
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style lang="scss" scoped>
    .financing{
        padding: 0px 10px 0px;
        div{
            margin-bottom: 35px;
        }
    }
</style>