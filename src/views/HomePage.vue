<template>
  <div class="home-page" v-if=props.UsingSimplified>
    <SimplifiedHomePage />
  </div>
  <div class="home-page" v-else>
    <AdvancedHomePage />
  </div>
</template>

<script setup lang="ts">
import SimplifiedHomePage from "./simplified/SimplifiedHomePage.vue"
import AdvancedHomePage from "./advanced/AdvancedHomePage.vue"
const props = defineProps({
  UsingSimplified: Boolean,
});
</script>

<style scoped>
.boxes {
  display: grid;
}

.boxes .box {
  display: flex;
  flex-direction: column;
}
</style>