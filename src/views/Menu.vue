<template>
  <div class="menu">
    <div class="options">
      <router-link to="/">
        <span class="dot"></span>Občianske združenie
      </router-link>
      <router-link to="/onás">
        <span class="dot"></span>O nás
      </router-link>
      <router-link to="/časováos">
        <span class="dot"></span>Časová os
      </router-link>
      <router-link to="/projekty">
        <span class="dot"></span>Projekty
      </router-link>
      <div class="footer">
        <div class="subdiv">
          <h1 class="fs">Občianske združenie</h1>
          <h1 class="fs">Kolektiv @2020</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu"
};
</script>
<style lang="scss" scoped>
.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: black;

  a {
    font-size: 3vw;
    padding: 10px;
  }
}

.dot {
  padding: 10px;
  margin: 0 20px;
  background-color: white;
  border-radius: 50%;
  display: none;
}

a:hover .dot {
  display: inline-block;
}

.footer {
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;

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