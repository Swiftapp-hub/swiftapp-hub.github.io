<template>
  <div class="main">
    <div class="bg_home" ref="bg_home"></div>

    <div class="home_sec">
      <div class="text_main">
        <h1 class="title" ref="n">Nantsa</h1>
        <h1 class="title" ref="m">Montillet</h1>
      </div>
      <div class="content_main" ref="container">
        <p class="text" ref="text_main">
          I have been passionate about programming for years, I learned several programming
          languages like C++, HTML, CSS and JavaScript. My main project at the moment is
          <span
            translate="no"
          >
            Swifty
            Assistant
          </span>, an open source personal assistant programmed in C++ with Qt. I am looking
          for a company to do an apprenticeship with, so if you are interested in my profile
          feel free to throw take a look at the Contact page.
        </p>
        <button
          ref="btn_view_github"
          class="btn btn_view_github"
          @click="open('https://github.com/Swiftapp-hub')"
        >Visit my GitHub</button>
      </div>
      <div class="container_scroll">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="text">Scroll down</span>
      </div>
    </div>
    <div class="projects_sec">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <h1 class="title title_projects" ref="title_projects">My projects:</h1>
      <div class="sw_assist" ref="sw_assist" @click="changePage('SwiftyAssistant')">
        <img src="../assets/swifty.png" alt="Swifty Assistant icon" />
        <h2>Swifty Assistant</h2>
        <p
          class="main_text"
        >A simple, user-friendly, personal assistant based on an extension system</p>
        <div class="line"></div>
        <p class="language">Language: C++</p>
      </div>
    </div>
    <div class="footer_sec">
      <p class="text">Copyright © 2022 Nantsa Montillet.</p>
      <p class="text">
        This site is open source,
        <a
          class="link"
          href="https://github.com/Swiftapp-hub/swiftapp-hub.github.io"
        >contribute to the improvement of the site</a>
      </p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  name: 'HomePage',
  emits: ["changePageSignal"],
  setup() {
    const bg_home = ref("bg_home");
    const container = ref("container");
    const n = ref("n");
    const m = ref("m");
    const text_main = ref("text_main");
    const btn_view_github = ref("btn_view_github");
    const title_projects = ref("title_projects");
    const sw_assist = ref("sw_assist");

    let anim = null;

    onMounted(() => {
      anim = gsap
        .timeline()
        .from(
          bg_home.value,
          { duration: 0.3, opacity: 0, ease: "power2.out" },
          0.1
        )
        .from(
          container.value,
          { duration: 0.8, opacity: 0, ease: "power2.out" },
          0.5
        )
        .from(
          n.value,
          { duration: 1, x: -100, opacity: 0, ease: "power2.out" },
          0.2
        )
        .from(
          m.value,
          { duration: 1, x: 100, opacity: 0, ease: "power2.out" },
          0.2
        )
        .from(
          text_main.value,
          { duration: 1, x: -100, opacity: 0, ease: "power2.out" },
          0.8
        )
        .from(
          btn_view_github.value,
          { duration: 1, x: 100, opacity: 0, ease: "power2.out" },
          0.8
        )
    });

    return {
      bg_home,
      container,
      anim,
      n,
      m,
      text_main,
      btn_view_github,
      title_projects,
      sw_assist,
    };
  },
  // handle scroll
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.bg_home.style.transform = `translateY(-${window.scrollY / 2}px)`;

      if (window.scrollY > window.innerHeight / 1.5) {
        this.title_projects.classList.add("active");
        this.sw_assist.classList.add("active");
      }
      else {
        this.title_projects.classList.remove("active");
        this.sw_assist.classList.remove("active");
      }
    },
    open(link) {
      window.open(link);
    },
    changePage(page) {
      this.$emit("changePageSignal", page);
    },
  },
}
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bg_home {
  position: fixed;
  background: url(../../public/bg_home.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.home_sec {
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text_main {
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
}

.text_main h1 {
  font-size: 4em;
  color: black;
  padding: 8px;
}

.home_sec .content_main {
  width: 50%;
  display: flex;
  flex-direction: row;
  background: rgba(7, 7, 7, 0.664);
  box-shadow: 0px 0px 35px 18px rgba(7, 7, 7, 0.534);
  padding: 5%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.home_sec .content_main p {
  width: 47%;
  margin-right: 10%;
}

.container_scroll {
  position: fixed;
  z-index: -1;
  bottom: 80px;
  width: 24px;
  height: 24px;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: rgba(17, 17, 17, 0.555);
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.container_scroll .text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: rgb(39, 39, 39);
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}

.projects_sec {
  z-index: 3;
  width: 100%;
  height: 100%;
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  box-shadow: 0px 5px 20px rgba(7, 7, 7, 0.7);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.circles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.projects_sec .title_projects {
  z-index: 20;
  font-size: 4em;
  padding: 8px;
  margin-right: 100px;
  opacity: 0;
  transform: translateY(200px);
  transition: all 0.8s ease;
}

.projects_sec .title_projects.active {
  opacity: 1;
  transform: translateY(0);
}

.projects_sec .sw_assist {
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  width: 250px;
  border-radius: 20px;
  background: rgb(5, 5, 5);
  transition: all 0.5s ease;
  box-shadow: 0px 0px 15px 4px rgba(7, 7, 7, 0.534);
  cursor: pointer;
  opacity: 0;
  transform: translateY(200px);
}

.projects_sec .sw_assist.active {
  opacity: 1;
  transform: translateY(0);
}

.projects_sec .sw_assist:hover {
  background: #8979e6be;
  box-shadow: 0px 0px 35px 18px rgba(7, 7, 7, 0.534);
}

.projects_sec .sw_assist:active {
  background: #8979e6a4;
  box-shadow: 0px 0px 20px 10px rgba(7, 7, 7, 0.534);
  transition: all 0.1s;
}

.projects_sec .sw_assist h2 {
  font-size: 2em;
  color: white;
  font-family: "Baloo 2", cursive;
  margin: 0;
  margin-bottom: 5px;
  margin-top: 16px;
}

.projects_sec .sw_assist .line {
  margin-top: 15px;
  height: 1px;
  width: 50%;
  background: white;
}

.projects_sec .sw_assist p {
  font-size: 1em;
  color: white;
  font-family: "Baloo 2", cursive;
  margin: 0;
  margin-top: 15px;
}

.projects_sec .sw_assist img {
  height: 100px;
}

.footer_sec {
  z-index: 2;
  right: 0;
  left: 0;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(49, 49, 49);
  align-items: center;
  text-align: center;
  padding: 0;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0;
}

.footer_sec p {
  padding: 0;
  font-size: 1em;
  margin: 0;
}

@media all and (orientation: portrait) {
  .container_scroll,
  .container_scroll .text,
  .chevron {
    display: none;
    opacity: 0;
  }

  .home_sec .content_main {
    flex-direction: column;
    box-shadow: 0px 0px 20px 10px rgba(7, 7, 7, 0.534);
  }

  .home_sec .content_main p {
    width: auto;
    margin: 0;
  }

  .text_main {
    margin-bottom: 0;
  }
}

@media all and (max-width: 1250px) {
  .home_sec .content_main {
    width: 70%;
  }

  .text_main h1 {
    font-size: 3em;
  }

  .btn_view_github {
    margin-bottom: 0;
  }
}

@media all and (max-height: 900px) and (orientation: landscape) {
  .home_sec {
    justify-content: flex-start;
  }

  .text_main {
    margin-bottom: 0;
    margin-top: 40px;
  }
}

@media all and (max-height: 800px) and (orientation: landscape) {
  .text_main {
    margin-bottom: 0;
    margin-top: 30px;
  }

  .text_main h1 {
    font-size: 3em;
  }

  .home_sec .content_main {
    width: 70%;
    padding: 25px;
  }
}

@media all and (max-height: 570px) and (orientation: landscape) {
  .container_scroll,
  .container_scroll .text,
  .chevron {
    display: none;
    opacity: 0;
  }

  .home_sec .content_main {
    width: 80%;
  }
}

@media all and (max-height: 520px) and (orientation: portrait) {
  .text_main h1 {
    font-size: 2.5em;
    padding: 5px;
  }

  .home_sec .content_main p {
    font-size: 15px;
  }
}

@media all and (max-width: 900px) {
  .projects_sec .title_projects {
    font-size: 2.8em;
  }
}

@media all and (max-width: 700px) {
  .footer_sec p {
    font-size: 0.8em;
  }
}

@media all and (max-width: 750px) {
  .projects_sec .title_projects {
    font-size: 3em;
    margin: 20px;
    margin-bottom: 50px;
  }

  .projects_sec {
    flex-direction: column;
  }

  .projects_sec .sw_assist {
    width: 200px;
  }
}

@media all and (max-height: 700px) and (orientation: portrait) {
  .projects_sec .sw_assist {
    height: 40%;
  }

  .projects_sec .sw_assist img {
    height: 50px;
  }

  .projects_sec .sw_assist h2 {
    font-size: 1.5em;
  }

  .projects_sec .sw_assist:hover {
    box-shadow: 0px 0px 20px 10px rgba(7, 7, 7, 0.534);
  }
}
</style>
