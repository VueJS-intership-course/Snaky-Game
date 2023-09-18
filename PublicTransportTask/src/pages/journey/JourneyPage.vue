<template>
  <div class="wrapper">
    <JourneyList />
    <OLMap @map-ready="onMapReady" ref="mapCmp" />
    <OLPopup ref="popup" id="journey-info">
      <template v-if="feature">
        <h1>{{ feature.getProperties().properties.name }}</h1>
      </template>
    </OLPopup>
    <!-- todo show map here -->
  </div>
</template>

<script>
import JourneyList from "@/pages/journey/JourneyList.vue";
import JourneyService from "@/services/transport/journey.js";

import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import Point from "ol/geom/Point.js";

import OLMap from "@/components/OLMap.vue";
import OLPopup from "@/components/OLPopup.vue";

export default {
  components: {
    JourneyList,
    OLMap,
    OLPopup,
  },
  data: () => ({
    map: null,
    stops: [],
    layer: null,
    feature: null,
  }),
  methods: {
    loadJourney(id) {
      JourneyService.getJourney(id).then((result) => {
        this.stops = result;
        this.map.removeLayer(this.layer);
        console.warn();
        this.layer = this.createLayer(this.stops);
        this.map.addLayer(this.layer);
        const extent = this.layer.getSource().getExtent();
        this.$refs.mapCmp.mapInstance
          .getView()
          .fit(extent, { duration: 2500, zoom: 15 });
      });
    },
    createLayer(stop) {
      const source = new VectorSource({
        features: stop.map(
          (item) =>
            new Feature({
              geometry: new Point(fromLonLat([item.lon, item.lat])),
              properties: item,
            })
        ),
      });

      return new VectorLayer({ source });
    },
    onMapReady(mapInstance) {
      this.map = mapInstance;
      this.map.addOverlay(this.$refs.popup.overlay);
      console.warn(this.$refs.popup.overlay);
      this.map.on("singleclick", (e) => {
        this.$refs.popup.overlay.setPosition(e.coordinate);
        this.map.forEachFeatureAtPixel(
          this.map.getPixelFromCoordinate(e.coordinate),
          (feature) => {
            this.feature = feature
            console.warn(this.feature)
          }
        );
      });
    },
  },
  watch: {
    "$route.query.journey_id": {
      immediate: true,
      handler(journeyId) {
        if (journeyId) {
          this.loadJourney(journeyId);
        }
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
