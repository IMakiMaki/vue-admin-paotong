<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="newUserFrom" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="newUserRejectPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="newUserSexPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="newUserAgePie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <map-element></map-element>
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
                newUserFrom: null,
                newUserRejectPie: null,
                newUserSexPie: null,
                newUserAgePie: null,
                newUserAreaMap: null
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
            drawNewUserRejectPieChart() {
                this.newUserRejectPie = echarts.init(document.getElementById('newUserRejectPie'));
                this.newUserRejectPie.setOption({
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
                        top: 30,
                        data: totalRejectObj.data
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
                                {value: totalRejectObj.auto, name: '自动拒单'},
                                {value: totalRejectObj.man, name:  '人工拒单'}
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
                                {value: totalRejectObj['autoValue'][0], name: totalRejectObj['autoData'][0]},
                                {value: totalRejectObj['autoValue'][1], name: totalRejectObj['autoData'][1]},
                                {value: totalRejectObj['autoValue'][2], name: totalRejectObj['autoData'][2]},
                                {value: totalRejectObj['manValue'][0], name: totalRejectObj['manData'][0]},
                                {value: totalRejectObj['manValue'][1], name: totalRejectObj['manData'][1]},
                                {value: totalRejectObj['manValue'][2], name: totalRejectObj['manData'][2]}
                            ]
                        }
                    ]
                });
            },
            drawNewUserSexPieChart() {
                this.newUserSexPie = echarts.init(document.getElementById('newUserSexPie'));
                this.newUserSexPie.setOption({
                    title: {
                        text: '新增用户性别占比',
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
                        data: ['男性', '女性']
                    },
                    series: [
                        {
                            name: '新增用户性别占比',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: sexData.male, name: '男性' },
                                { value: sexData.female, name: '女性' }
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
            drawNewUserAgePieChart() {
                this.newUserAgePie = echarts.init(document.getElementById('newUserAgePie'));
                this.newUserAgePie.setOption({
                    title: {
                        text: '新增用户年龄占比',
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
                        data: ageData.ageData
                    },
                    series: [
                        {
                            name: '新增用户年龄占比',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: ageData.ageValue[0], name: ageData.ageData[0] },
                                { value: ageData.ageValue[1], name: ageData.ageData[1] },
                                { value: ageData.ageValue[2], name: ageData.ageData[2] },
                                { value: ageData.ageValue[3], name: ageData.ageData[3] },
                                { value: ageData.ageValue[4], name: ageData.ageData[4] },
                                { value: ageData.ageValue[5], name: ageData.ageData[5] },
                                { value: ageData.ageValue[6], name: ageData.ageData[6] }
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
                this.drawNewUserFromChart()
                this.drawNewUserRejectPieChart()
                this.drawNewUserSexPieChart()
                this.drawNewUserAgePieChart()
            },
        },

        mounted: function () {
            this.$nextTick(()=>{
                this.drawCharts();
            })
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