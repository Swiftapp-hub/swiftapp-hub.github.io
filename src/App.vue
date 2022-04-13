<template>
  <nav id="nav_bar" ref="nav_bar">
    <a id="logo" ref="logo" href="https://swiftapp-hub.github.io" title="Home">Swiftapp</a>

    <div class="onglets">
      <button id="btn_github" ref="btn_github" @click="open('https://github.com/Swiftapp-hub')">GitHub</button>
      <button id="btn_contact" ref="btn_contact" @click="changePage('ContactPage')">Contact</button>
    </div>
  </nav>

  <transition name="component-fade">
    <component v-bind:is="currentPage" />
  </transition>
</template>

<script>
import SwiftyAssistant from "./components/SwiftyAssistant.vue";
import HomePage from "./components/HomePage.vue";
import ContactPage from "./components/ContactPage.vue";
import gsap from "gsap";
import { onMounted, ref } from '@vue/runtime-core';

export default {
  name: "App",
  components: {
    SwiftyAssistant,
    HomePage,
    ContactPage
  },
  data() {
    return {
      currentPage: "SwiftyAssistant"
    };
  },
  setup() {
    const logo = ref("logo");
    const btn_github = ref("btn_github");
    const btn_contact = ref("btn_contact");
    const nav_bar = ref("nav_bar");

    let anim = null;

    onMounted (() => {
      anim = gsap.timeline()
      .from(logo.value, {duration: 2, x: -150, opacity: 0, ease: "power2.out"}, 0.1)
      .from(btn_github.value, {duration: 1.5, y: -200, opacity: 0, ease: "power2.out"}, 0.1)
      .from(btn_contact.value, {duration: 1.5, y: -200, opacity: 0, ease: "power2.out"}, 0.5);
    });

    return {
      logo,
      btn_github,
      btn_contact,
      anim,
      nav_bar
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 35) {
        this.nav_bar.style.backgroundColor = "#050505";
        this.nav_bar.style.boxShadow = "0px 5px 15px 0px rgba(7, 7, 7, 0.7)";
      } else {
        this.nav_bar.style.backgroundColor = "rgba(10, 10, 10, 0.700)";
        this.nav_bar.style.boxShadow = "0px 0px 0px 0px rgba(7, 7, 7, 0.534)";
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
    open(link) {
      window.open(link);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .4s ease;
}

.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}

nav {
  background: rgba(10, 10, 10, 0.7);
  display: flex;
  flex-wrap: wrap;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 12px;
  align-items: center;
  transition: all 0.25s;
  position: fixed;
  z-index: 1;
}

nav a {
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 1.8em;
  margin-left: 20px;
  height: 100%;
}

nav .onglets button {
  align-items: center;
  border: 4;
  border-radius: 30px;
  border-color: #bf99a5;
  border-style: solid;
  background: transparent;
  color: white;
  position: relative;
  padding: 4px 25px;
  margin-right: 20px;
  cursor: pointer;
  font-family: "Baloo 2", cursive;
  font-size: 1em;
  transition: all 0.4s;
  transition-property: background;
}

nav .onglets button:hover {
  background: #bf99a5;
}

nav .onglets button:active {
  background: #997983;
  border-color: #997983;
  transition: all 0.15s;
}

@media all and (max-width: 851px) {
  nav .onglets button {
    border: 3;
    border-radius: 25px;
    padding: 3px 18px;
    margin-right: 8px;
    cursor: pointer;
    font-family: "Baloo 2", cursive;
    font-size: 0.9em;
    transition: all 0.4s;
    transition-property: background;
  }

  nav a {
    font-size: 1.6em;
    margin-left: 8px;
  }
}
</style>
