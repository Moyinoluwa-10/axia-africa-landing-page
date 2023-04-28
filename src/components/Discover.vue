<template>
  <section class="container">
    <div class="wrapper">
      <h1>Discover the right school for your journey</h1>
      <p>
        Axia Africa offers you the chance to explore schools which has variety of courses to learn
        from, like product design, Front end,
      </p>
    </div>
    <img
      src="../assets/svgs/doddle2.c9d35eef.svg"
      alt="ground-nuttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
      class="bounce mt-0 sm:mt-12 absolute right-10 w-[220px] sm:w-[350px] -top-24 bouncy-up"
    />
    <div
      class="box flex flex-wrap md:mt-28 mt-20 gap-x-20 md:gap-y-32 gap-y-20 w-full justify-center"
    >
      <article class="card md:w-[40%] md:px-5 px-3">
        <h3 class="md:text-2xl text-lg text-darkish font-semibold">School of Product</h3>
        <p class="text-sm md:text-base font-medium mt-6 text-darkgrey">
          We offer you Product courses such as Product Design,Product management and Product
          marketing by equipping you with the right trainings and guidelines. Become a world class
          personnel and job-ready candidate in the product field.
        </p>
        <a
          href="/schools/product"
          class="btn text-primary flex gap-3 pl-0 md:mt-16 mt-8 hover:gap-5 transite"
          ><span class="underline">View Courses</span
          ><ion-icon name="arrow-forward-outline" class="icon"></ion-icon
        ></a>
      </article>
      <article class="card md:w-[40%] md:px-5 px-3">
        <h3 class="md:text-2xl text-lg text-darkish font-semibold">
          School of Systems Engineering
        </h3>
        <p class="text-sm md:text-base font-medium mt-6 text-darkgrey">
          Begin your learning process in Front-End Web Development, Back-End Web Development and
          more. Discover career opportunities available for you. Speak to professionals and read
          through materials and the programme designed specifically for you.
        </p>
        <a
          href="/schools/engineering"
          class="btn text-primary flex gap-3 pl-0 md:mt-16 mt-8 hover:gap-5 transite"
          ><span class="underline">View Courses</span
          ><ion-icon name="arrow-forward-outline" class="icon"></ion-icon
        ></a>
      </article>
      <article class="card md:w-[40%] md:px-5 px-3">
        <h3 class="md:text-2xl text-lg text-darkish font-semibold">School of Data</h3>
        <p class="text-sm md:text-base font-medium mt-6 text-darkgrey">
          Even as a newbie in the data analysis space, you can jumpstart your journey and hone your
          skills by kicking it off with the Axia Africa School of Data Analysis.
        </p>
        <a
          href="/schools/data"
          class="btn text-primary flex gap-3 pl-0 md:mt-16 mt-8 hover:gap-5 transite"
          ><span class="underline">View Courses</span
          ><ion-icon name="arrow-forward-outline" class="icon"></ion-icon
        ></a>
      </article>
    </div>
  </section>
</template>

<script allowJs="true">
// import { IonIcon } from "@ionic/vue"
// import { arrowForwardOutline } from "@ionicons/icons"
export default {
  name: 'Discover'
}
</script>

<style scoped>
.container {
  padding: 0 150px;
  max-width: 1280px;
  margin: 6rem auto 10rem;
}

.wrapper h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #111;
  font-weight: 500;
}

.wrapper p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
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

@media screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
    padding: 0 1.25rem;
    max-width: 900px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    max-width: 700px;
  }
}

@media screen and (max-width: 768px) {
  section {
    padding: 5rem 0;
  }

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
