<template>
  <div class="journey-list">
    <span
      @click="$router.push({ query: { journey_id: stop.id }, append: true })"
      class="journey-item"
      :class="{ selected: $route.query.journey_id === stop.id }"
      v-for="(stop, key) in sortedJourneys"
      :key="key"
      ><b>{{ stop.stops_count }}</b> - {{ stop.id }}</span
    >
  </div>
</template>

<script>
import JourneyService from "@/services/transport/journey.js";
export default {
  created() {
    JourneyService.getAll().then((result) => {
      this.journeys = result;
    });
  },
  data: () => ({
    journeys: [],
  }),
  computed: {
    sortedJourneys() {
      return this.journeys.sort((a, b) => b.stops_count - a.stops_count);
    },
  },
};
</script>

<style scoped lang="scss">
.journey-list {
  display: flex;
  flex-direction: column;

  .journey-item {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    &.selected {
      font-weight: 600;
    }
  }
}
</style>
