<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="dashboard__field">
      <div class="dashboard__status">
        <DashboardStatus status="TODO" />
      </div>
      <div class="dashboard__status">
        <DashboardStatus status="In progress" />
      </div>
      <div class="dashboard__status">
        <DashboardStatus status="DONE" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChangedValues } from "~/stores/changedValues.js";

const changedStore = useChangedValues();
</script>

<style scoped lang="scss">
h1 {
  padding: 20px 0;
  box-sizing: border-box;
}

.dashboard {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__status {
    width: 100%;
    max-width: 350px;
    background-color: whitesmoke;
    margin-right: 15px;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
  }

  &__field {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px 25px;
    box-sizing: border-box;
  }
}
</style>
