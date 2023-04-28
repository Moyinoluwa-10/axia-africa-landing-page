<template>
  <section class="section">
    <div class="container pad-cont section-container">
      <div class="wrapper">
        <h1 class="primary-heading">Confused about what to learn?</h1>
        <p class="primary-paragraph paragraph">
          Speak with our professional tech advisors to help kick start your tech journey and pilot
          you to being an expert in your desired field.
        </p>
        <button class="btn btn-primary">Speak with an Advisor</button>
      </div>
      <img src="../assets/svgs/advisor.525dee5a.svg" class="image" alt="advisor" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpeakSection'
}
</script>

<style scoped>
.section {
  background: #202054;
  padding: 9rem 0;
}

.section-container {
  color: #fff;
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
}

.wrapper {
  max-width: 440px;
  margin-bottom: 4rem;
}

.paragraph {
  color: #ebebeb;
  margin-top: 1.25rem;
}

.btn {
  color: white;
  margin-top: 2rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #fff;
  border: 3px solid #fff;
}

.btn:hover {
  color: #202054;
  background: white;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #f0b73f;
}

.image {
  width: 50%;
  max-width: 100%;
  height: auto;
}

@media screen and (max-width: 1024px) {
  .section-container {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
  .section {
    padding: 5rem 0;
  }
}

@media screen and (max-width: 640px) {
  .image {
    width: 100%;
  }
}
</style>
