<template>
    <el-col class="dun-staff" :span="24">
        <el-row><h2>审核人员管理</h2></el-row>
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
                <el-card class="speed-card">
                    <h2>今日平均每单处理速度</h2>
                    <p class="el-icon-time">{{ currentChange.data.speed }}</p>
                    <div class="bottom">
                        比前一天提高了<span>{{ currentChange.data.updated }}</span>!
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="percent-card">
                    <h2>截止今日案件逾期率</h2>
                    <p class="el-icon-circle-cross">{{ currentChange.data.overdue }}</p>
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
                listData:[
                    {
                        type: '审核员',
                        name: '任伟',
                        data: {
                            speed: "00:09:54",
                            overdue: "8%",
                            updated: "00:03:20",
                        }
                    }, {
                        type: '审核员',
                        name: '方涛',
                        data: {
                            speed: "00:10:44",
                            updated: "00:01:22",
                            overdue: "2%"
                        }
                    }, {
                        type: '审核员',
                        name: '黄强',
                        data: {
                            speed: "00:08:22",
                            updated: "00:00:10",
                            overdue: "9%"
                        }
                    }, {
                        type: '审核员',
                        name: '董敏',
                        data: {
                            speed: "00:15:17",
                            updated: "00:01:08",
                            overdue: "10%"
                        }
                    },{
                        type: '审核员',
                        name: '曹静',
                        data: {
                            speed: "00:09:36",
                            updated: "00:00:08",
                            overdue: "7%"
                        }
                    },{
                        type: '审核员',
                        name: '汤静',
                        data: {
                            speed: "00:08:29",
                            updated: "00:01:20",
                            overdue: "3%"
                        }
                    },{
                        type: '审核员',
                        name: '史敏',
                        data: {
                            speed: "00:15:22",
                            updated: "00:00:20",
                            overdue: "2%"
                        }
                    }
                ],
                currentChange: {
                    type: '..',
                    name: '..',
                    data: {
                        speed: 0,
                        updated: "..",
                        overdue: ".."
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
            this.currentChange = this.listData[0];
        }
    }
</script>

<style lang="scss" scoped>
    .dun-staff{
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
        .speed-card{
            background: #1d8ce0;
            color: #ffffff;
        }
        .percent-card{
            color: #ffffff;
            background: #ff6d1f;
        }
    }
</style>