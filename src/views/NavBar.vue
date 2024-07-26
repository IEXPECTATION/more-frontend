<template>
  <div class="nav-bar">
    <div class="nav-bar-switch">
      <i>
        <IconSwitch />
      </i>
    </div>

    <div class="feature-links">
      <div class="feature-link">
        <RouterLink to="/">汇总</RouterLink>
      </div>
      <div class="feature-link">
        <RouterLink to="/">账本</RouterLink>
      </div>
      <div class="feature-link">
        <RouterLink to="/Bill">消费记录</RouterLink>
      </div>
      <div class="feature-link">
        <RouterLink to="/Review">审计</RouterLink>
      </div>
    </div>

    <div class="settings-link">
      <RouterLink to="/Setting">设置</RouterLink>
    </div>
  </div>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconSwitch from '@/components/icons/IconSwitch.vue';
</script>

<style lang="css">
.nav-bar {
  padding: 10px 0 0 3px;
  width: 3vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e3e3e3;
}

.nav-bar-switch {
  height: 10%;
  padding: 10px 10px;
}

.nav-bar-switch svg {
  height: 20px;
  width: 20px;
}

.nav-bar-switch svg:hover {
  cursor: pointer;
}

.feature-links {
  height: 85%;
  display: flex;
  flex-direction: column;
}

.feature-links .feature-link {
  height: 10%;
  margin: auto;
  background-color: #eee;
}
</style>