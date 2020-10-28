<template>
  <div class="footer">
    <div class="subdiv">
      <h1 class="fs">Občianske združenie</h1>
      <h1 class="fs">Kolektiv @2020</h1>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@mixin positioning($n) {
  position: absolute;
  bottom: $n;
  width: 100%;
}

.footer {
  @include positioning(0);

  .subdiv {
    display: flex;
    justify-content: space-between;
    margin: 0 5%;
  }

  .fs {
    font-size: 1.5vw;
  }
}
</style>