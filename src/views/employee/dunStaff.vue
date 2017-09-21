<template>
    <el-col class="dun-staff" :span="24">
        <el-row><h2>催收人员管理</h2></el-row>
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
            <el-col :span="6">
                <el-card class="total-card">
                    <h2>回款案件数</h2>
                    <p class="el-icon-edit">{{ currentChange.data.back }}</p>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="percent-card">
                    <h2>回款率</h2>
                    <p class="el-icon-check">{{ currentChange.data.percents }}</p>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="current-card">
                    <h2>在手案件数</h2>
                    <p class="el-icon-menu">{{ currentChange.data.current }}</p>
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
                        type: '催收员',
                        name: '任伟',
                        data: {
                            back: 80,
                            percents: "80%",
                            current: 64
                        }
                    }, {
                        type: '催收员',
                        name: '方涛',
                        data: {
                            back: 100,
                            percents: "70%",
                            current: 54
                        }
                    }, {
                        type: '催收员',
                        name: '黄强',
                        data: {
                            back: 105,
                            percents: "95%",
                            current: 55
                        }
                    }, {
                        type: '催收员',
                        name: '董敏',
                        data: {
                            back: 104,
                            percents: "88%",
                            current: 43
                        }
                    },{
                        type: '催收员',
                        name: '曹静',
                        data: {
                            back: 120,
                            percents: "96%",
                            current: 78
                        }
                    },{
                        type: '催收员',
                        name: '汤静',
                        data: {
                            back: 122,
                            percents: "87%",
                            current: 99
                        }
                    },{
                        type: '催收员',
                        name: '史敏',
                        data: {
                            back: 108,
                            percents: "84%",
                            current: 46
                        }
                    }
                ],
                currentChange: {
                    type: '..',
                    name: '..',
                    data: {
                        back: 0,
                        percents: "..",
                        current: 0
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
        .total-card{
            background: #339933;
            color: #ffffff;
        }
        .percent-card{
            color: #ffffff;
            background: #11b95c;
        }
        .current-card{
            color: #ffffff;
            background: #FF9999;
        }
    }
</style>