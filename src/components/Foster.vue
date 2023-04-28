<template>
  <section class="section">
    <div class="container pad-cont">
      <header class="primary-heading">Foster your tech knowledge</header>
      <div class="container wrapper">
        <img src="../assets/images/foster.96ed8018.png" alt="foster" class="desktop image" /><img
          src="../assets/images/foster-sm.b91531e9.png"
          alt="foster"
          class="mobile"
        />
        <p class="paragraph primary-paragraph">
          Don’t just wait around, Register and join our students ready to enroll and kick start
          their tech career.
        </p>
        <a href="#" class="btn btn-primary"> Apply Now </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FosterSection'
}
</script>

<style scoped>
.section {
  padding: 7rem 0;
  background: rgb(17, 17, 17);
  color: #fff;
}

.wrapper {
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 3.5rem;
}

.image {
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

.paragraph {
  color: #ebebeb;
  max-width: 580px;
}

.btn {
  color: #fff;
  margin-top: 2px;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #fff;
  border: 3px solid #fff;
}

.btn:hover {
  color: #202054;
  background: #fff;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #f0b73f;
}

@media screen and (max-width: 768px) {
  .section {
    padding: 5rem 0;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
