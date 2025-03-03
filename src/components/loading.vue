<template>
  <div class="loading-container">
    <div class="loading-box">
      <div id="outside"></div>
      <div id="inside"></div>
    </div>
  </div>
</template>


<style lang="css" scoped>
.loading-box {
  position: relative;
}

#outside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border-top: 3px solid purple;
  border-right: 3px solid transparent;
  will-change: transform;
  transform: rotate(60deg);

  animation: round-outside 1s linear infinite both;
}

#inside {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  border-top: 3px solid pink;
  border-left: 3px solid transparent;
  will-change: transform;
  transform: rotate(240deg);

  animation: round-inside 1s linear infinite;
}

@keyframes round-outside {
  0% {
    transform: rotate(60deg);
  }

  100% {
    transform: rotate(420deg);
  }
}

@keyframes round-inside {
  0% {
    transform: rotate(240deg);
  }

  100% {
    transform: rotate(-120deg)
  }
}
</style>