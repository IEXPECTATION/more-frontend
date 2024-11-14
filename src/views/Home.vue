<template>
  <Logo />
  <div class="home-page" v-if=softwareMode.basic>
    <BasicHomePage />
  </div>
  <div class="home-page" v-else>
    <AdvancedHomePage />
  </div>
</template>

<script setup lang="ts">
import BasicHomePage from "./basic/basicHome.vue"
import AdvancedHomePage from "./advanced/AdvancedHome.vue"
import Logo from "@/components/logo.vue"
import { useSoftwareMode } from "@/stores/software_mode";
const softwareMode = useSoftwareMode();
</script>

<style lang="css" scoped></style>