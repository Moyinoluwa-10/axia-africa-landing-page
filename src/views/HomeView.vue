<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Hero from '../components/Hero.vue'
import Courses from '../components/Courses.vue'
import Speak from '../components/Speak.vue'
import Onboard from '../components/Onboard.vue'
import Discover from '../components/Discover.vue'
import Partner from '../components/Partner.vue'
import Foster from '../components/Foster.vue'
import Testimonials from '../components/Testimonials.vue'
</script>

<template>
  <Header />
  <main style="padding-top: 7rem">
    <Hero />
    <Courses />
    <Speak />
    <Onboard />
    <Discover />
    <Foster />
    <Testimonials />
    <Partner />
  </main>
  <Footer />
</template>
