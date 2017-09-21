<template>
    <el-col class="customer-service" :span="24">
        <el-row><h2>客服人员</h2></el-row>
        <el-row :gutter="20">
            <el-col class="staff-list" :span="4">
                <el-table
                        ref="singleTable"
                        @current-change="handleCurrentChange"
                        highlight-current-row
                        :height="250"
                        :data="listData"
                        style="width: 100%">
                    <el-table-column
                            prop="type"
                            label="职位">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名">
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="10">
                <el-card class="avg-card">
                    <h2>今日每单平均处理时长</h2>
                    <p class="el-icon-time">{{ currentChange.data.time }}</p>
                    <div class="bottom">
                        比前一天提高了<span>{{ currentChange.data.updated }}</span>!
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="total-card">
                    <h2>今日处理单数</h2>
                    <p class="el-icon-edit">{{ currentChange.data.today }}</p>
                    <div class="bottom">
                        比前一天增加了<span>{{ currentChange.data.increase }}</span>单!
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-col>
</template>

<script>
    export default {
        components:{
        },
        data() {
            return {
                listData: [
                    {
                        type: '客服',
                        name: '王小虎',
                        data: {
                            time: '00:30:34',
                            updated: '00:05:20',
                            today: 50,
                            increase: 10
                        }
                    }, {
                        type: '客服',
                        name: '邓明',
                        data: {
                            time: '00:28:10',
                            updated: '00:01:20',
                            today: 56,
                            increase: 5
                        }
                    }, {
                        type: '客服',
                        name: '王小虎',
                        data: {
                            time: '00:10:21',
                            updated: '00:01:01',
                            today: 46,
                            increase: 10
                        }
                    }, {
                        type: '客服',
                        name: '梁磊',
                        data: {
                            time: '00:09:21',
                            updated: '00:00:31',
                            today: 36,
                            increase: 2
                        }
                    },{
                        type: '客服',
                        name: '郑超',
                        data: {
                            time: '00:04:11',
                            updated: '00:00:51',
                            today: 55,
                            increase: 12
                        }
                    },{
                        type: '客服',
                        name: '白明',
                        data: {
                            time: '00:08:23',
                            updated: '00:08:00',
                            today: 66,
                            increase: 5
                        }
                    },{
                        type: '客服',
                        name: '姜超',
                        data: {
                            time: '00:04:21',
                            updated: '00:08:01',
                            today: 35,
                            increase: 3
                        }
                    }
                ],
                currentChange: {
                    type: '客服',
                    name: '王小虎',
                    data: {
                        time: '00:29:34',
                        updated: '00:05:20',
                        today: 50,
                        increase: 10
                    }
                }
            }
        },
        methods: {
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentChange = val;
            }
        },
        mounted() {
            this.setCurrent(this.listData[0]);
        }
    }
</script>

<style lang="scss" scoped>
    .customer-service{
        .staff-list{
            cursor: pointer;
        }
        .el-card{
            height: 250px;
            p{
                line-height: 20px;
                font-size: 40px;
            }
            .bottom{
                font-size: 20px;
                span{
                    padding: 0 10px;
                    color: rgba(171, 255, 171, 0.9);
                }
            }
        }
        .avg-card{
            background: #1d8ce0;
            color: #ffffff;
        }
        .total-card{
            color: #ffffff;
            background: #11b95c;
        }
    }
</style>