<template>
  <div class="about">
    <h1
      class="hero"
    >Veríme tomu, že viac ako sťažovat sa, je robit pre zmenu toho kvoli čomu sme nespokojni</h1>
    <img class="child" src="../assets/team3.jpg" alt="team" />
    <div class="content">
      <h1>O nás</h1>
      <p>
        Sme kolektív mladých ľudí so snahou robiť veci inak. Pre krajšie miesta, pre nás všetkých..
        Uvedomujeme si, že častokrát sú veci nedotiahnuté dokonca, alebo už rovno na pokraji zlyhania.
        Nechceme sa tomu prizerať, chceme konať. Veríme, že skrz projekty, ktoré budú slúžiť ľuďom a rozvoju
        miest sa vieme podieľať na skvalitnení verejných priestorov, životného prostredia, podpory kultúry
        aj umenia.
      </p>
      <br />
    </div>
    <div class="content">
      <p>
        Sme kolektív mladých ľudí so snahou robiť veci inak. Pre krajšie miesta, pre nás všetkých..
        Uvedomujeme si, že častokrát sú veci nedotiahnuté dokonca, alebo už rovno na pokraji zlyhania.
        Nechceme sa tomu prizerať, chceme konať. Veríme, že skrz projekty, ktoré budú slúžiť ľuďom a rozvoju
        miest sa vieme podieľať na skvalitnení verejných priestorov, životného prostredia, podpory kultúry
        aj umenia.
      </p>
      <br />
      <p>
        „Máme dve nohy,
        dve ruky,
        dve uši,
        dve oči
        a jedny ústa,
        to aby sme viac
        behali,
        tvorili,
        pozorovali
        a menej kecali.“
      </p>
      <br />
      <p>
        Na Slovensku žijeme veľmi radi a to aj napriek jeho nedostatkom. Sme presvedčení o tom, že byť
        spoločensky angažovaní je potrebné k vytvoreniu prostredia, kde sa nám môže žiť ešte lepšie ako
        doteraz. Ako mladí ľudia vnímame, že priestor na zlepšenie je vždy a aj mnoho malých krokov môže
        viesť k zmene.
      </p>
      <br />
      <p>
        Presne preto vznikol Kolektív. Najprv len ako myšlienka, neskôr nápad v našich hlavách a dnes už ako
        kolektív štyroch mladých ľudí spolupracujúcimi s mnohými dobrovoľníkmi. Sami neveríme koľko ľudí
        žijúcich na Slovensku nadchla naša myšlienka a ochotne priložili ruku k dielu. A to ešte oveľa skôr
        ako si vy čítate tieto riadky.
      </p>
      <h1 class="header">Náš tím tvoria dobrí ľudia:</h1>
    </div>
    <div class="flexbox">
      <div class="heads">
        <img src="../assets/head.png" class="head-img" />
        <h1>Martin Péchy</h1>
        <h1 class="jobs">riaditeľ & projektový manažér</h1>
      </div>
      <div class="heads">
        <img src="../assets/head.png" class="head-img" />
        <h1>Kristína Horinková</h1>
        <h1 class="jobs">kreatívny producent</h1>
      </div>
      <div class="heads">
        <img src="../assets/head.png" class="head-img" />
        <h1>Jakub Kofčák</h1>
        <h1 class="jobs">financie & sales</h1>
      </div>
      <div class="heads">
        <img src="../assets/head.png" class="head-img" />
        <h1>Bianka Barboričová</h1>
        <h1 class="jobs">marketing</h1>
      </div>
      <div class="heads">
        <img src="../assets/head.png" class="head-img" />
        <h1>Dominik Vrábeľ</h1>
        <h1 class="jobs">Komunikácia a HR</h1>
      </div>
      <div class="heads">
        <img src="../assets/head.png" class="head-img" />
        <h1>Lucia</h1>
      </div>
    </div>
    <div class="content">
      <h1>Dobrovolníci</h1>
      <p>
        Dominik Vrábeľ, Daniel Varga, Adam Fedor, Lea Hartmanová, Linda Flešarová, Marek Grega, Juraj Roman,
        Áron
        Kovács, Simona Vargová, Dajen Ručová, Patrik Pukan, Lucia Elečková, Katka Knappová
      </p>
    </div>

    <div class="footer">
      <div class="subdiv">
        <h1 class="fs">Občianske združenie</h1>
        <h1 class="fs">Kolektiv @2020</h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.child {
  width: 100vw;
  height: 100vh;
}

.hero {
  position: absolute;
  color: white;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 45%;
  text-align: center;
  width: 1000px;
}

.content {
  padding: 5px 60px;
}

.flexbox {
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  .heads {
    width: 400px;
    padding: 5px;
  }

  .head-img {
    width: 250px;
    height: 250px;
  }
}

.jobs {
  font-size: 20px;
  font-weight: 400;
}

.subdiv {
  display: flex;
  justify-content: space-between;
  margin: 0 5%;

  .fs {
    font-size: 1.5vw;
  }
}
</style>