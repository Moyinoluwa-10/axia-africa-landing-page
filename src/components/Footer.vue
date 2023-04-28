<template>
  <footer id="footer" class="footer">
    <div class="container pad-cont section-container">
      <div class="box--1">
        <img src="../assets/svgs/logo-white.4357a423.svg" alt="logo" />
        <p>
          An organization that is focused on equipping African youths with the knowledge and skills
          needed in the tech space.
        </p>
        <div class="boxes">
          <a href="#" rel="noopener noreferrer" target="_blank">
            <ion-icon name="logo-linkedin" class="icon"></ion-icon>
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank">
            <ion-icon name="logo-twitter" class="icon"></ion-icon>
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank">
            <ion-icon name="logo-instagram" class="icon"></ion-icon>
          </a>
        </div>

        <div class="wrapper">
          <section class="cont">
            <h1>SCHOOLS</h1>
            <a href="#"> School of Product </a>
            <a href="#"> School of Data </a>
            <a href="#"> School of Engineering </a>
          </section>

          <section class="cont">
            <h1>COMPANY</h1>
            <a aria-current="page" href="#"> About </a>
            <a aria-current="page" href="#"> Blog </a><a href="#"> FAQs </a>
            <a href="#"> Join Our Community </a>
            <a href="#"> Partnership </a>
          </section>

          <section class="cont">
            <h1>CONTACT</h1>
            <a href="#">axiaafrica@gmail.com</a>
            <a href="#">09015558035</a>
          </section>

          <section class="cont--1">
            <a href="#" rel="noopener noreferrer" target="_blank">
              <ion-icon name="logo-linkedin" class="icon"></ion-icon>
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <ion-icon name="logo-twitter" class="icon"></ion-icon>
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <ion-icon name="logo-instagram" class="icon"></ion-icon>
            </a>
          </section>
        </div>

        <p class="top">© 2023 Axia Africa. All rights reserved.</p>
      </div>

      <div class="box--2">
        <span>COMPANY</span>
        <a aria-current="page" href="#"> About </a>
        <a aria-current="page" href="#"> Blog </a>
        <a href="#"> FAQs </a>
        <a aria-current="page" href="#"> Join Our Community </a>
        <a href="#"> Partnership </a>
      </div>

      <div class="box--3">
        <span>SCHOOLS</span>
        <a href="#"> School of Product </a>
        <a href="#"> School of Data </a>
        <a href="#"> School of Engineering </a>
      </div>

      <div class="box--4">
        <span>CONTACT</span>
        <a href="#">axiaafrica@gmail.com</a>
        <a href="#">09015558035</a>
      </div>
    </div>

    <p class="bottom center text-center w-full md:w-auto pc mt-32">
      © 2023 Axia Africa. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer {
  padding: 6rem 1.25rem 3.5rem;
  background: #202054;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin: 0 auto;
}

.section-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
  gap: 1.4rem;
}

.bottom {
  text-align: center;
  margin-top: 8rem;
}

.box--1 {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-start;
}

.box--1 img {
  width: 78px;
  height: auto;
  max-width: 100%;
}

.box--1 p {
  max-width: 350px;
  color: #ebebeb;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.25rem;
}

.boxes {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  margin-top: 0.75rem;
}

.icon {
  color: #fff;
  font-size: 20px;
}

.wrapper {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  row-gap: 5rem;
  margin-top: 45px;
  display: none;
  width: 100%;
}

.cont {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cont--1 {
  display: flex;
  gap: 1.25rem;
}

.cont h1 {
  font-weight: 700;
}

.cont a {
  font-weight: 500;
  color: #ebebeb;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-decoration: none;
}

.box--1 .top {
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 4rem;
  display: none;
}

.box--2 {
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 15%;
}

.box--2 span {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 0.625rem;
}

.box--2 a {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
}

.box--3 {
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 20%;
}

.box--3 span {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 0.625rem;
}

.box--3 a {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
}

.box--4 {
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 15%;
}

.box--4 span {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 0.625rem;
}

.box--4 a {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 3rem 1.25rem 3rem;
  }

  .box--1 {
    width: 100%;
  }

  .box--1 p {
    max-width: unset;
  }

  .box--2,
  .box--3,
  .box--4 {
    display: none;
  }

  .wrapper {
    display: grid;
  }

  .box--1 .top {
    display: flex;
  }

  .bottom {
    display: none;
  }
}
</style>
