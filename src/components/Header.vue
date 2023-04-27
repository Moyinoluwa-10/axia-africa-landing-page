<template></template>

<script>
export default {
  name: 'Header',
  // data() {
  //   return {
  //     isMobileMenuOpen: false,
  //   }
  // },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
  },

}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px;
  width: 100%;
  font-family: U8-Bold, sans-serif;
}

.navbar h1 {
  font-size: 25px;
  line-height: 40px;
  color: var(--black);
}

#dark .navbar h1 {
  color: var(--white);
}

.navbar .nav-menu {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 30px;
}

.navbar .nav-link {
  text-decoration: none;
  color: var(--black);
  position: relative;
  text-transform: uppercase;
  font-size: 16px;
  font-family: U8, sans-serif;
  letter-spacing: 1px;
}

#dark .navbar .nav-link {
  color: var(--white);
}

.navbar .nav-link::before {
  content: "";
  transition: all 0.3s ease;
  height: 2px;
  border-radius: 5%;
  position: absolute;
  background-color: var(--black);
  width: 100%;
  transform: scaleX(0);
  transform-origin: top center;
  left: 0;
  bottom: -5px;
}

#dark .navbar .nav-link::before {
  background-color: var(--white);
}

.navbar .nav-link:hover::before {
  transform: scaleX(1);
}

/* Hamburger Styling */
.navbar .hamburger {
  display: none;
  cursor: pointer;
  position: relative;
  z-index: 7;
}

.navbar .bar {
  display: block;
  width: 26px;
  height: 3px;
  margin: 5px 0;
  -webkit-transition: transform 0.15s ease;
  transition: transform 0.15s ease;
  background-color: var(--dark-bg);
  border-radius: 4px;
}

#dark .navbar .bar {
  background-color: var(--white);
}

.navbar .bar:nth-child(2) {
  width: 42px;
}

.navbar .bar:nth-child(3) {
  width: 34px;
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 25px 30px;
  }

  .navbar .nav {
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    z-index: 5;
    transition: all 1s ease;
  }

  .navbar .nav.active {
    left: 0;
  }

  .navbar .nav .nav-menu {
    transition: all 1s ease;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: var(--light-bg);
    width: 100%;
    height: 100vh;
    margin: 0;
    transition: all 1s ease;
  }

  #dark .navbar .nav-menu {
    background-color: var(--dark-bg);
  }

  .navbar li a {
    font-weight: 900;
    font-family: "U8-Bold", sans-serif;
  }

  .navbar .hamburger {
    display: block;
  }

  .navbar .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .navbar .hamburger.active .bar:nth-child(1) {
    opacity: 1;
    transform: translateY(8px) rotate(135deg);
  }

  .navbar .hamburger.active .bar:nth-child(3) {
    opacity: 1;
    transform: translateY(-8px) rotate(-135deg);
  }
}
</style>



