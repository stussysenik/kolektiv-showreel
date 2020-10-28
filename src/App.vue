<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img class="main-logo" src="../src/assets/navbar/kolektiv.svg" alt="kolektiv logo" />
      </router-link>
      <a href="https://www.facebook.com/kolektiv.sk/">
        <img class="icons icon-1" src="../src/assets/navbar/facebook.svg" alt="facebook" />
      </a>
      <a href="https://www.linkedin.com/company/kolekt%C3%ADv/">
        <img class="icons icon-2" src="../src/assets/navbar/linkedin.svg" alt="linkedin" />
      </a>
      <a href>
        <img class="icons icon-3" src="../src/assets/navbar/instagram.svg" alt="instagram" />
      </a>
      <a href="mailto:kolektiv@gmail.com">
        <img class="icons icon-4" src="../src/assets/navbar/email.svg" alt="email" />
      </a>
      <a @click="$router.go(-1)" class="close" v-if="menuPage()">X</a>
      <router-link to="/menu" v-else>
        <img class="icons menu" src="../src/assets/navbar/menu.svg" alt="menu" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    menuPage() {
      if (this.$route.path == "/menu") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
$mainLogoHeight: 18%;
$mainLogoWidth: 13%;
// $footerFontSize:
// $paragraphFontSize
// $headingFontSize

@font-face {
  font-family: "Poppins";
  src: url("../src/assets/Poppin/Poppins-Regular.woff2") format("woff2"),
    url("../src/assets/Poppin/Poppins-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  color: black;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}

#nav {
  .main-logo {
    width: $mainLogoWidth;
    height: $mainLogoHeight;
    position: absolute;
    left: 5%;
  }

  @mixin iconDefault($iconSize, $top, $invert) {
    position: absolute;
    top: $top;
    width: $iconSize;
    height: $iconSize;
    filter: $invert;
  }

  .black {
    @include iconDefault(4.5%, 7%, brightness(0%));
  }

  $initialIndentForIcons: 60%;
  $multiplierForIcons: 5%;

  .icons {
    @include iconDefault(4.5%, 7%, invert(100%));
  }

  @for $i from 1 through 4 {
    .icon-#{$i} {
      left: $initialIndentForIcons + ($multiplierForIcons * $i);
    }
  }

  .menu {
    left: $initialIndentForIcons + 32%;
  }

  .close {
    color: white;
    position: absolute;
    top: 6%;
    left: $initialIndentForIcons + 33.5%;
    font-size: 45px;
  }

  .icons {
    transition: 0.5s ease;
  }

  .icons:hover {
    box-shadow: 1px 1px #373737, 2px 2px #373737, 3px 3px #373737,
      4px 4px #373737, 5px 5px #373737, 6px 6px #373737;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    transition: 0.5s ease;
  }
}
</style>
