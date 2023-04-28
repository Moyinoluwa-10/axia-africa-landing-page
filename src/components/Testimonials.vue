<template>
  <section class="section">
    <div class="container pad-cont">
      <h1 class="heading primary-heading">Our success story</h1>
      <p class="primary-paragraph">What our students are saying about their learning experience.</p>
    </div>

    <div class="box">
      <Vue3Marquee duration="50" pauseOnHover="true">
        <article class="card">
          <p>
            Axia Africa’s product design class has been an eye opener and a good starter for me as
            someone who is a graphic designer but struggles a lot with UX in particular. I’ve become
            more confident in my UX process and prowess as a designer and I won’t stop learning!.
            Thank you Axia.
          </p>
          <div>
            <img src="../assets/images/person2.png" alt="Samuel Osunleke" />
            <h3>Samuel Osunleke</h3>
          </div>
        </article>
        <article class="card">
          <p>
            Axia Africa has been so helpful to me. I got into tech with zero knowledge of it, didn’t
            even know my way around a good system. But right now, I know more than I would’ve
            imagined that I can before I got into the academy. Very helpful, kind, patient and
            thoughtful teachers too.&nbsp;This training has really helped me! I highly recommend it!
            Thank youuu.
          </p>
          <div>
            <img src="../assets/images/person3.png" alt="Oyinlola Babalola" />
            <h3>Oyinlola Babalola</h3>
          </div>
        </article>
        <article class="card">
          <p>
            Being someone with the passion to learn design, I found it hard to multitask between my
            days job and my passion for learning. Coupled with this, the fear of learning alone
            without mentorship made me doubt my ability to learn ui/ux. However, thanks to Axia
            Africa and their mentorship programs, I have been able to learn what I desired to learn
            in a convenient space at my own pace. Thanks Axia Africa
          </p>
          <div>
            <img src="../assets/images/person4.png" alt="Samuel Ogunshina" />
            <h3>Samuel Ogunshina</h3>
          </div>
        </article>
        <article class="card">
          <p>
            I always had a knack for designs but I needed the right platform to put me through and
            teach me properly, I found that with Axia Africa. At Axia Africa, the tutors are very
            kind to retake a class for you when you don’t understand a thing. If you are looking for
            a place where you need an efficient and reliable tutoring then Axia Africa is the right
            place for you.
          </p>
          <div>
            <img src="../assets/images/person5.png" alt="Feyisayo Olakanmi" />
            <h3>Feyisayo Olakanmi</h3>
          </div>
        </article>
        <article class="card">
          <p>
            Axia Africa's product design class has taught me a lot of things regarding designs and
            how to interact with people. I've learnt a lot about the UX and UI processes. Each class
            has been a perfect blend of learning and fun. Thanks so much for this opportunity Axia
            Africa
          </p>
          <div>
            <img src="../assets/images/person6.png" alt="Dolapo Oyegunle" />
            <h3>Dolapo Oyegunle</h3>
          </div>
        </article>
        <article class="card">
          <p>
            Finding Axia Africa and being offered a training on product design was a turning point
            in my career. The lessons were planned properly and were made flexible to accommodate
            our different schedules.I will a 100% recommend Axia Africa to anyone who plans to take
            their career to the next level and is looking for a place to start.
          </p>
          <div>
            <img src="../assets/images/person7.png" alt="Linda Nwodo" />
            <h3>Linda Nwodo</h3>
          </div>
        </article>
      </Vue3Marquee>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection'
}
</script>

<style scoped>
.section {
  margin-top: 6rem;
  margin-bottom: 5rem;
}

.heading {
  color: #111;
}

.container p {
  color: #3f3f3f;
  max-width: 708px;
  margin-top: 1.25rem;
}

.box {
  margin-top: 6rem;
}

.card {
  background-color: #faf5ee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  min-height: 320px;
  padding: 1.5rem 1.25rem;
  position: relative;
  width: 375px;
}

.card p {
  color: #3f3f3f;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.card > div {
  display: flex;
  align-items: center;
}

.card > div img {
  height: 56px;
  max-width: 100%;
  display: block;
}

.card > div h3 {
  color: #3f3f3f;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-left: 1.25rem;
}
</style>
