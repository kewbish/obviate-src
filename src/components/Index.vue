<template>
  <div>
    <section class="section">
      <div class="container mt-3">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="box has-text-centered">
              <h1 class="title is-3">Obviate</h1>
              <p class="subtitle">A simpler way to get started with Hugo</p>
              <button class="button is-warning">
                <router-link class="has-text-black" to="/auth">Get started</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="hero is-warning is-bold">
      <div class="hero-body">
        <div class="box my-5">
          <h1 class="title">Obviate, well, obviates the tedium. ✨</h1>
          <p>The speed of static site generators, without the tedium or technical knowledge required to usually set one up.</p>
          <div class="columns is-centered my-3">
            <div class="column is-one-quarter">
              <div
                class="card px-4 py-4 notification is-warning has-text-black has-text-weight-semibold"
              >
                <p>
                  Log in with GitHub
                  <i class="fab fa-github"></i> - we have an OAuth app set up.
                </p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div
                class="card px-4 py-4 notification is-warning has-text-black has-text-weight-semibold"
              >
                <p>
                  Choose your styles
                  <i class="fas fa-paint-brush"></i>, from colours, fonts, images - all customizable.
                </p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div
                class="card px-4 py-4 notification is-warning has-text-black has-text-weight-semibold"
              >
                <p>
                  And automate!
                  <i class="fas fa-robot"></i>
                  A GitHub Action away is all it takes to build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container box px-5 py-6">
        <h1 class="title has-text-centered">About the app</h1>
        <div class="columns is-centered">
          <div class="column is-one-third">
            <p>
              Obviate is a MVP created for Hack The 6ix, Toronto's biggest summer hackathon - 2020. Right now, it only automates a simple blog template, integrated with NetlifyCMS. It runs on Vue and relies on
              <a
                href="https://github.com/prose/gatekeeper"
              >Gatekeeper</a> for auth,
              <a href="https://saintplay.github.io/vue-swatches/">Vue Swatches</a> for colours,
              <a
                href="https://github.com/rodrigobendia/font-picker-vue"
              >Font Picker Vue</a> for font picking,
              <a href="https://www.npmjs.com/package/js-base64">js-base64</a> for encoding, and various other libraries that I've probably forgotten about.
            </p>
          </div>
          <div class="column is-one-third">
            <p>
              Obviate was created by a 14 year old who may or may not be named
              <a
                href="https://github.com/kewbish"
              >Kewbish (or Emilie Ma)</a> and who may or may not be writing this in third person in an attempt to also advertise her other projects. She's really into programming and open source, and if you're interested to see where Obviate goes, maybe follow her on GitHub? This is her 2nd hackathon!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-warning is-bold">
      <div class="hero-body">
        <div class="box content pb-5">
          <h1 class="title">Roadmap</h1>
          <p>Didn't have much time to finish too much during Hack the 6ix, but future plans include:</p>
          <ul>
            <li>Netlify automatic integration</li>
            <li>A more effective GH action</li>
            <li>And general cleaning up!</li>
          </ul>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half box px-5 py-5 has-text-centered">
            <h1 class="title">Since you're here, check it out!</h1>
            <button class="button is-warning">
              <router-link to="/auth" class="has-text-black">Go!</router-link>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>