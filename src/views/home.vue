<template>
  <Logo/>
  <div class="home-page" v-if=configStore.IsBasicMode()>
    <BasicHomePage />
  </div>
  <div class="home-page" v-else>
    <AdvancedHomePage />
  </div>
</template>

<script setup lang="ts">
import BasicHomePage from "./basic/basic_home.vue"
import AdvancedHomePage from "./advanced/advanced_home.vue"
import Logo from "@/components/logo.vue"
import { useConfigStore } from "@/stores/config/config";

const configStore = useConfigStore();
</script>

<style lang="css" scoped></style>