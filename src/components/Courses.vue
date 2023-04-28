<template>
  <section class="container">
    <h1>Courses for you</h1>
    <p>
      Here are some courses from our schools that we offer. Enroll and kickstart your tech career.
    </p>
    <div class="wrapper">
      <article class="card">
        <img class="card-image" src="../assets/images/course1.png" alt="image" />
        <div class="card-box">
          <h3>Product Design</h3>
          <p>
            Design user experiences for products in today’s digital world. Build a portfolio that
            showcases your ability to transform products.
          </p>
          <a href="#"
            ><span>
              Enroll Now <ion-icon name="arrow-forward-outline" class="icon"></ion-icon> </span
          ></a>
        </div>
      </article>
      <article class="card">
        <img class="card-image" src="../assets/images/course2.png" alt="image" />
        <div class="card-box">
          <h3>Data Analytics</h3>
          <p>
            Use Python, SQL, and statistics to uncover insights, communicate critical findings, and
            create data-driven solutions
          </p>
          <a href="#"
            ><span>
              Enroll Now <ion-icon name="arrow-forward-outline" class="icon"></ion-icon> </span
          ></a>
        </div>
      </article>
      <article class="card">
        <img class="card-image" src="../assets/images/course3.png" alt="image" />
        <div class="card-box">
          <h3>Front-End Development</h3>
          <p>
            Begin our front-end development program structured to help students launch a new career
            in web development.
          </p>
          <a href="#"
            ><span>
              Enroll Now
              <ion-icon name="arrow-forward-outline" class="icon"></ion-icon>
            </span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Courses'
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
  content: '';
  height: 90%;
  left: -12px;
  position: absolute;
  width: 95%;
  z-index: -1;
}

.card-image {
  height: 233px;
  max-width: 100%;
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
  transition: all 0.15s;
  color: #202054;
  display: flex;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  padding-left: 0;
  transition: all 0.2s;
}

.card-box a span {
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.card-box a:hover span {
  gap: 15px;
}

.icon {
  display: inline-block;
  color: #202054;
  font-size: 25px;
  --ionicon-stroke-width: 8px;
}

@media screen and (max-width: 1024px) {
  .container {
    padding: 0 1.25rem;
    max-width: 900px;
  }

  .wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 900px) {
  .container {
    max-width: 700px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 28px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .card-image {
    height: 141px;
  }

  .card-box {
    padding: 0.875rem;
  }

  .card-box h3 {
    font-size: 1.125rem;
  }

  .card-box p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

@media screen and (max-width: 640px) {
  .wrapper {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
