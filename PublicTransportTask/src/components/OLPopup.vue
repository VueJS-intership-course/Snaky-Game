<template>
  <div class="ol-popup popup-wrapper">
    <!-- close popup el -->
    <a
      href="#"
      @click.prevent.stop="onClose"
      ref="popupCloser"
      class="ol-popup-closer"
    ></a>
    <div ref="popupContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from "ol/Overlay.js";

export default {
  mounted() {
    this.overlay = new Overlay({
      // id: 'my-id-here',
      element: this.$el,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
  },
  methods: {
    onClose() {
      this.overlay.setPosition(undefined);
      return false;
    },
  },
  data: () => ({
    overlay: null,
  }),
};
</script>

<style lang="scss" scoped>
.ol-popup {
  position: absolute;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  min-width: 280px;
}
.ol-popup:after,
.ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
}
.ol-popup-closer:after {
  content: "✖";
}
</style>
