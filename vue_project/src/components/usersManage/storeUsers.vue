<template>
<div>
    <el-table :data="tableData5" style="width: 100%">

        <el-table-column label="用户名" prop="userAcount">
        </el-table-column>
        <el-table-column label="电话" prop="userPhone">
        </el-table-column>
        <el-table-column label="密码" prop="userPwd">
        </el-table-column>
        <el-table-column label="用户类型" prop="userType">
        </el-table-column>

        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="dialogFormVisible= true" @click.native.prevent="change(scope.row)">修改</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <template>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="curPage*1" :page-sizes="[3, 5, 10, 15]" :page-size="3" layout="total, sizes, prev, pager, next, jumper" :total="count">
            </el-pagination>
        </div>
    </template>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" auto-complete="off"></el-input>
            </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"  @click.native.prevent="change2">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<style>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>

<script>
export default {
    watch: {
        curPage() {
            this.$store.dispatch("async_getuser");
        },
        eachPage() {
            this.$store.dispatch("async_getuser");
        }
    },
    created() {
        this.$store.dispatch("async_getuser");
        // console.log(this.$store.state)
        //  this.$store.dispatch("async_addorder")
    },

    data() {
        return {
           
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                _id:"",
                name: "",
                phone: "",
                password: "",
                delivery: false,
              
            },
            formLabelWidth: "120px"
        };
    },

    methods: {
        deleteRow(row) {
            let i = this.$store.dispatch("async_delorder", row);
            if (i) {
                this.$store.dispatch("async_getuser");
            }
        },
        change2(){
          let row=this.form
        let i= this.$store.dispatch("async_change",row);
           if (i) {
                this.$store.dispatch("async_getuser");
            }
        },
        change(row) {
            console.log(row);
            this.form.name=row.userAcount
            this.form.phone=row.userPhone
            this.form.password=row.userPwd
            this.form._id=row._id
        },
        handleSizeChange(val) {
            this.$store.commit("handleSizeChange", val);
        },
        handleCurrentChange(val) {
            this.$store.commit("handleCurrentChange", val);
        }
    },

    computed: {
        tableData5() {
            return this.$store.state.usersManage.tableData5;
        },
        curPage() {
            return this.$store.state.usersManage.curPage;
        },
        eachPage() {
            return this.$store.state.usersManage.eachPage;
        },
        maxPage() {
            return this.$store.state.usersManage.maxPage;
        },
        count() {
            return this.$store.state.usersManage.count;
        }
    }
};
</script>
