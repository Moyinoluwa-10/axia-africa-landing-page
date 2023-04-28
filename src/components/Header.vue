<template>
  <nav>
    <div class="container container--1">
      <header class="container">
        <a href="/" class="logo-box">
          <img src="../assets/svgs/logo.a67befb6.svg" alt="logo" />
        </a>

        <div class="wrapper">
          <a href="#onboard" class="nav-item"> About </a>

          <span to="#" class="nav-item box">
            <p>
              Schools
              <ion-icon name=" chevron-down-sharp" class="icon"></ion-icon>
            </p>
            <div>
              <div>
                <div>
                  <div>
                    <a href="#"> School of Product</a>
                    <a href="#"> School of Engineering </a>
                    <a href="#"> School of Data</a>
                  </div>
                </div>
              </div>
            </div>
          </span>

          <button to="#" class="nav-item">Join Our Community</button>

          <span class="nav-item cont">
            <p>
              Help
              <ion-icon name="chevron-down-sharp" class="icon"></ion-icon>
            </p>
            <div>
              <div>
                <div>
                  <div>
                    <a href="#"> FAQs </a>
                    <span> Contact Us </span>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div class="btn-box">
          <a href="#" class="btn"> Apply Now </a>
        </div>

        <div class="hamburger" @click="toggleMobileMenu">
          <ion-icon
            :name="isMobileMenuOpen ? 'close-outline' : 'menu-outline'"
            class="ham-icon btn-1"
          ></ion-icon>
        </div>
      </header>

      <div :class="isMobileMenuOpen ? 'navbar active' : 'navbar'">
        <div class="navbar-box">
          <div>
            <h1>SCHOOLS</h1>
            <a href="#"> School of Product</a>
            <a href="#"> School of Data </a>
            <a href="#"> School of Engineering </a>
          </div>

          <div>
            <h1 class="font-bold">COMPANY</h1>
            <a aria-current="page" href="/#onboard"> About </a>
            <a href="#"> FAQs</a>
            <span to="#"> Join the Community </span>
            <a href="#"> Partnership </a>
          </div>

          <div>
            <h1>HELP</h1>
            <a href="#">axiaafrica@gmail.com</a>
            <a href="#">09015558035</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 15px;
}

.ham-icon {
  font-size: 35px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 252, 249);
  z-index: 20;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 101px;
  color: #000;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.container--1 {
  padding: 0 150px;
  width: 100%;
}

header {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 53px;
}

header .logo-box {
  align-items: center;
  display: flex;
  justify-content: center;
}

header .logo-box img {
  width: auto;
  height: auto;
  max-width: 100%;
  display: block;
}

.wrapper {
  display: flex;
  gap: 1.75rem;
  align-self: center;
}

.nav-item {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
}

.box {
  cursor: pointer;
}

.box p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.box > div > div {
  align-items: flex-start;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: flex-start;
  padding-top: 2rem;
  position: absolute;
  left: 0;
  top: -20px;
  display: none;
}

.box:hover > div > div {
  display: block;
}

.box > div > div > div {
  background: #fffcf9;
  box-shadow: 0 4px 20px #0000001a;
  min-width: 1rem;
  padding: 0.75rem 1.5rem 0.75rem 1rem;
  width: -moz-max-content;
  width: max-content;
  transition: all 0.15s;
}

.box > div > div > div > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
}

.box > div > div > div > div > a {
  color: inherit;
  text-decoration: none;
}

.wrapper > button {
  cursor: pointer;
  appearance: button;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
}

.cont {
  cursor: pointer;
}

.cont p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cont > div {
  position: relative;
}

.cont > div > div {
  align-items: flex-start;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: flex-start;
  padding-top: 2rem;
  position: absolute;
  left: 0;
  top: -20px;
  display: none;
}

.cont:hover > div > div {
  display: block;
}

.cont > div > div > div {
  background: #fffcf9;
  box-shadow: 0 4px 20px #0000001a;
  min-width: 1rem;
  padding: 0.75rem 1.5rem 0.75rem 1rem;
  width: -moz-max-content;
  width: max-content;
  transition: all 0.15s;
}

.cont > div > div > div > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
}

.cont > div > div > div > div > a {
  color: inherit;
  text-decoration: none;
}

.hamburger {
  display: none;
  align-items: center;
  cursor: pointer;
  z-index: 30;
}

.btn-box {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
}

.btn {
  color: #202054;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #202054;
  border: 3px solid #000;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.5rem;
  transition: all 0.15s;
  cursor: pointer;
  background: transparent;
  text-decoration: none;
}

.btn:hover {
  color: #fff;
  background: #202054;
  box-shadow: 0 0 #0000, 0 0 #0000, 7px 7px 0px #f0b73f;
}

.navbar {
  display: none;
  position: fixed;
  background: #fff;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding-top: 5rem;
  padding: 5rem 1.25rem 0;
}

.navbar-box {
  display: grid;
  gap: 1rem;
  row-gap: 3rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 45px;
}

.navbar-box > div {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.navbar-box > div h1 {
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Avenir', sans-serif;
}

.navbar-box > div a {
  color: #000;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .container {
    max-width: 900px;
  }

  .wrapper {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .container {
    max-width: 700px;
  }
}

@media screen and (max-width: 768px) {
  nav {
    height: unset;
  }

  header {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    padding: 0 1.25rem;
  }

  header .logo-box img {
    width: 78px;
  }

  .container--1 {
    padding: 0;
  }

  .nav-item {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .hamburger {
    display: flex;
  }

  .btn-box {
    display: none;
  }

  .navbar.active {
    display: block;
  }
}
</style>
