<template>
  <div class="map-holder"></div>
</template>

<script>
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import 'ol/ol.css'

export default {
  props: {
    mapOptions: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    this.mapInstance = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: this.$el,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      ...this.mapOptions
    });

    this.mapInstance.once('postrender', () => {
      this.$emit('map-ready', this.mapInstance)
    })
  },
  beforeUnmount() {
    this.mapInstance.setTarget(null);
  },
  data: () => ({
    mapInstance: null,
  }),
  watch: {
    mapOptions: {
      deep: true,
      handler(newOpts) {
        this.mapInstance.setOptions(newOpts)
      }
    }
  }
};
</script>

<style scoped lang="scss">
.map-holder {
  width: 800px;
  height: 720px;
}
</style>
