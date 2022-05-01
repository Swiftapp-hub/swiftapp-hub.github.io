<template>
  <Transition name="modal">
    <div v-if="show" class="dialog-screenshot-mask">
      <div class="dialog-screenshot-wrapper">
        <div class="dialog-screenshot-container">
          <div class="dialog-screenshot-header">
            <slot name="header">default header</slot>
          </div>

          <div class="dialog-screenshot-body">
            <slot name="body">default body</slot>
          </div>

          <div class="dialog-screenshot-footer">
            <button class="dialog-default-button" @click="$emit('close')">Close</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "DialogScreenshots",
  props: {
    show: Boolean,
  },
};
</script>

<style>
.dialog-screenshot-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.288);
  display: table;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.dialog-screenshot-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.dialog-screenshot-container {
  width: 1200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgb(36, 36, 36);
  border-radius: 15px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.548);
  transition: all 0.4s ease;
  text-align: center;
}

.dialog-screenshot-header h2 {
  margin-top: 0;
  color: #42b983;
  font-family: "Raleway", sans-serif;
}

.dialog-screenshot-body div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 5px;
}

.dialog-screenshot-body img {
  width: 40%;
  height: 50%;
  margin-bottom: 5px;
}

@media all and (max-width: 900px) {
  .dialog-screenshot-body div {
    justify-content: left;
    align-items: left;
    overflow-x: auto;
  }
}

@media all and (max-width: 1300px) {
  .dialog-screenshot-container {
    width: 800px;
  }
}

@media all and (max-width: 900px) {
  .dialog-screenshot-container {
    width: 600px;
  }
}

@media all and (max-width: 700px) {
  .dialog-screenshot-container {
    width: 300px;
  }
}

@media all and (max-height: 900px) {
  .dialog-screenshot-body img {
    width: 400px;
  }
}

@media all and (max-height: 700px) {
  .dialog-screenshot-body img {
    width: 300px;
  }
}

@media all and (max-height: 600px) {
  .dialog-screenshot-body img {
    width: 200px;
  }
}

.dialog-body {
  margin: 20px 0;
}

.dialog-default-button {
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

.dialog-default-button:hover {
  background: #bf99a5;
}

.dialog-default-button:active {
  background: #997983;
  border-color: #997983;
  transition: all 0.15s;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>