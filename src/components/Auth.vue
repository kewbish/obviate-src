<template>
  <section class="section">
    <div class="box has-text-centered py-6">
      <h1 class="title">Login to access Obviate</h1>
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div
                class="tile is-child notification box is-dark mx-3"
                style="cursor: pointer;"
                v-on:click="gitToken()"
              >
                <img src="../assets/github.svg" style="display:block;" id="gh-white" />
                <br />
                <p class="subtitle-5">Log In With GitHub</p>
              </div>
            </div>
            <div class="tile is-parent">
              <div
                class="tile is-child notification box is-link is-light mx-3"
                style="cursor: pointer;"
                v-on:click="netToken()"
              >
                <img src="../assets/netlify.png" style="display:block;" />
                <br />
                <p class="subtitle-5">Log In With Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="button is-info">Continue</button>
    </div>
  </section>
</template>

<script>
import store from "../store.js";
export default {
  data() {
    return {
      ghClientId: store.ghClientId,
      ghClientSecret: store.ghClientSecret,
      ghAuthed: store.ghAuthed,
      netlifyClientId: store.netlifyClientId,
      ticketId: null,
    };
  },
  methods: {
    gitToken() {
      if (localStorage.getItem("ghToken") == null) {
        if (localStorage.getItem("ghPopup") == null) {
          window.open(
            `https://github.com/login/oauth/authorize?client_id=${this.ghClientId}`,
            "_blank"
          );
          localStorage.setItem("ghPopup", true);
        } else {
          const params = new URLSearchParams(window.location.search);
          if (params) {
            fetch(`https://github.com/login/oauth/access_token`, {
              body: JSON.stringify(
                { client_id: this.ghClientId },
                { client_secret: this.ghClientSecret },
                { code: "e6706cd314d7a7f8816b" }
              ),
              headers: {
                Accept: "application/json",
              },
              method: "POST",
              mode: "no-cors",
            })
              .then((res) => res.json)
              .then((data) => {
                localStorage.setItem("ghToken", data.access_token);
              });
          }
        }
      }
    },
    netToken() {
      fetch(
        `https://api.netlify.com/api/v1/oauth/tickets?client_id=${this.netlifyClientId}`,
        { method: "POST" }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.ticketId = data.id;
          window.open(
            `https://app.netlify.com/authorize?response_type=ticket&ticket=${this.ticketId}`,
            "_blank"
          );
          localStorage.setItem("netAuthed", true);
        });
    },
    allAuth() {
      fetch(
        `https://api.netlify.com/api/v1/oauth/tickets/${this.ticketId}/exchange?ticket_id=${this.ticketId}`,
        { method: "POST" }
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("netlifyToken", data.access_token);
        });
    },
  },
};
</script>
