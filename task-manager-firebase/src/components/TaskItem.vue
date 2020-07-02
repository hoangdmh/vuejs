<template>
  <div class="backlogs-item" v-if="task">
    <div class="project">{{task.objData.name}}</div>
    <router-link
      v-bind:to="{name: 'edit-task-page', params: {id: task.id}}"
      tag="div"
      class="title"
      activeClass
      exactActiveClass
    >{{task.objData.title}}</router-link>
    <div class="due-date">
      Deadline:
      <span>{{dateFormat}}</span>
    </div>
    <div class="phase">
      Giai đoạn:
      <span>{{ HASH_TEAM_CONFIG[task.objData.team] }}</span>
    </div>
    <div class="assign">@{{task.objData.email_member.split('@')[0]}}</div>
  </div>
</template>

<script>
import { HASH_TEAM_CONFIG } from "../config/const";
export default {
  name: "task-item",
  props: {
    task: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      HASH_TEAM_CONFIG
    };
  },
  computed: {
    dateFormat() {
      if (this.task) {
        return new Date(this.task.objData.end_at).toLocaleString();
      }
      return "";
    }
  }
};
</script>

<style>
.title {
  cursor: pointer;
}
.title,
.project {
  text-transform: capitalize;
}
.assign {
  position: relative;
}
.assign .delete {
  position: absolute;
  right: 2px;
  border: 1px solid #720909;
  padding: 1px 6px;
  font-size: 11px;
  top: 3px;
  background-color: red;
  color: #ffff;
  border-radius: 3px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}
.backlogs-item:hover .delete {
  opacity: 1;
  visibility: visible;
}
</style>
