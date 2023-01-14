<template>
  <gmaps-map :options="mapOptions" style="height: 100vh">
    <gmaps-heatmap
        :dissipating="true"
        :radius="50"
        :weightProp="10"
        :items="heatmapItems100"
        :colors=" ['transparent', 'rgba(255,6,0,0.6)','#FF0600']"
        opacity="0.6"
    />
    <gmaps-heatmap
        :dissipating="true"
        :radius="50"
        :weightProp="10"
        :items="heatmapItems80"
        :colors=" ['transparent', 'rgba(255,205,2,0.6)','#FFCD02']"
        opacity="0.6"
    />
    <gmaps-heatmap
        :dissipating="true"
        :radius="50"
        :weightProp="10"
        :items="heatmapItems60"
        :colors=" ['transparent', 'rgba(255,248,0,0.6)','#FFF800']"
        opacity="0.6"
    />
    <gmaps-heatmap
        :dissipating="true"
        :radius="50"
        :weightProp="10"
        :items="heatmapItems40"
        :colors=" ['transparent', 'rgba(169,255,0,0.6)','#A9FF00']"
        opacity="0.6"
    />
    <gmaps-heatmap
        :dissipating="true"
        :radius="50"
        :weightProp="10"
        :items="heatmapItems20"
        :colors=" ['transparent', 'rgba(81,255,0,0.6)','#51FF00']"
        opacity="0.6"
    />
  </gmaps-map>
</template>

<script>
import { gmapsMap, gmapsHeatmap } from 'x5-gmaps'
export default {
  components: { gmapsMap, gmapsHeatmap },
  data: () => ({
    mapOptions: {
      center: { lat: 42.8746, lng: 74.5698 },
      zoom: 10
    },
    colorsHeat: ['#FF0600', '#FFCD02','#FFF800', '#A9FF00', '#51FF00'],
    heatmapItems100: [
      { lat: 42.874612261799065, lng: 74.62345944112172},
      { lat: 42.880052918901896, lng: 74.63830814939753},
      { lat: 42.87297682601625, lng: 74.61187229882556 },
    ],
    heatmapItems80: [
      { lat: 40.5317, lng: 72.7949 },
      { lat: 42.8112, lng: 74.6272 },
      { lat: 42.8733, lng: 74.6046 },
    ],
    heatmapItems60: [
      { lat: 42.8504, lng: 74.5850 },
      { lat: 42.8398, lng: 74.6011 },
    ],
    heatmapItems40: [
      { lat: 42.8716, lng: 74.6780 },
      { lat: 42.8537, lng: 74.6044 },
    ],
    heatmapItems20: [
      { lat: 42.8430, lng: 74.6150 },
      { lat: 42.86406, lng: 74.33698 },
    ]
  }),
}
</script>