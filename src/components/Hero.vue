<template>
  <section class="container">
    <h1>
      Accelerate your career with <span class="grad">Job-ready</span> tech skills. </h1>
    <p> Begin your
      tech journey and expand your career opportunities in the tech space by learning tech skills in demand. </p>
    <div class="links">
      <a href="#"> Apply Now </a><button><span class="underline">Speak
          with an Advisor</span><ion-icon name="arrow-forward-outline" class="icon"></ion-icon></button>
    </div><img src="../assets/svgs/doddle.efbf3eb9.svg" class="bounce" alt="grountsssssssssssssssssssssssssssssss"><img
      src="../assets/svgs/hero.0d0e9f28.svg" class="hero-image" alt="grountsssssssssssssssssssssssssssssss">
  </section>
</template>

<script>
export default {
  name: "Hero",
}
</script>

<style scoped>
.container {
  padding: 0 150px;
  margin: 0 auto;
  margin-top: 5rem;
  max-width: 1280px;
  position: relative;
  height: 700px;
}

h1 {
  font-size: 45px;
  text-align: start;
  color: #111;
  font-weight: 500;
  max-width: 570px;
}

.grad {
  -webkit-text-fill-color: transparent;
  background: linear-gradient(65deg, #ab2638, #f0b73f);
  background-clip: text;
  -webkit-background-clip: text;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: start;
  margin-top: 1.75rem;
  max-width: 480px;
}

.links {
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  align-items: center;
  margin-top: 3rem;
}

.links a {
  color: #111;
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

.links a:hover {
  color: #fff;
  background: #202054;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #f0b73f;
}

.links button {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .15s;
  color: #202054;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Avenir Bold', sans-serif;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  text-transform: none;
  appearance: button;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
  text-decoration-line: underline;
  width: auto;
}

.links button:hover {
  gap: 1.25rem;
}

.icon {
  display: inline-block;
  color: #202054;
  font-size: 25px;
  --ionicon-stroke-width: 8px;
}

.bounce {
  animation: bouncy-up 12s ease infinite;
  display: flex;
  max-width: 500px;
  width: 30vw;
  margin-top: 3rem;
  left: 2.5rem;
  position: absolute;
  height: auto;
}

@keyframes bouncy-up {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);

  }

  100% {
    transform: translateY(0);
  }
}

.hero-image {
  position: absolute;
  top: 0;
  right: 1.5rem;
  width: 57vw;
  max-width: 700px;
  display: block;
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
  .container {
    height: auto;
  }

  h1 {
    font-size: 32px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.625rem;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }

  .links {
    flex-direction: column;
    justify-content: center;
  }

  .bounce {
    display: none;
  }

  .hero-image {
    position: unset;
    top: unset;
    right: unset;
    margin-top: 1.23rem;
    width: 90%;
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>