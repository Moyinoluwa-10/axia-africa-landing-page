<template>
  <section class="container pad-cont section-container">
    <div class="wrapper">
      <h1 class="primary-heading">Discover the right school for your journey</h1>
      <p class="primary-paragraph">
        Axia Africa offers you the chance to explore schools which has variety of courses to learn
        from, like product design, Front end,
      </p>
    </div>
    <img src="../assets/svgs/doddle2.c9d35eef.svg" alt="ground-nut" class="bounce" />
    <div class="box">
      <article class="card">
        <h3>School of Product</h3>
        <p>
          We offer you Product courses such as Product Design,Product management and Product
          marketing by equipping you with the right trainings and guidelines. Become a world class
          personnel and job-ready candidate in the product field.
        </p>
        <a href="#"
          ><span>View Courses</span><ion-icon name="arrow-forward-outline" class="icon"></ion-icon
        ></a>
      </article>
      <article class="card">
        <h3>School of Systems Engineering</h3>
        <p>
          Begin your learning process in Front-End Web Development, Back-End Web Development and
          more. Discover career opportunities available for you. Speak to professionals and read
          through materials and the programme designed specifically for you.
        </p>
        <a href="#"
          ><span>View Courses</span><ion-icon name="arrow-forward-outline" class="icon"></ion-icon
        ></a>
      </article>
      <article class="card">
        <h3>School of Data</h3>
        <p>
          Even as a newbie in the data analysis space, you can jumpstart your journey and hone your
          skills by kicking it off with the Axia Africa School of Data Analysis.
        </p>
        <a href="#"
          ><span>View Courses</span><ion-icon name="arrow-forward-outline" class="icon"></ion-icon
        ></a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DiscoverSection'
}
</script>

<style scoped>
.section-container {
  margin: 6rem auto 10rem;
}

.wrapper h1 {
  color: #111;
}

.wrapper p {
  color: #3f3f3f;
  max-width: 708px;
  margin-top: 1.25rem;
}

.bounce {
  width: 350px;
  margin-top: 3rem;
  animation: bouncy-up 12s ease infinite;
  position: absolute;
  top: -6rem;
  right: 2.5rem;
  height: auto;
  max-width: 100%;
  display: block;
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

.box {
  margin-top: 7rem;
  display: flex;
  row-gap: 8rem;
  column-gap: 5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background-color: #faf5ee;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  position: relative;
  z-index: 10;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 40%;
}

.card::before {
  background-color: transparent;
  border-bottom: 3px solid #000;
  border-left: 3px solid #000;
  bottom: -20px;
  content: '';
  height: 90%;
  left: -12px;
  position: absolute;
  width: 95%;
  z-index: -10;
}

.card h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  color: #111;
  font-weight: 600;
}

.card p {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #3f3f3f;
  font-weight: 500;
  margin-top: 1.5rem;
}

.card a {
  margin-top: 4rem;
  transition: all 0.15s;
  color: #202054;
  padding-left: 0;
  display: flex;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Avenir Bold', sans-serif;
}

.card a:hover {
  gap: 1.25rem;
}

.icon {
  display: inline-block;
  color: #202054;
  font-size: 25px;
  --ionicon-stroke-width: 8px;
}

@media screen and (max-width: 768px) {
  .wrapper h1 {
    font-size: 28px;
  }

  .bounce {
    width: 220px;
    margin-top: 0;
  }

  .box {
    margin-top: 5rem;
  }

  .card {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    width: 100%;
  }

  .card h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .card p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .card a {
    margin-top: 2rem;
  }
}
</style>
