<template>
  <div class="container">
    <div class="base_container content_page" ref="content_page">
      <div class="content">
        <h1 class="title" ref="h1">Contact me</h1>
        <h2 class="text" ref="h2">
          To contact me, make a suggestion, or ask me a question, send an email
          to
          <a
            class="link"
            href="mailto:swiftyassistant.io@gmail.com"
          >swiftyassistant.io@gmail.com</a>
          , thanks.
        </h2>
      </div>

      <div class="line" ref="line"></div>

      <div class="content">
        <h1 class="title" ref="h01">For recruiters</h1>
        <h2 class="text" ref="h02">
          Passionate about new technologies for a long time, it's been now four
          years that I learned and practiced programming on my own. Patient,
          autonomous and creative, I learned several programming languages such
          as C++, Java and more recently HTML, CSS and JavaScript.
        </h2>
        <h2
          class="text"
          ref="h03"
        >If you are interested, you can visit my LinkedIn profil below:</h2>
        <div>
          <button
            ref="btn_linkedin"
            class="btn"
            @click="open('https://www.linkedin.com/in/nantsa-montillet/')"
          >LinkedIn profil</button>
        </div>
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
    const btn_linkedin = ref("btn_linkedin");
    const line = ref("line");
    const content_page = ref("content_page");

    let anim = null;

    onMounted(() => {
      anim = gsap
        .timeline()
        .from(
          content_page.value,
          { duration: 0.3, opacity: 0, ease: "power2.out" },
          0.2
        )
        .from(
          h1.value,
          { duration: 0.8, y: -20, opacity: 0, ease: "power2.out" },
          0.2
        )
        .from(
          h2.value,
          { duration: 0.8, y: 20, opacity: 0, ease: "power2.out" },
          0.6
        )
        .from(
          h01.value,
          { duration: 0.8, y: -20, opacity: 0, ease: "power2.out" },
          1
        )
        .from(
          h02.value,
          { duration: 0.8, y: -20, opacity: 0, ease: "power2.out" },
          1.4
        )
        .from(
          h03.value,
          { duration: 0.8, y: 20, opacity: 0, ease: "power2.out" },
          1.8
        )
        .from(
          btn_linkedin.value,
          { duration: 0.8, y: 20, opacity: 0, ease: "power2.out" },
          2.2
        )
        .from(line.value, { duration: 0.8, scale: 0, opacity: 0, ease: "power2.out" }, 0.8);
    });

    return {
      h1,
      h2,
      h01,
      h02,
      h03,
      btn_linkedin,
      line,
      content_page,
      anim,
    };
  },
  methods: {
    open(link) {
      location.href = link;
    },
  },
};
</script>

<style scoped>
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

@media all and (orientation: portrait) {
  .content_page .content {
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
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
  .content_page h2 {
    font-size: 17px;
  }
}

@media all and (max-height: 800px) and (max-width: 1100px) and (orientation: landscape) {
  .content_page h2 {
    font-size: 17px;
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
}
</style>
