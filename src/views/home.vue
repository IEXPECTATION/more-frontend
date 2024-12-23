<template>
  <Logo/>
  <div class="home-page" v-if=commonStore.IsBasicMode>
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
import { useCommonStore } from "@/stores/login";

const commonStore = useCommonStore();
</script>

<style lang="css" scoped></style>