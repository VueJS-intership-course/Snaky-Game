<template>
  <div class="wrapper">
    <JourneyList />
    <OLMap @map-ready="onMapReady" ref="mapCmp" />
    <!-- todo show map here -->
  </div>
</template>

<script>
import JourneyList from '@/pages/journey/JourneyList.vue';
import JourneyService from "@/services/transport/journey.js";

import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import Feature from 'ol/Feature';
import VectorSource from "ol/source/Vector";
import Point from "ol/geom/Point.js";

import OLMap from '@/components/OLMap.vue';
export default {
  components: {
    JourneyList,
    OLMap
  },
  data: () => ({
    map: null,
    stops: [],
    layer: null
  }),
  methods: {
    loadJourney(id) {
      JourneyService.getJourney(id).then((result) => {
        this.stops = result;
        this.map.removeLayer(this.layer)
        console.warn()
        this.layer = this.createLayer(this.stops)
        this.map.addLayer(this.layer)
        const extent = this.layer.getSource().getExtent();
        this.$refs.mapCmp.mapInstance.getView().fit(extent, {duration: 2500, zoom: 15})
      })
    },
    createLayer(stop) {
      const source = new VectorSource({
        features: stop.map(item => new Feature({
          geometry: new Point(fromLonLat([item.lon, item.lat])),
          properties: item
        }))
      })
      
      return new VectorLayer({source})
    },
    onMapReady(mapInstance) {
      console.warn(mapInstance)
      this.map = mapInstance;
      console.warn(this.$refs.mapCmp.mapInstance)
    }
  },
  watch: {
    '$route.query.journey_id':{
      immediate: true,
      handler(journeyId) {
        if(journeyId) {
          this.loadJourney(journeyId)
        }
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>