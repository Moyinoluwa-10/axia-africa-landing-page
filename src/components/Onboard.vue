<template>
  <section class="section" id="onboard">
    <div class="container pad-cont section-container">
      <header class="container primary-heading">Get onboard with us</header>
      <div class="container wrapper">
        <img src="../assets/svgs/onboard.807b4918.svg" alt="advisor" />
        <div class="right">
          <img src="../assets/svgs/quotes-left.svg" class="quotes" alt="quotes" />
          <p>
            Axia Africa is an organization that is focused on equipping African youths with the
            knowledge and digital skills needed today Our aim is to make tech knowledge accessible
            to every individual irrespective of age, literacy, and location. <br />
            <br />
            We are looking forward to building a strong community of ready-to-work personnel and
            employable candidates around the world in the tech space.
          </p>
        </div>
      </div>
      <div class="container box">
        <h2>Why choose us</h2>
        <p>
          We at Axia Africa are intentional about our students and focused about building a
          community. The tech space in Africa is fast growing and we have the necessary programmes
          to help launch you into that space. We sharpen your skills to give you leverage in your
          career while navigating the job market
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OnboardSection'
}
</script>

<style scoped>
.section {
  padding: 7rem 0;
  background-color: rgb(17, 17, 17);
}

.section-container {
  color: #fff;
}

.wrapper {
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  align-items: flex-start;
}

.wrapper img {
  width: 55%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  display: block;
}

.wrapper .right {
  width: 45%;
  color: #ebebeb;
}

.wrapper .quotes {
  width: 56px;
  height: 56px;
}

.wrapper p {
  margin-top: 2.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
}

.box {
  color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  margin-top: 3.5em;
}

.box h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #fff;
  font-weight: 500;
  margin-left: 6rem;
  position: relative;
}

.box h2::before {
  border-bottom: 3px solid;
  bottom: 50%;
  content: '';
  height: 1px;
  position: absolute;
  right: 110%;
  width: 77px;
}

.box p {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-top: 1.5rem;
}

@media screen and (max-width: 1024px) {
  .wrapper {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }

  .wrapper {
    margin-top: 3rem;
    gap: 2.5rem;
  }

  .wrapper img {
    width: 100%;
  }

  .wrapper .right {
    width: 100%;
  }

  .box h2 {
    font-size: 28px;
  }
}
</style>
