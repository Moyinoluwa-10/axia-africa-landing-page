<template>
  <section>
    <div class="container">
      <div class="wrapper ">
        <h1> Confused about what to learn? </h1>
        <p> Speak with our professional tech advisors to help kick
          start your tech journey and pilot you to being an expert in your desired field.
        </p>
        <button> Speak with an Advisor </button>
      </div>
      <img src="../assets/svgs/advisor.525dee5a.svg" alt="advisor" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Speak"
}
</script>

<style scoped>
section {
  background: #202054;
  padding: 9rem 0;
}

.container {
  display: flex;
  color: #fff;
  padding: 0 150px;
  gap: 2.5rem;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
}

.wrapper {
  max-width: 440px;
  margin-bottom: 4rem;
}

h1 {
  font-size: 36px;
  font-weight: 500;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #ebebeb;
  margin-top: 1.25rem;
  font-weight: 500;
}

button {
  color: white;
  margin-top: 2rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #fff;
  border: 3px solid #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  transition: all .15s;
  cursor: pointer;
  background: transparent;
  font-family: inherit;
}

button:hover {
  color: #202054;
  background: white;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #f0b73f;
}

img {
  width: 50%;
  max-width: 100%;
  height: auto;
}

@media screen and (max-width:1024px) {
  .container {
    flex-direction: column;
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
  section {
    padding: 5rem 0;
  }

  h1 {
    font-size: 28px;
  }
}

@media screen and (max-width:640px) {
  img {
    width: 100%;
  }
}
</style>