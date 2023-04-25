<template>
  <section class="container">
    <h1> Courses for you </h1>
    <p> Here are some courses from our
      schools that we offer. Enroll and kickstart your tech career.
    </p>
    <div class="wrapper">
      <article class="card"><img src="../assets/images/course1.png" alt="image" class="md:h-[233px] h-[141px]">
        <div class="card-box md:p-5 p-3.5">
          <h3 class="text-lg md:text-[22px] text-darkish font-semibold">Product Design</h3>
          <p class="text-sm md:text-base text-darkgrey font-medium mt-3 text-[#3F3F3F]">Design user
            experiences for products in today’s digital world. Build a portfolio that showcases your ability to transform
            products.</p><a href="/enroll/product_designer"
            class="btn flex gap-3 text-primary pl-0 mt-4 hover:gap-5 transite"><span class="underline">
              Enroll Now <i class="fa-solid fa-arrow-right"></i> <img src="../" alt="arrow-right" /></span></a>
        </div>
      </article>
      <article class="card"><img src="../assets/images/course2.png" alt="image" class="md:h-[233px] h-[141px]">
        <div class="card-box md:p-5 p-3.5">
          <h3 class="text-lg md:text-[22px] text-darkish font-semibold">Data Analytics</h3>
          <p class="text-sm md:text-base text-darkgrey font-medium mt-3 text-[#3F3F3F]">Use Python,
            SQL, and statistics to uncover insights, communicate critical findings, and create data-driven solutions</p><a
            href="/enroll/data_analyst" class="btn flex gap-3 text-primary pl-0 mt-4 hover:gap-5 transite"><span
              class="underline">
              Enroll Now </span></a>
        </div>
      </article>
      <article class="card"><img src="../assets/images/course3.png" alt="image" class="md:h-[233px] h-[141px]">
        <div class="card-box md:p-5 p-3.5">
          <h3 class="text-lg md:text-[22px] text-darkish font-semibold">Front-End Development</h3>
          <p class="text-sm md:text-base text-darkgrey font-medium mt-3 text-[#3F3F3F]">Begin our
            front-end development program structured to help students launch a new career in web development.</p><a
            href="/enroll/frontend_developer" class="btn flex gap-3 text-primary pl-0 mt-4 hover:gap-5 transite"><span
              class="underline">
              Enroll Now </span></a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Courses"

}
</script>

<style scoped>
.container {
  padding: 0 150px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 10rem;
}

h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #111;
  font-weight: 500;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #3f3f3f;
  max-width: 478px;
  margin-top: 1.25rem;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  place-content: center;
  margin-top: 3rem;
}

.card {
  background-color: #faf5ee;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
}

.card::before {
  background-color: transparent;
  border: 3px solid #000;
  border-right-width: 0;
  bottom: -20px;
  content: "";
  height: 90%;
  left: -12px;
  position: absolute;
  width: 95%;
  z-index: -1;
}

img {
  height: 233px;
  max-width: 100%;
  /* display: block; */
  vertical-align: middle;
}

.card-box {
  padding: 1.25rem;
}

.card-box h3 {
  font-size: 22px;
  font-weight: 600;
  color: #111;
  line-height: 1.75rem;
}

.card-box p {
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(63 63 63);
  font-weight: 500;
  margin-top: 0.75rem;
}

.card-box a {
  transition: all .15s;
  color: #202054;
  display: flex;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  padding-left: 0;
}


@media screen and (max-width:1024px) {
  .container {
    padding: 0 1.25rem;
    max-width: 900px;
  }

  .wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));

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

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  img {
    height: 141px;
  }

  .card-box {
    padding: .875rem;
  }

  .card-box h3 {
    font-size: 1.125rem;
  }

  .card-box p {
    font-size: .875rem;
    line-height: 1.25rem;
  }

}



@media screen and (max-width:640px) {
  .wrapper {
    grid-template-columns: repeat(1, minmax(0, 1fr));

  }
}
</style>