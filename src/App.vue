<template>
  <header>
    <nav ref="nav_bar">
      <a ref="logo" href="" title="Home"><span translate="no">Swiftapp</span></a>

      <div class="spacer"></div>

      <div class="tabs">
        <div class="tab_item" ref="btn_home">
          <input type="radio" ref="home" id="tab1" name="tab-control" checked />
          <label for="tab1" @click="changePage('HomePage')">
            <img src="../src/assets/home.png" alt="Home" />
            <div class="text">Home</div>
          </label>
        </div>
        <div class="tab_item" ref="btn_swifty">
          <input type="radio" ref="swifty" id="tab2" name="tab-control" />
          <label for="tab2" @click="changePage('SwiftyAssistant')">
            <img src="../src/assets/smile.png" alt="Swifty" />
            <div class="text"><span translate="no">Swifty</span></div>
          </label>
        </div>
        <div class="tab_item" ref="btn_contact">
          <input type="radio" ref="contact" id="tab3" name="tab-control" />
          <label for="tab3" @click="changePage('ContactPage')">
            <img src="../src/assets/contact.png" alt="Contact" />
            <div class="text">Contact</div>
          </label>
        </div>
      </div>

      <div class="spacer2"></div>

      <div class="onglets">
        <button ref="btn_github" @click="open('https://github.com/Swiftapp-hub')">
          <div>GitHub</div>
          <img src="../src/assets/github-brands.png" alt="GitHub profile" />
        </button>
      </div>
    </nav>
  </header>

  <transition name="component-fade" mode="out-in">
    <component v-bind:is="currentPage" @changePageSignal="changePage"></component>
  </transition>
</template>

<script>
import SwiftyAssistant from "./components/SwiftyAssistant.vue";
import HomePage from "./components/HomePage.vue";
import ContactPage from "./components/ContactPage.vue";
import gsap from "gsap";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  name: "App",
  components: {
    SwiftyAssistant,
    HomePage,
    ContactPage,
  },
  data() {
    return {
      currentPage: "HomePage",
    };
  },
  setup() {
    const logo = ref("logo");
    const btn_github = ref("btn_github");
    const nav_bar = ref("nav_bar");
    const btn_home = ref("btn_home");
    const btn_swifty = ref("btn_swifty");
    const btn_contact = ref("btn_contact");

    const home = ref("home");
    const swifty = ref("swifty");
    const contact = ref("contact");

    let anim = null;

    onMounted(() => {
      anim = gsap
        .timeline()
        .from(
          logo.value,
          { duration: 1, y: -100, opacity: 0, ease: "power2.out" },
          0.1
        )
        .from(
          btn_home.value,
          { duration: 1, y: -100, opacity: 0, ease: "power2.out" },
          0.4
        )
        .from(
          btn_swifty.value,
          { duration: 1, y: -100, opacity: 0, ease: "power2.out" },
          0.7
        )
        .from(
          btn_contact.value,
          { duration: 1, y: -100, opacity: 0, ease: "power2.out" },
          1
        )
        .from(
          btn_github.value,
          { duration: 1, y: -100, opacity: 0, ease: "power2.out" },
          1.2
        );
    });

    return {
      logo,
      btn_github,
      btn_home,
      btn_swifty,
      btn_contact,
      anim,
      nav_bar,
      home,
      swifty,
      contact,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 35 && this.currentPage !== "HomePage") {
        this.nav_bar.style.backgroundColor = "#050505";
        this.nav_bar.style.boxShadow = "0px 5px 15px 0px rgba(7, 7, 7, 0.7)";
      }
      else if (window.scrollY > window.innerHeight-70 && this.currentPage === "HomePage") {
        this.nav_bar.style.backgroundColor = "#050505";
        this.nav_bar.style.boxShadow = "0px 5px 15px 0px rgba(7, 7, 7, 0.7)";
      }
      else {
        this.nav_bar.style.backgroundColor = "rgba(10, 10, 10, 0.700)";
        this.nav_bar.style.boxShadow = "0px 0px 0px 0px rgba(7, 7, 7, 0.534)";
      }
    },
    changePage(page) {
      this.currentPage = page;
      // change radio button checked
      if (page === "HomePage") {
        this.home.checked = true;
      }
      else if (page === "SwiftyAssistant") {
        this.swifty.checked = true;
      }
      else if (page === "ContactPage") {
        this.contact.checked = true;
      }
    },
    open(link) {
      window.open(link);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.home.checked = true;
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

nav .tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 2px;
}

nav .tabs img {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

nav .onglets img {
  display: none;
  height: 20px;
}

nav .onglets button {
  display: block;
}

nav .tabs input {
  display: none;
}
nav .tabs .tab_item {
  justify-content: center;
  align-items: center;
  text-align: center;
}

nav .tabs .tab_item label {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 10px;
  transition: all 0.3s;
  transition-property: background;
  border-radius: 30px;
}

nav .tabs .tab_item label:hover {
  background: #8979e654;
}

nav .tabs .tab_item input:checked + label {
  background: #8979e6;
}

nav .tabs .text {
  font-size: 1.2em;
  font-family: "Baloo 2", cursive;
  color: rgb(255, 255, 255);
}

nav {
  background: rgba(10, 10, 10, 0.7);
  display: flex;
  flex-wrap: wrap;
  left: 0;
  right: 0;
  padding: 12px;
  justify-content: space-between;
  transition: all 0.25s;
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

nav a {
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 1.8em;
  margin-left: 20px;
  height: 100%;
  color: #8979e6;
}

nav .onglets button {
  align-items: center;
  border: 4;
  border-radius: 30px;
  border-color: #8979e6;
  border-style: solid;
  background: transparent;
  color: white;
  position: relative;
  padding: 2px 20px;
  margin-right: 20px;
  cursor: pointer;
  font-family: "Baloo 2", cursive;
  font-size: 1em;
  transition: all 0.3s;
  transition-property: background;
}

nav .onglets button:hover {
  background: #8979e6;
}

nav .onglets button:active {
  background: #8979e6d3;
  border-color: #8979e6d3;
  transition: all 0.15s;
}

@media all and (max-width: 851px) {
  nav .onglets button {
    border: 3;
    border-radius: 25px;
    padding: 2px 18px;
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

  nav .tabs .text {
    font-size: 1.1em;
  }

  nav .tabs .tab_item label {
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 5px;
  }

  nav .tabs {
    margin-left: 10px;
  }

  nav .tabs img {
    display: none;
  }
}

@media all and (max-width: 500px) {
  nav .tabs img {
    display: block;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  nav a {
    margin-top: 4px;
    font-size: 1.2em;
  }

  nav .tabs .text {
    display: none;
  }

  nav .tabs {
    margin-top: 0;
  }

  nav .onglets img {
    display: block;
  }

  nav .onglets button div {
    display: none;
  }

  nav .onglets button {
    border: 2;
    border-radius: 25px;
    padding: 3px 5px;
    margin-right: 8px;
    cursor: pointer;
    font-family: "Baloo 2", cursive;
    font-size: 0.9em;
    transition: all 0.4s;
    transition-property: background;
  }
}

/*************************/
/****** Base styles ******/
/*************************/

/* Button */
.btn {
  background: transparent;
  border: 0px;
  color: rgb(255, 255, 255);
  padding: 20px 50px;
  margin-top: 15px;
  margin-bottom: 40px;
  font-size: 30px;
  font-family: "Baloo 2", cursive;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  transition-property: box-shadow;
  overflow: hidden;
  border-radius: 60px;
}

.btn::after {
  content: "";
  width: 700px;
  height: 700px;
  position: absolute;
  top: -90px;
  left: -100px;
  background-image: linear-gradient(225deg, #d3c080 0%, #8979e6 100%);
  z-index: -1;
  transition: all 0.5s;
}

.btn:hover::after {
  transform: rotate(150deg);
}

.btn:hover {
  box-shadow: 10px -10px 25px 0px #8979e681, -10px 10px 25px 0px #c4ba9a85;
}

.btn:active {
  box-shadow: 5px -5px 20px 0px #8979e681, -5px 5px 20px 0px #c4ba9a85;
  transition: all 0.1s;
}

/* Title */
.title {
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 45px;
}

/* Text */
.text {
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
}

/* Link */
.link{
  color: white;
  font-family: "Raleway", sans-serif;
}

/* Base Container */
.base_container {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 15%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  padding: 2%;
  border-radius: 40px;
  box-shadow: 0px 0px 35px 18px rgba(7, 7, 7, 0.534);
  background: rgba(7, 7, 7, 0.664);
  text-align: center;
  align-items: center;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* Responsive */
@media all and (orientation: portrait) {
  /* Button */
  .btn {
    margin-top: 30px;
  }

  /* Base Container */
  .base_container {
    flex-direction: column;
    left: 8%;
    right: 8%;
    padding: 3%;
    box-shadow: 0px 0px 25px 10px rgba(7, 7, 7, 0.534);
  }
}

@media all and (max-width: 851px) {
  /* Button */
  .btn {
    margin-bottom: 28px;
    font-size: 23px;
    font-family: "Baloo 2", cursive;
    border-radius: 30px;
    padding: 6px 12px;
  }

  .btn:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  /* Title */
  .title {
    font-size: 42px;
  }

  /* Text */
  .text {
    font-size: 17px;
  }
}

@media all and (max-height: 800px) and (max-width: 1100px) and (orientation: landscape) {
  /* Button */
  .btn {
    margin-bottom: 28px;
    font-size: 23px;
    font-family: "Baloo 2", cursive;
    border-radius: 30px;
    padding: 10px 12px;
  }

  .btn:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  /* Title */
  .title {
    font-size: 40px;
  }

  /* Text */
  .text {
    font-size: 17px;
  }
}

@media all and (max-height: 660px) and (orientation: landscape) {
  /* Container */
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 18%;
    left: 8%;
    right: 8%;
    text-align: center;
    align-items: center;
  }

  /* Base Container */
  .base_container {
    position: unset;
    bottom: unset;
  }
}

@media all and (max-height: 930px) and (orientation: portrait) {
  /* Container */
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 15%;
    left: 8%;
    right: 8%;
    text-align: center;
    align-items: center;
  }

  /* Base Container */
  .base_container {
    position: unset;
    bottom: unset;
    justify-content: center;
  }
}
</style>
