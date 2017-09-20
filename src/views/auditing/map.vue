<template>
    <div id="newUserAreaMap" style="width:100%; height:400px;"></div>
</template>
<script>
    import echarts from 'echarts'
    import 'echarts/map/js/china'
    export default {
        data () {
            return {
                newUserAreaMap: null,
                loading: true
            }
        },
        props: {
        },
        methods: {
            drawNewUserAreaMapChart() {
                this.newUserAreaMap = echarts.init(document.getElementById('newUserAreaMap'));
                this.newUserAreaMap.setOption({
                    series: [{
                        type: 'map',
                        map: 'china',
                        roam: false,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:[
                            {name: '北京',value: Math.round(Math.random()*5)},
                            {name: '天津',value: Math.round(Math.random()*5)},
                            {name: '上海',value: Math.round(Math.random()*5)+20},
                            {name: '重庆',value: Math.round(Math.random()*5)},
                            {name: '河北',value: Math.round(Math.random()*5)},
                            {name: '河南',value: Math.round(Math.random()*5)},
                            {name: '云南',value: Math.round(Math.random()*5)},
                            {name: '辽宁',value: Math.round(Math.random()*5)},
                            {name: '黑龙江',value: Math.round(Math.random()*5)},
                            {name: '湖南',value: Math.round(Math.random()*5)},
                            {name: '安徽',value: Math.round(Math.random()*5)},
                            {name: '山东',value: Math.round(Math.random()*5)+20},
                            {name: '新疆',value: Math.round(Math.random()*5)},
                            {name: '江苏',value: Math.round(Math.random()*5)+10+10},
                            {name: '浙江',value: Math.round(Math.random()*5)+10},
                            {name: '江西',value: Math.round(Math.random()*5)+15},
                            {name: '湖北',value: Math.round(Math.random()*5)+10},
                            {name: '广西',value: Math.round(Math.random()*5)+19},
                            {name: '甘肃',value: Math.round(Math.random()*5)+10},
                            {name: '山西',value: Math.round(Math.random()*5)+10},
                            {name: '内蒙古',value: Math.round(Math.random()*5)},
                            {name: '陕西',value: Math.round(Math.random()*5)},
                            {name: '吉林',value: Math.round(Math.random()*5)},
                            {name: '福建',value: Math.round(Math.random()*5)},
                            {name: '贵州',value: Math.round(Math.random()*5)},
                            {name: '广东',value: Math.round(Math.random()*5)+10},
                            {name: '青海',value: Math.round(Math.random()*5)},
                            {name: '西藏',value: Math.round(Math.random()*5)},
                            {name: '四川',value: Math.round(Math.random()*5)},
                            {name: '宁夏',value: Math.round(Math.random()*5)},
                            {name: '海南',value: Math.round(Math.random()*5)},
                            {name: '台湾',value: Math.round(Math.random()*5)},
                            {name: '香港',value: Math.round(Math.random()*5)},
                            {name: '澳门',value: Math.round(Math.random()*5)}
                        ]
                    }],
                    title : {
                        text: '当日新用户地域分布',
                        subtext: '',
                        left: 'center'
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    visualMap: {
                        min: 0,
                        max: 40,
                        left: 'left',
                        top: 'bottom',
                        text:['高','低'],           // 文本，默认为数值文本
                        calculable : true
                    }
                })
            },
            drawCharts() {
                this.drawNewUserAreaMapChart();
            }
        },
        mounted () {
            this.drawCharts()
        },
        updated () {

        },
        computed: {

        }
    }
</script>

<style lang="scss">

</style>