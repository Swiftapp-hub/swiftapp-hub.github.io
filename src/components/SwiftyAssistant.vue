<template>
  <div>
    <div class="bg_swifty" ref="bg_swifty"></div>

    <div class="container">
      <div class="base_container content_page" ref="content_page">
        <div class="content">
          <img
            class="icon_swifty"
            ref="icon_swifty"
            alt="Icon swifty assistant"
            src="../assets/swifty.png"
          />
          <h1 class="title" ref="h1">
            <span translate="no">Swifty Assistant</span>
          </h1>
          <h2 class="text" ref="h2">
            A simple, user-friendly, personal assistant based on an extension
            system
          </h2>
          <h2 class="text" ref="h3">
            <span translate="no">Swifty</span> is created to be useful to both beginners and computer experts!
            It works offline and does not collect any personal data! If you like
            <span
              translate="no"
            >Swifty Assistant</span> and you find it useful, please feel free to
            contribute to the project, thank you.
          </h2>
          <button
            ref="btn_screenshot"
            class="btn_screenshot"
            @click="
            showDialogScreenshot()
          "
          >Screenshot</button>
        </div>

        <div class="line" ref="line"></div>

        <div class="content">
          <button
            ref="btn_download"
            class="btn btn_swifty btn_download"
            @click="
            download(
              'https://github.com/Swiftapp-hub/Swifty-Assistant/releases/download/v1.0.0-alpha3/SwiftyAssistant-OnLine-Installer.run'
            )
          "
          >Download v1.0.0-alpha3 Linux</button>
          <button
            ref="btn_plugins"
            class="btn btn_swifty btn_plugins"
            @click="
            showDialogPlugins()
          "
          >Download plugins</button>
          <button
            ref="btn_github_project"
            class="btn btn_swifty btn_github_project"
            @click="open('https://github.com/Swiftapp-hub/Swifty-Assistant')"
          >
            <img src="../assets/github-brands.png" alt="GitHub repository" />
          </button>
        </div>
      </div>

      <div class="margin"></div>

      <Teleport to="body">
        <DialogVue :show="showDialog" @close="showDialog = false">
          <template #header>
            <h2 class="text">Swifty Assistant is downloading</h2>
          </template>
          <template #body>
            <h3 class="text">
              Once Swifty Assistant is downloaded, make it executable then double
              click on it to start the installation
            </h3>
          </template>
        </DialogVue>
      </Teleport>

      <Teleport to="body">
        <DialogVue :show="showPlugins" @close="closeDialog()">
          <template #header>
            <h2 class="text">Swifty Assistant plugins</h2>
          </template>
          <template #body>
            <div>
              <a
                class="link"
                href="https://github.com/Swiftapp-hub/HelloWorld-Plugin-Swifty-Assistant"
                target="_blank"
              >Hello World</a>
              <a
                class="link"
                href="https://github.com/Swiftapp-hub/ControlSettings-Plugin-Swifty-Assistant"
                target="_blank"
              >Control Settings</a>
              <a
                class="link"
                href="https://github.com/Swiftapp-hub/WebSearch-Plugin-Swifty-Assistant"
                target="_blank"
              >Web Search</a>
            </div>
          </template>
        </DialogVue>
      </Teleport>

      <Teleport to="body">
        <DialogScreenshots :show="showScreenshot" @close="closeDialog()">
          <template #header>
            <h2>Screenshot</h2>
          </template>
          <template #body>
            <div>
              <img
                alt="Screenshot swifty assistant home page"
                title="Home page"
                src="https://raw.githubusercontent.com/Swiftapp-hub/Swifty-Assistant/master/screenshot/swifty.png"
              />
              <img
                alt="Screenshot swifty assistant settings page"
                title="Settings page"
                src="https://raw.githubusercontent.com/Swiftapp-hub/Swifty-Assistant/master/screenshot/swifty1.png"
              />
            </div>
          </template>
        </DialogScreenshots>
      </Teleport>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { onMounted, ref } from "@vue/runtime-core";
import DialogVue from "./DialogVue.vue";
import DialogScreenshots from "./DialogScreenshots.vue";

export default {
  name: "SwiftyAssistant",
  components: {
    DialogVue,
    DialogScreenshots
  },
  data() {
    return {
      showDialog: false,
      showPlugins: false,
      showScreenshot: false,
    };
  },
  setup() {
    const bg_swifty = ref("bg_swifty");
    const icon_swifty = ref("icon_swifty");
    const h1 = ref("h1");
    const h2 = ref("h2");
    const h3 = ref("h3");
    const btn_screenshot = ref("btn_screenshot");
    const btn_download = ref("btn_download");
    const btn_plugins = ref("btn_plugins");
    const btn_github_project = ref("btn_github_project");
    const line = ref("line");
    const content_page = ref("content_page");

    let anim = null;

    onMounted(() => {
      anim = gsap
        .timeline()
        .from(
          bg_swifty.value,
          { duration: 0.3, opacity: 0, ease: "power2.out" },
          0.1
        )
        .from(
          content_page.value,
          { duration: 0.3, opacity: 0, ease: "power2.out" },
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
          btn_screenshot.value,
          { duration: 0.8, y: 20, opacity: 0, ease: "power2.out" },
          1.8
        )
        .from(
          btn_download.value,
          { duration: 1.8, x: -60, opacity: 0, ease: "power2.out" },
          0.4
        )
        .from(
          btn_plugins.value,
          { duration: 1.8, x: 60, opacity: 0, ease: "power2.out" },
          0.8
        )
        .from(
          btn_github_project.value,
          { duration: 1.8, x: -60, opacity: 0, ease: "power2.out" },
          1.2
        )
        .from(
          line.value,
          { duration: 0.8, scale: 0, opacity: 0, ease: "power2.out" },
          1.8
        );
    });

    return {
      bg_swifty,
      icon_swifty,
      h1,
      h2,
      h3,
      btn_screenshot,
      btn_download,
      btn_plugins,
      btn_github_project,
      line,
      content_page,
      anim,
    };
  },
  created() {
    var updated = false;

    this.$watch(
      () => this.$route.query,
      (toParams) => {
        if (toParams.d !== undefined) {
          this.updateDialog(toParams);
          updated = true;
        }
      }
    );

    if (!updated) {
      this.updateDialog(this.$route.query);
    }

    document.title = "Swiftapp - Swifty Assistant";
  },
  methods: {
    showDialogScreenshot() {
      this.$router.replace({ path: "/swifty-assistant", query: { d: "1" } });
    },
    showDialogPlugins() {
      this.$router.replace({ path: "/swifty-assistant", query: { d: "2" } });
    },
    closeDialog() {
      this.$router.replace({ path: "/swifty-assistant", query: { d: "0" } });
    },
    updateDialog(toParams) {
      if (toParams.d === "1") {
        this.showScreenshot = true;
        this.showPlugins = false;
      }
      else if (toParams.d === "2") {
        this.showPlugins = true;
        this.showScreenshot = false;
      }
      else {
        this.$router.replace({ path: "/swifty-assistant" });
        this.showPlugins = false;
        this.showScreenshot = false;
      }
    },
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
.bg_swifty {
  background-color: rgba(21, 16, 25, 0.945);
  background-image: url("../assets/bg_swifty.svg");
  position: fixed;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.content_page .icon_swifty {
  height: 100px;
}

.content_page .content {
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 47%;
}

.btn_screenshot {
  align-items: center;
  border: 4;
  border-radius: 30px;
  border-color: #bf99a5;
  border-style: solid;
  background: transparent;
  color: white;
  position: relative;
  padding: 4px 25px;
  cursor: pointer;
  font-family: "Baloo 2", cursive;
  font-size: 1em;
  transition: all 0.4s;
  transition-property: background;
}

.btn_screenshot:hover {
  background: #bf99a5;
}

.btn_screenshot:active {
  background: #997983;
  border-color: #997983;
  transition: all 0.15s;
}

.content_page .line {
  border-left: 2px solid rgb(139, 139, 139);
  height: 80%;
  margin-right: 40px;
  margin-left: 40px;
}

.content_page .btn_swifty::after {
  background-image: linear-gradient(
    225deg,
    #ffc9b3 0%,
    #aa89a0 50%,
    #2a2a84 100%
  );
}

.content_page .btn_swifty:hover {
  box-shadow: 10px -10px 25px 0px #2a2a8493, -10px 10px 25px 0px #aa89a0af;
}

.content_page .btn_swifty:active {
  box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
}

.content_page .btn_github_project {
  font-size: 0;
}

.content_page .btn_github_project img {
  height: 50px;
}

@media all and (orientation: portrait) {
  .content_page .content {
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .content_page .btn_swifty {
    margin-top: 0;
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
  .content_page .icon_swifty {
    height: 80px;
    margin-top: 10px;
  }

  .content_page .btn_swifty {
    margin-bottom: 28px;
    font-size: 23px;
    font-family: "Baloo 2", cursive;
    border-radius: 30px;
    padding: 6px 12px;
  }

  .content_page .btn_swifty:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  .content_page .btn_github_project {
    padding: 6px 25px;
    font-size: 0;
  }

  .content_page .btn_github_project img {
    height: 32px;
  }
}

@media all and (max-height: 800px) and (max-width: 1100px) and (orientation: landscape) {
  .content_page .icon_swifty {
    height: 70px;
    margin-top: 10px;
  }

  .content_page .btn_swifty {
    margin-bottom: 28px;
    font-size: 23px;
    font-family: "Baloo 2", cursive;
    border-radius: 30px;
    padding: 10px 12px;
  }

  .content_page .btn_swifty:hover {
    box-shadow: 5px -5px 20px 0px #2a2a846e, -5px 5px 20px 0px #aa89a081;
  }

  .content_page .btn_github_project {
    padding: 10px 25px;
    font-size: 0;
  }

  .content_page .btn_github_project img {
    height: 32px;
  }
}

@media all and (max-height: 660px) and (orientation: landscape) {
  .container .margin {
    height: 30px;
  }

  .content_page .line {
    height: 300px;
  }
}

@media all and (max-height: 930px) and (orientation: portrait) {
  .container .margin {
    height: 30px;
  }

  .content_page .btn_github_project {
    margin-bottom: 10px;
  }
}
</style>
