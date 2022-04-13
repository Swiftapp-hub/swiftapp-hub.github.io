<template>
  <Transition name="modal">
    <div v-if="show" class="dialog-mask">
      <div class="dialog-wrapper">
        <div class="dialog-container">
          <div class="dialog-header">
            <slot name="header">default header</slot>
          </div>

          <div class="dialog-body">
            <slot name="body">default body</slot>
          </div>

          <div class="dialog-footer">
            <button class="dialog-default-button" @click="$emit('close')">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "DialogVue",
  props: {
    show: Boolean,
  },
};
</script>

<style>
.dialog-mask {
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

.dialog-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.dialog-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgb(36, 36, 36);
  border-radius: 15px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.548);
  transition: all 0.4s ease;
  text-align: center;
}

@media all and (max-width: 700px) {
  .dialog-container {
    width: 200px;
  }
}

.dialog-header h2 {
  margin-top: 0;
  color: #42b983;
  font-family: "Raleway", sans-serif;
}

.dialog-body h3 {
  color: white;
  font-family: "Raleway", sans-serif;
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

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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