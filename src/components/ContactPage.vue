<template>
  <div class="containeur">
    <div class="content_page" ref="content_page">
      <div class="content">
        <h1 class="h1" ref="h1">Contact me</h1>
        <h2 id="h2" ref="h2">
          To contact me, make a suggestion, or ask me a question, send an email
          to
          <a href="mailto:swiftyassistant.io@gmail.com">
            swiftyassistant.io@gmail.com</a
          >
          , thanks.
        </h2>
      </div>

      <div class="line" ref="line"></div>

      <div class="content">
        <h1 class="h01" ref="h01">For recruiters</h1>
        <h2 class="h02" ref="h02">
          Passionate about new technologies for a long time, it's been now four
          years that I learned and practiced programming on my own. Patient,
          autonomous and creative, I learned several programming languages such
          as C++, Java and more recently HTML, CSS and JavaScript.
        </h2>
        <h2 class="h03" ref="h03">
          If you are interested in my profile, you can download my CV below:
        </h2>
        <button
          id="btn_download"
          ref="btn_download"
          class="btn_download"
          @click="download('https://cvdesignr.com/p/6214f6ce3f9c1')"
        >
          Download my CV
        </button>
      </div>
    </div>

    <div class="margin"></div>
  </div>
</template>

<script>
import gsap from "gsap";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  name: "ContactPage",
  setup() {
    const h1 = ref("h1");
    const h2 = ref("h2");
    const h01 = ref("h01");
    const h02 = ref("h02");
    const h03 = ref("h03");
    const btn_download = ref("btn_download");
    const line = ref("line");
    const content_page = ref("content_page");

    let anim = null;

    onMounted(() => {
      anim = gsap
        .timeline()
        .from(
          content_page.value,
          { duration: 0.4, opacity: 0, ease: "power2.out" },
          0.4
        )
        .from(
          h1.value,
          { duration: 1, y: -20, opacity: 0, ease: "power2.out" },
          0.4
        )
        .from(
          h2.value,
          { duration: 1, y: 20, opacity: 0, ease: "power2.out" },
          0.8
        )
        .from(
          h01.value,
          { duration: 1, y: -20, opacity: 0, ease: "power2.out" },
          1.2
        )
        .from(
          h02.value,
          { duration: 1, y: -20, opacity: 0, ease: "power2.out" },
          1.6
        )
        .from(
          h03.value,
          { duration: 1, y: 20, opacity: 0, ease: "power2.out" },
          2
        )
        .from(
          btn_download.value,
          { duration: 1, y: 20, opacity: 0, ease: "power2.out" },
          2.4
        )
        .from(line.value, { duration: 1, scale: 0, opacity: 0, ease: "power2.out" }, 1);
    });

    return {
      h1,
      h2,
      h01,
      h02,
      h03,
      btn_download,
      line,
      content_page,
      anim,
    };
  },
  methods: {
    download(link) {
      open(link);
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

.content_page h2 a {
  color: rgb(240, 240, 240);
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
}

@media all and (max-height: 800px) and (max-width: 1100px) and (orientation: landscape) {
  .content_page h1 {
    font-size: 40px;
  }

  .content_page h2 {
    font-size: 17px;
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
}
</style>
