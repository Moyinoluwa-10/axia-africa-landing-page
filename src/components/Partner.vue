<template>
  <section class="container">
    <h1 class="headline text-[28px] md:text-4xl font-medium text-darkish"> Partner With Us </h1>
    <p> Do
      you have a passion for making impact and inspiring to the tech space? Partner with us at Axia Africa and share our
      passion of leading a generation of tech talents waiting to be tapped. </p>
    <a href="#"> Learn More </a>
    <img src="../assets/svgs/deco1.abb302cd.svg" alt="deco" class="deco">
    <img src="../assets/svgs/deco2.172b3814.svg" alt="deco2" class="deco2">
    <img src="../assets/svgs/deco3.30c3cd46.svg" alt="deco3" class="deco3">
  </section>
</template>

<script>
export default {
  name: 'Partner'
}
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 15rem auto 11rem;
  text-align: center;
}

h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #111;
  font-weight: 500;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #3f3f3f;
  padding-bottom: 7rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 1.5rem;
}

a {
  color: #202054;
  margin-top: 2px;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #202054;
  border: 3px solid #000;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  transition: all .15s;
  cursor: pointer;
  background: transparent;
  text-decoration: none;
  width: max-content;
}

a:hover {
  color: #fff;
  background: #202054;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #f0b73f;
}

.deco {
  display: flex;
  position: absolute;
  left: 0;
  bottom: -100px;
  height: auto;
  max-width: 100%;
}

.deco2 {
  display: flex;
  position: absolute;
  right: 0;
  bottom: -100px;
  height: auto;
  max-width: 100%;
}

.deco3 {
  display: flex;
  position: absolute;
  right: 10%;
  bottom: -150px;
  height: auto;
  max-width: 100%;
  display: none;
}

@media screen and (max-width:1024px) {
  .container {
    padding: 0 1.25rem;
    max-width: 900px;
  }
}

@media screen and (max-width:900px) {
  .container {
    max-width: 700px;
  }
}

@media screen and (max-width:768px) {
  h1 {
    font-size: 28px;
  }

  .deco {
    display: none;
  }

  .deco2 {
    display: none;
  }

  .deco3 {
    display: flex;
  }
}
</style>