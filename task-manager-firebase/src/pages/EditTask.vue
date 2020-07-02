<template>
  <div class="main-content">
    <page-title v-bind:title="'Task # '+id " />
    <div class="create-board">
      <div class="row">
        <div class="col-xs-12 input-group">
          <label>Tiêu đề</label>
          <input type="text" class="form-control" v-model="task.title" />
        </div>
        <div class="col-xs-12 input-group">
          <label>Mô tả tác vụ</label>
          <textarea type="text" class="form-control" v-model="task.description"></textarea>
        </div>
        <div class="col-xs-12 input-group">
          <label>Tên Project</label>
          <input type="text" class="form-control" v-model="task.name" />
        </div>
        <div class="col-xs-6 input-group">
          <label>Ngày giờ bắt đầu</label>
          <!-- <input type="date" class="form-control" v-model="start_at" /> -->
          <datetime type="datetime" v-model="task.start_at"></datetime>
        </div>
        <div class="col-xs-6 input-group">
          <label>Deadline</label>
          <!-- <input type="date" class="form-control" v-model="end_at" /> -->
          <datetime type="datetime" v-model="task.end_at"></datetime>
        </div>
        <div class="col-xs-6 input-group">
          <label>Trang thái</label>
          <select class="input-group input-select" v-model="task.status">
            <option
              v-for="status in STATUS_CONFIG"
              v-bind:key="status.value + status.text"
              v-bind:value="status.value"
            >{{status.text}}</option>
          </select>
        </div>
        <div class="col-xs-6 input-group">
          <label>Độ ưu tiên</label>
          <select class="input-group input-select" v-model="task.priority">
            <option
              v-for="priority in PRIORITY_CONFIG"
              v-bind:key="priority.value + priority.text"
              v-bind:value="priority.value"
            >{{priority.text}}</option>
          </select>
        </div>
        <div class="col-xs-6 input-group">
          <label>Giai đoạn</label>
          <select class="input-group input-select" v-model="task.team">
            <option
              v-for="team in TEAM_CONFIG"
              v-bind:key="team.value + team.text"
              v-bind:value="team.value"
            >{{team.text}}</option>
          </select>
        </div>
        <div class="col-xs-6 input-group">
          <label>Thành viên đảm nhận</label>
          <select class="input-group input-select" v-model="task.email_member">
            <option
              v-for="(email, index) in getListEmailUser"
              v-bind:key="index"
              v-bind:value="email"
            >{{email.split('@')[0]}}</option>
          </select>
        </div>
        <div class="col-xs-12 btn-submit-create">
          <button v-on:click="handleUpdate" class="btn btn-success" type="submit">Update BackLog</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Datetime } from "vue-datetime";
import { STATUS_CONFIG, PRIORITY_CONFIG, TEAM_CONFIG } from "../config/const";
import { taskRef } from "../config/firebase";

import PageTitle from "../components/PageTitle";

export default {
  name: "edit-task",
  components: {
    PageTitle,
    Datetime
  },
  data() {
    return {
      id: this.$route.params.id,
      task: {
        title: "",
        description: "",
        name: "",
        start_at: null,
        end_at: null,
        status: 1,
        priority: 1,
        team: 1,
        email_member: ""
      },
      STATUS_CONFIG,
      PRIORITY_CONFIG,
      TEAM_CONFIG
    };
  },
  watch: {
    $route(newRoute, oldRoute) {
      this.id = newRoute.params.id;
      this.handeleEditTask();
    }
  },
  created() {
    this.handeleEditTask();
  },
  computed: {
    ...mapGetters(["getListEmailUser"])
  },
  methods: {
    ...mapActions(["getTaskById", "setLoading"]),
    handeleEditTask() {
      let id = this.id;
      this.getTaskById(id).then(res => {
        if (res.ok) {
          this.task = res.task;
        } else {
          this.$router.push("/");
        }
      });
    },
    async handleUpdate() {
      this.setLoading(true);
      let result = await taskRef.child(this.id).update(this.task);
      this.setLoading(false);
      console.log("result =>", result);
    }
  }
};
</script>

<style>
.vdatetime .vdatetime-input {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
</style>
