<template>
  <header>
    <nav>
      <div>
        <header>
          <a href="/"><img src="https://www.axia.africa/_nuxt/logo.a67befb6.svg" alt="logo"></a>
          <div><a href="/#onboard" class="nav-item"> About </a><span to="#">
              <p>Schools <img src="../assets/sss.svg" style="width: 20px;" alt=""></p>
              <div>
                <div>
                  <div>
                    <div><a href="/schools/product" class="">
                        School of Product
                      </a><a href="/schools/engineering" class=""> School of
                        Engineering </a><a href="/schools/data" class=""> School
                        of Data </a></div>
                  </div>
                </div>
              </div>
            </span><button to="/application" class="nav-item"> Join Our Community
            </button><span class="nav-item ">
              <p>Help </p>
              <div>
                <div>
                  <div>
                    <div><a href="/faqs" class=""> FAQs
                      </a><span>
                        Contact Us </span></div>
                  </div>
                </div>
              </div>
            </span></div>
          <div><a href="/application" class="btn-primary"> Apply Now </a></div>
        </header>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
  },

}
</script>



