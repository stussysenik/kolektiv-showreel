<template>
  <div class="home">
    <div class="footer">
      <div class="subdiv">
        <h1 class="fs">Občianske združenie</h1>
        <h1 class="fs">Kolektiv @2020</h1>
      </div>
    </div>
    <div class="projekt">
      <div class="subdiv">
        <h1 class="ihrisko">
          Projekt Basketbalové
          <br />ihrisko
        </h1>
        <h1 class="ludia">
          „Ľudia vytvárajú miesta,
          <br />viac ako miesta vytvárajú ľudí.“
        </h1>
      </div>
    </div>
    <img class="child" src="../assets/baskethriste.jpg" alt="basketball court" />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>

.child {
  width: 100vw;
  height: 100vh;
}

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

.projekt {
  @include positioning(15%);

  .subdiv {
    display: flex;
    justify-content: space-around;
    margin: 0 5%;

    h1.ihrisko {
      font-size: 1.8vw;
      font-weight: 800;
    }

    h1.ludia {
      font-size: 1.2vw;
    }
  }
}
</style>
