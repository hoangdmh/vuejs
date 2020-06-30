<template>
  <div class="backlogs-item">
    <div class="project">Landmark 81 Website</div>
    <div class="title">Phân tich dự án</div>
    <div class="due-date">
      Deadline:
      <span>30/09/2018</span>
    </div>
    <div class="phase">
      Giai đoạn:
      <span>Front End</span>
    </div>
    <div class="assign">@luctc -</div>
  </div>
</template>

<script>
export default {
  name: "task-item"
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
