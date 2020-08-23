<template>
  <section class="section">
    <div class="box px-6 py-6">
      <h1 class="title">Customize</h1>
      <hr />
      <h1 class="title is-3 mb-1">Basics</h1>
      <div class="field">
        <label class="label mb-0">Name</label>
        <p class="mb-2">This'll be the name of your blog.</p>
        <div class="control">
          <input class="input" type="text" placeholder="Name of blog." v-model="name" />
        </div>
      </div>
      <hr />
      <h1 class="title is-3 mb-3">Customization</h1>
      <div class="level">
        <div class="level-left">
          <div class="level-item mr-6">
            <div>
              <label class="label mb-0">Font one</label>
              <p class="mb-2">The main font of your page.</p>
              <div class="control">
                <font-picker
                  :api-key="key"
                  :activeFont="fontFamily1"
                  :options="{name : 'one'}"
                  @change="changeFont1"
                ></font-picker>
              </div>
            </div>
          </div>
          <div class="level-item">
            <div>
              <label class="label mb-0">Font two</label>
              <p class="mb-2">The secondary font of your page. Used for headings and such.</p>
              <div class="control">
                <font-picker
                  :api-key="key"
                  :activeFont="fontFamily2"
                  :options="{name : 'two'}"
                  @change="changeFont2"
                ></font-picker>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <label class="label mb-0">Colour one</label>
          <p class="mb-2">The main colour of your page. Choose something snazzy!</p>
          <div class="control">
            <v-swatches v-model="colour_one"></v-swatches>
            <details>
              <summary>Advanced</summary>
              <v-swatches class="mt-3" v-model="colour_one" swatches="text-advanced"></v-swatches>
            </details>
          </div>
        </div>
        <div class="column">
          <label class="label mb-0">Colour two</label>
          <p class="mb-2">The secondary font of your page. Usually darker.</p>
          <div class="control">
            <v-swatches v-model="colour_two"></v-swatches>
            <details>
              <summary>Advanced</summary>
              <v-swatches class="mt-3" v-model="colour_two" swatches="text-advanced"></v-swatches>
            </details>
          </div>
        </div>
        <div class="column">
          <label class="label mb-0">Cover colour</label>
          <p class="mb-2">The picture overlay color. Usually darker, semitransparent.</p>
          <div class="control">
            <v-swatches v-model="cover"></v-swatches>
            <details>
              <summary>Advanced</summary>
              <v-swatches class="mt-3" v-model="cover" swatches="text-advanced"></v-swatches>
            </details>
          </div>
        </div>
        <div class="column">
          <label class="label mb-0">Shadow colour</label>
          <p class="mb-2">The shadow color. Usually darker, opaque.</p>
          <div class="control">
            <v-swatches v-model="shadow"></v-swatches>
            <details>
              <summary>Advanced</summary>
              <v-swatches class="mt-3" v-model="shadow" swatches="text-advanced"></v-swatches>
            </details>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label mb-0">Background picture URL</label>
        <p class="mb-2">The background picture URL.</p>
        <div class="control">
          <input class="input" type="text" placeholder="Picture URL." v-model="url" />
        </div>
      </div>
      <hr />
      <h1 class="title is-3 mb-1">Advanced</h1>
      <details class="mb-4">
        <div class="field">
          <label class="label mb-0">Repo</label>
          <p
            class="mb-2"
          >This'll be the name of the GH repo. Defaults to Obviate. Ensure it doesn't overlap.</p>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Name of repo."
              value="Obviate"
              v-model="repo"
            />
          </div>
        </div>
        <div class="field">
          <label class="label mb-0">Base one</label>
          <p class="mb-2">The text color of your page.</p>
          <div class="control">
            <v-swatches v-model="base_one" swatches="text-basic" :show-border="true"></v-swatches>
          </div>
        </div>
        <div class="field">
          <label class="label mb-0">Base two</label>
          <p class="mb-2">The base colour of your page.</p>
          <div class="control">
            <v-swatches v-model="base_two" swatches="text-basic" :show-border="true"></v-swatches>
          </div>
        </div>
      </details>
      <button class="button is-warning" v-on:click="submit()" id="continue">Submit</button>
    </div>
  </section>
</template>

<script>
import FontPicker from "font-picker-vue";
import VSwatches from "vue-swatches";
import { encode } from "js-base64";
import "vue-swatches/dist/vue-swatches.css";
import store from "../store.js";
export default {
  components: { FontPicker, VSwatches },
  data() {
    return {
      name: "blog",
      repo: "obviate",
      colour_one: "#9873c2",
      colour_two: "#ba97e2",
      base_one: "#000000",
      base_two: "#eeeeee",
      cover: "#6a4580",
      shadow: "#3d214d",
      url: "https://image.com/img.png",
      key: store.googleAPI,
      fontFamily1: "Montserrat",
      fontFamily2: "Abril Fatface",
    };
  },
  methods: {
    changeFont1(arr) {
      this.fontFamily1 = arr.family;
    },
    changeFont2(arr) {
      this.fontFamily2 = arr.family;
    },
    submit() {
      document.getElementById("continue").classList.add("is-loading");
      var username;
      fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${localStorage.getItem("ghToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          username = data.login;
          fetch(`https://api.github.com/repos/kewbish/obviate/forks`, {
            headers: {
              Accept: "application/vnd.github.baptiste-preview+json",
              Authorization: `token ${localStorage.getItem("ghToken")}`,
            },
            method: "POST",
          }).then(() => {
            var contents = `
name ${this.name}
owner ${username}
repo ${this.repo}
color_one ${this.colour_one}
color_two ${this.colour_two}
base_one ${this.base_one}
base_two ${this.base_two}
shadow ${this.shadow}96
cover ${this.cover}
url ${this.url}
font_one ${this.fontFamily1}
font_two ${this.fontFamily2}
              `;
            console.log(encode(contents));
            fetch(
              `https://api.github.com/repos/${username}/${this.repo}/contents/variables.obviate`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("ghToken")}`,
                  "Content-Type": "application/json; charset=utf-8",
                },
                method: "PUT",
                credentials: "same-origin",
                body: JSON.stringify({
                  message: "Obviate // Push website variables",
                  content: encode(contents).toString(),
                }),
              }
            );
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>