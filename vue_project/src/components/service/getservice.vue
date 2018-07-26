<template>
  <div>
    <el-table
      :data="services"
      style="width: 100%"
      height="550">
      <el-table-column
        prop="serviceName"
        label="服务名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="serviceType"
        label="服务类别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="serviceSchedule"
        label="排期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="serviceCanFor"
        label="适用规格"
        width="120">
      </el-table-column>
      <el-table-column
        prop="serviceDetial"
        label="服务规格"
        width="120">
      </el-table-column>
      <el-table-column
        prop="serviceTime"
        label="耗时"
        width="120">
      </el-table-column>
      <el-table-column
        prop="serviceLevel"
        label="服务员等级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="servicePrice"
        label="价格"
        width="120">
      </el-table-column>
      <el-table-column
        prop="_id"
        label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click.native.prevent="remove(scope.row._id)" icon="el-icon-delete"></el-button>
          </template>
      </el-table-column>
      <el-table-column
        prop="_id"
        label="操作">
          <template slot-scope="scope">
            <!-- <el-button type="text" @click.native.prevent="change(scope.row._id)" icon="el-icon-edit"></el-button> -->
            <el-button type="text" @click="dialogFormVisible = true" @click.native.prevent="change(scope.row)" icon="el-icon-edit">点击修改</el-button>
            <el-dialog  title="请修改" :visible.sync="dialogFormVisible">
              <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="服务名称">
                <el-input v-model="form.serviceName"></el-input>
            </el-form-item>
            <el-form-item label="服务类别">
                <el-input v-model="form.serviceType"></el-input>
            </el-form-item>
            <el-form-item label="排期">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.serviceSchedule"  value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="适用规格">
                <el-select v-model="form.serviceCanFor" placeholder="请选择宠物体重">
                <el-option label="20" value="20"></el-option>
                <el-option label="40" value="40"></el-option>
                <el-option label="60" value="60"></el-option>
                <el-option label="80" value="80"></el-option>
                <el-option label="100" value="100"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="服务规格">
                <el-select v-model="form.serviceDetial" placeholder="请选择服务">
                <el-option label="普修" value="普修"></el-option>
                <el-option label="精修" value="精修"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="耗时">
                <el-input v-model="form.serviceTime"></el-input>
            </el-form-item>
            <el-form-item label="服务员等级">
                <el-select v-model="form.serviceLevel" placeholder="请选择服务员等级">
                <el-option label="普通" value="普通"></el-option>
                <el-option label="高级" value="高级"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="价格">
                <el-select v-model="form.servicePrice" placeholder="请选择价格">
                <el-option label="20" value="20"></el-option>
                <el-option label="50" value="50"></el-option>
                <el-option label="80" value="80"></el-option>
                <el-option label="100" value="100"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false" @click.native.prevent="Modify()">确 定</el-button>
        </div>
            </el-dialog>
          </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="curPage"
        :page-sizes="[3,4, 5, 10]"
        :page-size="eachPage"
        layout="sizes, prev, pager, next"
        :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  inject: ["reload"],
  data() {
    // console.log(data)
    return {
      dialogFormVisible: false,
      form: {
        serviceName: "",
        serviceType: "",
        serviceSchedule: "",
        serviceCanFor: "",
        serviceDetial: "",
        serviceTime: "",
        serviceLevel: "",
        servicePrice: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",

      delete: "删除",
      eachPage: 10,
      curPage: 1,
      maxPage: 0,
      count: 0,
      services: []
    };
  },
  created() {
    // console.log(data)

    this.getServicesByPage();
  },
  watch: {
    curPage() {
      this.getServicesByPage();
    },
    eachPage() {
      this.getServicesByPage();
    }
  },
  methods: {
    async getServicesByPage() {
      const data = await fetch(
        `/serviceList/getServicesByPage?&curPage=${this.curPage}&eachPage=${
          this.eachPage
        }`,
        {
          method: "get",
          headers: {
            "Content-Type": "application"
          }
        }
      ).then(res => res.json());
      Object.assign(this, data);
    },
    remove(id) {
      this.$store.dispatch("Service/remove", id), this.reload();
    },
    change(row) {
      let serviceObj = {
        serviceName: row.serviceName,
        serviceType: row.serviceType,
        serviceSchedule: row.serviceSchedule,
        serviceCanFor: row.serviceCanFor,
        serviceDetial: row.serviceDetial,
        serviceTime: row.serviceTime,
        serviceLevel: row.serviceLevel,
        servicePrice: row.servicePrice,
        _id:row._id
      };
      this.form = serviceObj;
    },
    Modify() {
      let info={
        form:this.form,
        _id:this.form._id,
        eachPage:this.eachPage,
        curPage:this.curPage
      }
      // console.log(info)
      this.$store.dispatch("Service/Modify",info),
      this.reload()
    },
    handleSizeChange(val) {
      this.curPage = 1;
      this.eachPage = val;
    },
    handleCurrentChange(val) {
      this.curPage = val;
    }
  }
};
</script>