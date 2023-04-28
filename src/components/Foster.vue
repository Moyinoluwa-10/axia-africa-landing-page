<template>
  <section>
    <div class="container container--1">
      <header>Foster your tech knowledge</header>
      <div class="container wrapper">
        <img src="../assets/images/foster.96ed8018.png" alt="foster" class="desktop" /><img
          src="../assets/images/foster-sm.b91531e9.png"
          alt="foster"
          class="mobile"
        />
        <p>
          Don’t just wait around, Register and join our students ready to enroll and kick start
          their tech career.
        </p>
        <a href="#"> Apply Now </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Foster'
}
</script>

<style scoped>
section {
  padding: 7rem 0;
  background: rgb(17, 17, 17);
  color: #fff;
}

.container {
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
}

.container--1 {
  padding: 0 150px;
}

header {
  font-size: 36px;
}

.wrapper {
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 3.5rem;
}

img {
  display: flex;
  object-fit: cover;
  -o-object-fit: cover;
  width: 100%;
  height: auto;
  display: block;
  max-width: 100%;
}

.mobile {
  display: none;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #ebebeb;
  font-weight: 500;
  max-width: 580px;
}

a {
  color: #fff;
  margin-top: 2px;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #fff;
  border: 3px solid #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  transition: all 0.15s;
  cursor: pointer;
  background: transparent;
  text-decoration: none;
  width: max-content;
}

a:hover {
  color: #202054;
  background: #fff;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #f0b73f;
}

@media screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
    max-width: 900px;
  }

  .container--1 {
    padding: 0 1.25rem;
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

  header {
    font-size: 28px;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
