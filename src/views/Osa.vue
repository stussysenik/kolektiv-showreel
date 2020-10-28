<template>
  <div class="osa">
    <div class="main">
      <h1>Časová os</h1>
      <div class="flexbox">
        <div class="subdiv">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
        <div class="subdiv">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
      <!-- <div id="sectionB" class="sectionB">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                <div class="flexitem">
                    <img src="src/img/peach.png" width="60%">
                    <h1 class="titles">30.3.2019</h1>
                    <p class="titles">Techstars Startup Weekend</p>
                </div>
      </div>-->
    </div>

    <div style="margin-top: 100px;">
      <h1 style=" margin: 20px 20%;">2019</h1>
      <div class="flexbox2 main">
        <button class="numberCircle">1</button>
        <button class="numberCircle numbers">2</button>
        <div class="dropdown">
          <button class="numberCircle">3</button>
          <div class="dropdown-content">
            <div class="line">
              <p class="dates">
                <a id="trigger" onclick="openNav()">30.</a>
              </p>
              <p class="dates">
                <a id="trigger" onclick="openNav()">31.</a>
              </p>
            </div>
          </div>
        </div>
        <button class="numberCircle numbers">4</button>
        <button class="numberCircle">5</button>
        <button class="numberCircle numbers">6</button>
        <button class="numberCircle">7</button>
        <button class="numberCircle numbers">8</button>
        <button class="numberCircle">9</button>
        <button class="numberCircle numbers">10</button>
        <button class="numberCircle">11</button>
        <button class="numberCircle">12</button>
      </div>
    </div>
    <div>
      <div class="footer">
        <h1 class="fs">Občianske združenie</h1>
        <h1 class="fs">Kolektiv @2020</h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.osa {
  padding: 150px;
}

.main {
  margin: 0 20%;
}

p {
  font-weight: 700;
}

.flexbox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.flexbox2 {
  display: flex;
  justify-content: space-between;
}

.subdiv {
  padding: 10px;
}

#pigalle {
  border-radius: 50%;
}

footer p {
  font-weight: 500;
}

.numberCircle {
  border-radius: 50%;
  width: 46px;
  height: 46px;
  padding: 5px;

  background: black;
  border: 2px solid black;
  color: white;
  text-align: center;
  outline: none;
}

button.numberCircle:hover {
  background-color: white;
  color: black;
}

.point {
  width: 3px;
  height: 10px;
  background: black;
  transition: height 1s ease;
}

.point:hover {
  height: 200px;
}

.dropdown-content {
  display: none;
  margin-left: 20px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

a:hover .dropdown-content {
  display: block;
}

.line {
  height: 1px;
  width: 0px;
  border-left: 5px solid #000;
  -webkit-animation: increase 2s;
  -moz-animation: increase 2s;
  -o-animation: increase 2s;
  animation: increase 2s;
  animation-fill-mode: forwards;
}

@keyframes increase {
  100% {
    height: 80px;
  }
}

a {
  color: black;
  text-decoration: none;
}

p.dates {
  margin-left: 15px;
}

.titles {
  color: white;
}

.sectionB {
  background: black;
  float: right;
  width: 0;
  height: 100vh;
}

.closebtn {
  color: white;
  text-decoration: none;
  float: right;
  font-size: 70px;
  margin: 10px;
}

.flexitem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 35% 60px;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin: 0 5%;

  .fs {
    font-size: 1.5vw;
  }
}
</style>
