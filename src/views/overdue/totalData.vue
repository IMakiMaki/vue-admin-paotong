<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="24">
                <div id="totalDetailLine" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    import { backPoint, last300Days} from '../../mock/data/data'
    export default {
        data () {
            return {
                totalDetailLine: null
            }
        },
        methods: {
            drawTotalDetailLine() {
                function calculateMA(dayCount) {
                    var result = [];
                    for (var i = 0, len = backPoint.length; i < len; i++) {
                        if (i < dayCount) {
                            result.push('-');
                            continue;
                        }
                        var sum = 0;
                        for (var j = 0; j < dayCount; j++) {
                            sum += backPoint[i - j];
                        }
                        result.push(Number((sum / dayCount).toFixed(3)));
                    }
                    return result;
                }
                console.log(calculateMA(5))
                this.totalDetailLine = echarts.init(document.getElementById('totalDetailLine'));
                this.totalDetailLine.setOption({
                    title: {
                        text: '回款率分层明细表'
                    },
                    legend: {
                        data: ['当日回款率', '5日平均回款率', '10日平均回款率', '20日平均回款率', '30日平均回款率']
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        data: last300Days
                    },
                    yAxis: {
                        splitLine: {
                            show: true
                        },
                        min: 0.8
                    },
                    dataZoom: [{
                        startValue: '2017年5月15日'
                    }, {
                        type: 'inside'
                    }],
                    series: [
                        {
                            name: '当日回款率',
                            type: 'line',
                            data: backPoint,
                        },
                        {
                            name: '5日平均回款率',
                            type: 'line',
                            data: calculateMA(5),
                            smooth: true,
                            lineStyle: {
                                normal: {opacity: 0.5}
                            }
                        },
                        {
                            name: '10日平均回款率',
                            type: 'line',
                            data: calculateMA(10),
                            smooth: true,
                            lineStyle: {
                                normal: {opacity: 0.5}
                            }
                        },
                        {
                            name: '20日平均回款率',
                            type: 'line',
                            data: calculateMA(20),
                            smooth: true,
                            lineStyle: {
                                normal: {opacity: 0.5}
                            }
                        },
                        {
                            name: '30日平均回款率',
                            type: 'line',
                            data: calculateMA(30),
                            smooth: true,
                            lineStyle: {
                                normal: {opacity: 0.5}
                            }
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawTotalDetailLine();
            }
        },
        mounted: function () {
            this.$nextTick(()=>{
                this.drawCharts();//解决地图加载较慢的问题
            })
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style lang="scss">
    .chart-container{
        padding: 30px 10px 0px;
        >div{
            margin-bottom: 35px;
        }
    }
</style>