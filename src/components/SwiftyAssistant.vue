<template>
  <div class="containeur">
    <div class="content_page" ref="content_page">
      <div class="content">
        <img class="icon_swifty" ref="icon_swifty" src="../assets/swifty.png" />
        <h1 class="h1" ref="h1">Swifty Assistant</h1>
        <h2 id="h2" ref="h2">
          A simple, user-friendly, personal assistant based on an extension
          system
        </h2>
        <h2 id="h3" ref="h3">
          Swifty is created to be useful to both beginners and computer experts!
          It works offline and does not collect any personal data! If you like
          Swifty Assistant and you find it useful, please feel free to
          contribute to the project, thank you.
        </h2>
      </div>

      <div class="line" ref="line"></div>

      <div class="content">
        <button
          id="btn_download"
          ref="btn_download"
          class="btn_download"
          @click="
            download(
              'https://github.com/Swiftapp-hub/Swifty-Assistant/releases/download/v1.0.0-alpha3/SwiftyAssistant-OnLine-Installer.run'
            )
          "
        >
          Download v1.0.0-alpha3 Linux
        </button>
        <button
          id="btn_github_project"
          ref="btn_github_project"
          class="btn_github_project"
          @click="open('https://github.com/Swiftapp-hub/Swifty-Assistant')"
        >
          <img src="../assets/github-brands.svg" />
        </button>
      </div>
    </div>

    <div class="margin"></div>

    <Teleport to="body">
      <DialogVue :show="showDialog" @close="showDialog = false">
        <template #header>
          <h2>Swifty Assistant is downloading</h2>
        </template>
        <template #body>
          <h3>
            Once Swifty Assistant is downloaded, make it executable then double
            click on it to start the installation
          </h3>
        </template>
      </DialogVue>
    </Teleport>
  </div>
</template>

<script>
import gsap from "gsap";
import { onMounted, ref } from "@vue/runtime-core";
import DialogVue from "./DialogVue.vue";

export default {
  name: "SwiftyAssistant",
  components: {
    DialogVue,
  },
  data() {
    return {
      showDialog: false,
    };
  },
  setup() {
    const icon_swifty = ref("icon_swifty");
    const h1 = ref("h1");
    const h2 = ref("h2");
    const h3 = ref("h3");
    const btn_download = ref("btn_download");
    const btn_github_project = ref("btn_github_project");
    const line = ref("line");
    const content_page = ref("content_page");

    let anim = null;

    onMounted(() => {
      anim = gsap
        .timeline()
        .from(
          content_page.value,
          { duration: 0.2, opacity: 0, ease: "power2.out" },
          0.2
        )
        .from(
          icon_swifty.value,
          { duration: 0.8, y: -20, opacity: 0, ease: "power2.out" },
          0.2
        )
        .from(
          h1.value,
          { duration: 0.8, y: -20, opacity: 0, ease: "power2.out" },
          0.6
        )
        .from(
          h2.value,
          { duration: 0.8, y: -20, opacity: 0, ease: "power2.out" },
          1
        )
        .from(
          h3.value,
          { duration: 0.8, y: -20, opacity: 0, ease: "power2.out" },
          1.4
        )
        .from(
          btn_download.value,
          { duration: 1.8, x: -300, opacity: 0, ease: "power2.out" },
          0.4
        )
        .from(
          btn_github_project.value,
          { duration: 1.8, x: 300, opacity: 0, ease: "power2.out" },
          0.8
        )
        .from(
          line.value,
          { duration: 0.8, scale: 0, opacity: 0, ease: "power2.out" },
          1.8
        );
    });

    return {
      icon_swifty,
      h1,
      h2,
      h3,
      btn_download,
      btn_github_project,
      line,
      content_page,
      anim,
    };
  },
  methods: {
    download(link) {
      location.href = link;
      this.showDialog = true;
    },
    open(link) {
      window.open(link);
    },
  },
};
</script>

<style scoped>
.content_page {
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

.content_page .icon_swifty {
  height: 100px;
}

.content_page h1 {
  color: rgb(240, 240, 240);
  font-family: "Raleway", sans-serif;
  font-size: 45px;
}

.content_page h2 {
  color: rgb(240, 240, 240);
  font-family: "Raleway", sans-serif;
  font-size: 20px;
}

.content_page .content {
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 47%;
}

.content_page .line {
  border-left: 2px solid rgb(139, 139, 139);
  height: 80%;
  margin-right: 40px;
  margin-left: 40px;
}

.content_page .btn_download {
  background: transparent;
  border: 0px;
  color: black;
  padding: 20px 50px;
  margin-bottom: 40px;
  font-size: 30px;
  font-family: "Baloo 2", cursive;
  cursor: pointer;
  position: relative;
  transition: all 0.4s;
  transition-property: box-shadow;
  overflow: hidden;
  border-radius: 60px;
}

.content_page .btn_download::after {
  content: "";
  width: 700px;
  height: 700px;
  position: absolute;
  top: -90px;
  left: -100px;
  background-image: linear-gradient(
    225deg,
    #ffc9b3 0%,
    #aa89a0 50%,
    #2a2a84 100%
  );
  z-index: -1;
  transition: all 0.5s;
}

.content_page .btn_download:hover::after {
  transform: rotate(150deg);
}

.content_page .btn_download:hover {
  box-shadow: 10px -10px 25px 0px #2a2a8493, -10px 10px 25px 0px #aa89a0af;
}

.content_page .btn_download:active {
  box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  transition: all 0.1s;
}

.content_page .btn_github_project {
  background: transparent;
  border: 0px;
  padding: 20px 60px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  transition-property: box-shadow;
  overflow: hidden;
  border-radius: 60px;
}

.content_page .btn_github_project img {
  height: 44px;
}

.content_page .btn_github_project::after {
  content: "";
  width: 500px;
  height: 500px;
  position: absolute;
  top: -60px;
  left: -80px;
  background-image: linear-gradient(
    225deg,
    #ffc9b3 0%,
    #aa89a0 50%,
    #2a2a84 100%
  );
  z-index: -1;
  transition: all 0.5s;
}

.content_page .btn_github_project:hover::after {
  transform: rotate(150deg);
}

.content_page .btn_github_project:hover {
  box-shadow: 10px -10px 25px 0px #2a2a8493, -10px 10px 25px 0px #aa89a0af;
}

.content_page .btn_github_project:active {
  box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  transition: all 0.1s;
}

@media all and (orientation: portrait) {
  .content_page {
    flex-direction: column;
    left: 8%;
    right: 8%;
    padding: 3%;
    box-shadow: 0px 0px 25px 10px rgba(7, 7, 7, 0.534);
  }

  .content_page .content {
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .content_page .btn_download {
    margin-top: 30px;
  }

  .background {
    width: 200%;
  }

  .content_page .line {
    border-top: 2px solid rgb(139, 139, 139);
    border-left: 0px solid rgb(139, 139, 139);
    margin-top: 20px;
    margin-bottom: 10px;
    height: 0%;
    width: 80%;
  }
}

@media all and (max-width: 851px) {
  .content_page h1 {
    font-size: 42px;
  }

  .content_page h2 {
    font-size: 17px;
  }

  .content_page .icon_swifty {
    height: 80px;
    margin-top: 10px;
  }

  .content_page .btn_download {
    margin-bottom: 28px;
    font-size: 23px;
    font-family: "Baloo 2", cursive;
    border-radius: 30px;
    padding: 6px 12px;
  }

  .content_page .btn_download:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  .content_page .btn_github_project {
    padding: 6px 25px;
    border-radius: 30px;
  }

  .content_page .btn_github_project:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  .content_page .btn_github_project img {
    height: 32px;
  }
}

@media all and (max-height: 800px) and (max-width: 1100px) and (orientation: landscape) {
  .content_page h1 {
    font-size: 40px;
  }

  .content_page h2 {
    font-size: 17px;
  }

  .content_page .icon_swifty {
    height: 70px;
    margin-top: 10px;
  }

  .content_page .btn_download {
    margin-bottom: 28px;
    font-size: 23px;
    font-family: "Baloo 2", cursive;
    border-radius: 30px;
    padding: 10px 12px;
  }

  .content_page .btn_download:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  .content_page .btn_github_project {
    padding: 10px 25px;
    border-radius: 30px;
  }

  .content_page .btn_github_project:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  .content_page .btn_github_project img {
    height: 32px;
  }
}

@media all and (max-height: 650px) and (orientation: landscape) {
  .content_page {
    position: unset;
    bottom: unset;
  }

  .containeur {
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

  .containeur .margin {
    height: 30px;
  }

  .content_page .line {
    height: 300px;
  }
}

@media all and (max-height: 850px) and (orientation: portrait) {
  .content_page {
    position: unset;
    bottom: unset;
    justify-content: center;
  }

  .containeur {
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

  .containeur .margin {
    height: 30px;
  }

  .content_page .btn_github_project {
    margin-bottom: 10px;
  }
}
</style>
