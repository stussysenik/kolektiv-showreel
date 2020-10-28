<template>
  <div class="projects">
    <div class="main">
      <div class="footer">
        <div class="subdiv">
          <h1 class="fs">Občianske združenie</h1>
          <h1 class="fs">Kolektiv @2020</h1>
        </div>
      </div>
      <div class="flexbox">
        <div class="project">
          <router-link to="/basketbalovyihrisko"><img src="../assets/pigalle.jpg"/></router-link>
          <p>Projekt basketbalove ihrisko</p>
        </div>
        <div class="project">
          <img id="pigalle" src="../assets/pigalle.jpg" />
          <p>Už časkoro</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: {
    isActive: true,
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding-top: 200px;
}

.flexbox {
  margin: 0 100px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  .subdiv {
    width: 100%;
  }
}

img {
  border-radius: 50%;
}

.project {
  width: 400px;
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

#pigalle {
  filter: brightness(0%);
}
</style>
