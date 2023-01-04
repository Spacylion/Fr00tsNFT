<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <h1 class="title">fr00t's Agreement</h1>
      <hr />
      <slot></slot>
      <hr />
      <div class="footer">
        <slot name="actions" :close="close" :confirm="confirm">
          <button @click="confirm">Ok</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  currentPopupController: null,

  data() {
    return { isOpen: false }
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown)
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown)
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close()
      }
    },

    open() {
      let resolve
      let reject
      const popupPromise = new Promise((ok, fail) => {
        resolve = ok
        reject = fail
      })

      this.$options.popupController = { resolve, reject }
      this.isOpen = true

      return popupPromise
    },

    confirm() {
      this.$options.popupController.resolve(true)
      this.isOpen = false
    },

    close() {
      this.$options.popupController.resolve(false)
      this.isOpen = false
    },
  },
}
</script>

<style>
.popup {
  top: 50px;
  padding: 10px;
  left: 20%;
  transform: translateX(-15%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}

.popup h1 {
  text-align: center;
  margin: 0;
}
.title {
  font-size: 2rem;
  font-weight: bold;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.footer {
  text-align: right;
}
</style>
